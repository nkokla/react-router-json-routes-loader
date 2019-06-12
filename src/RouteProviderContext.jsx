import React, { Component, Fragment, PureComponent } from "react";

import JsonRoutesLoader from "json-routes-loader";

const AppRouteProvider = new JsonRoutesLoader();

function getDisplayName__(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export const RouteProviderContext = React.createContext();

export const initRouteProvider = routeProviderOptions =>
  AppRouteProvider.initRegister(routeProviderOptions);

export const withRouteProvider = (WrappedComponent, routeProviderOptions) => {
  return class WithRouteProvider extends Component {
    static displayName = `withRouteProvider(${getDisplayName__(
      WrappedComponent
    )})`;

    state = {
      RouteProvider: AppRouteProvider
    };

    async componentDidMount() {
      await AppRouteProvider.initRegister(routeProviderOptions);
      this.setState({ RouteProvider: AppRouteProvider });
    }

    render() {
      return (
        <RouteProviderContext.Provider value={this.state}>
          <WrappedComponent {...this.props} />
        </RouteProviderContext.Provider>
      );
    }
  };
};

export const withRouteContext = (WrappedComponent, Route_, Switch_) => {
  class WithRouteContext extends PureComponent {
    static contextType = RouteProviderContext;

    static Routes = (props = {}) => {
      if (!Route_) {
        console.error(
          `react-router-json-routes-loader > withRouteContext Error > '${WrappedComponent}.Routes' can not be apply and return 'null' : you did not transmit the 'Route' from 'React-Router' to 'withRouteContext'.`
        );
        return null;
      }
      return Object.keys(AppRouteProvider.register || {})
        .sort()
        .reverse()
        .map(path => (
          <Route_
            key={path}
            path={path}
            strict={true}
            exact={true}
            render={() => {
              return <WithRouteContext path={path} {...props} />;
            }}
          />
        ));
    };

    static Switch = (props = {}) => {
      if (!Switch_) {
        console.error(
          `react-router-json-routes-loader > withRouteContext Error > '${WrappedComponent}.Switch' can not be apply and return 'null' : you did not transmit the 'Switch' from 'React-Router' to 'withRouteContext'.`
        );
        return null;
      }
      return (
        <Switch_>
          <WithRouteContext.Routes {...props} />
        </Switch_>
      );
    };

    getDataRoute = async () => {
      const { path } = this.props;
      const { RouteProvider = { register: [] } } = this.context;

      if (!RouteProvider.register || !RouteProvider.register[path]) {
        // Do something for alert : It is not a registred route
        console.log(`=======> Not route ! > ${path} >`, RouteProvider, {
          ...this.context.RouteProvider.register
        });
        return false;
      }

      if (!RouteProvider.register[path].payload) {
        await RouteProvider.loadRoute(path);
        this.setState({ dataRoute: RouteProvider.register[path].payload });
      }

      return true;
    };

    async componentDidMount() {
      this.getDataRoute();
    }

    async componentDidUpdate(prevProps) {
      this.getDataRoute();
    }

    render() {
      const { path } = this.props;
      const { RouteProvider } = this.context;

      return (
        <WrappedComponent
          RouteProvider={RouteProvider}
          path={path}
          dataRoute={
            (RouteProvider.register &&
              RouteProvider.register[path] &&
              RouteProvider.register[path].payload) ||
            []
          }
          {...this.props}
        />
      );
    }
  }

  WithRouteContext.displayName = `WithDataRoute(${getDisplayName__(
    WrappedComponent
  )})`;
  WithRouteContext.Routes.displayName = `WithDataRoute(${getDisplayName__(
    WrappedComponent
  )}.Routes)`;
  WithRouteContext.Switch.displayName = `WithDataRoute(${getDisplayName__(
    WrappedComponent
  )}.Switch)`;

  return WithRouteContext;
};

export default RouteProviderContext;
