# react-router-json-routes-loader

React-router implementation of [json-routes-loader](https://github.com/nkokla/json-routes-loader) with HOC

## Getting Started

Install the `react-router-json-routes-loader` lib.

```bash
npm i json-routes-loader
```

## Prerequisites

This is an implementation of [json-routes-loader](https://github.com/nkokla/json-routes-loader) to simplify the routes loading of your react application.

Requires some basic notions about using React and React-router for the web.
You should know what is the components Router, Route and Switch from React-router/React-router-dom.

## Usage

### Quick sample

Install the `react-router-json-routes-loader` lib.

```bash
npm i json-routes-loader
```

In your app, import the components from `react-router-json-routes-loader` and `react-router`

```JavaScript
import {withRouteProvider, withRouteContext} from 'react-router-json-routes-loader'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
```

Use the HOC on your components.

```JavaScript
If you want, you can set some option for
const routeProviderOptions = {
    // [...
    //    See option object of json-routes-loader :
    //    https://github.com/nkokla/json-routes-loader#options
    // ]
}


Const Layout = ({dataRoute, path, ...otherProps}) => (
    <div className="Layout">
        Route: {path}
        For this route, you have this content : {dataRoute}
        <hr />
        Also you have set this props on the component : {JSON.strigify(otherProps)}
    </div>
)
const MyLayout = withRouteContext(Layout, Route, Switch)

Const App = () => ()
    <div className="App">
        <Router>
            <MyLayout.Switch userProps="Hey ! It's me, Luigi ! " />
        </Router>
    </div>
)
const MyApp = withRouteProvider(App, routeProviderOptions);

ReactDOM.render(<MyApp />, document.getElementById("root"));

```

### withRouteProvider

```JavaScript
withRouteProvider(ReactComponent[, routeProviderOptions]);
```

This function return a Component who initialize a 'routes-provider' from [json-routes-loader](https://github.com/nkokla/json-routes-loader) module and pre-sets this provider as context. This context will be use by the components return by `withRouteContext()`.

#### Arguments

- **ReactComponent** (react-component - require): Any react-component.
- **routeProviderOptions** (Object): Object who respect the description of options from [json-routes-loader](https://github.com/nkokla/json-routes-loader#options)

#### Return

New react component similar to `ReactComponent`

### withRouteContext

```JavaScript
withRouteContext(ReactComponent[, Route[, Switch]]);
```

This function connect a 'react-component' to the context of the 'routes-provider'. It return the new connected component who must only be used as child (no necessarly as direct child) of component returned by the `withRouteContext()` function.

#### Arguments

- **ReactComponent** (react-component - require): Any react-component.
- **Route** (react component): the [`Route` component of `react-router`](https://reacttraining.com/react-router/web/api/Route) from your application. if setted, you have access to the `<ReactComponent.Routes />` component.
- **Switch** (react component): the [`Switch` component of `react-router`](https://reacttraining.com/react-router/web/api/Switch) from your application. if setted, you have access to the `<ReactComponent.Switch />` component.

#### Return

A new react component similar to `ReactComponent`. When this component is mounted inside a parent who resulted from `withRouteContext()`, it automatically receive these pre-setted props :

- **RouteProvider** (Object): The used 'routes-provider' from [json-routes-loader](https://github.com/nkokla/json-routes-loader) module.
- **path** (String): The path (or route) of the current view.
- **dataRoute** (Any): The data contens in the payload of the view (See the doc of `loadRoute()` method from [json-routes-loader](https://github.com/nkokla/json-routes-loader#--loadroute))

### Evolved Components from `withRouteContext()`

If you set the arguments Switch and/or Route during call of `withRouteContext()`, like this (by example) :

```JavaScript
import { Route, Switch } from "react-router-dom";

const ReactComponent = props => <div {...props}>

const RoutedComponent = withRouteContext(ReactComponent, Route, Switch);
```

So you have access to thes evolve components :

#### - <RoutedComponent.Routes {...anyProps} />

Represente an list (array) of RoutedComponent for each route of the `route-provider`. You can directly use this component as child of a `<Switch />` component (from `react-router`). All props of this component are passed to each `<RoutedComponent />` of this list.

**sample :**

```JavaScript
Const App = () => ()
    <div className="App">
        <Router>
            <Switch>
                <MyLayout.Routes userProps="Hey ! It's me, Luigi ! " />
                <Route path='/any/thing'>
                    <AnyOtherComponent {...someProps}/>
                </Route>
            </Switch>
        </Router>
    </div>
)
```

#### - <RoutedComponent.Switch {...anyProps} />

Represente a `<Switch>` with a list (array) of RoutedComponent for each route of the `route-provider` as children (like `<RoutedComponent.Routes {...anyProps} />` above). You can directly use this component as child of a `<Router />` component (from `react-router`, like `<BrowserRouter />`, `<HashRouter />`, etc.). All props of this component are passed to each `<RoutedComponent />` of this list. (See the [first sample on top](#quick-sample)).
