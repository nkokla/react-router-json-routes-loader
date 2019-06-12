"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.withRouteContext = exports.withRouteProvider = exports.initRouteProvider = exports.RouteProviderContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jsonRoutesLoader = _interopRequireDefault(require("json-routes-loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AppRouteProvider = new _jsonRoutesLoader["default"]();

function getDisplayName__(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

var RouteProviderContext = _react["default"].createContext();

exports.RouteProviderContext = RouteProviderContext;

var initRouteProvider = function initRouteProvider(routeProviderOptions) {
  return AppRouteProvider.initRegister(routeProviderOptions);
};

exports.initRouteProvider = initRouteProvider;

var withRouteProvider = function withRouteProvider(WrappedComponent, routeProviderOptions) {
  var _class, _temp;

  console.log("routeProviderOptions", routeProviderOptions);
  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WithRouteProvider, _Component);

    function WithRouteProvider() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, WithRouteProvider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithRouteProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        RouteProvider: AppRouteProvider
      });

      return _this;
    }

    _createClass(WithRouteProvider, [{
      key: "componentDidMount",
      value: function () {
        var _componentDidMount = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return AppRouteProvider.initRegister(routeProviderOptions);

                case 2:
                  this.setState({
                    RouteProvider: AppRouteProvider
                  });

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function componentDidMount() {
          return _componentDidMount.apply(this, arguments);
        }

        return componentDidMount;
      }()
    }, {
      key: "render",
      value: function render() {
        return _react["default"].createElement(RouteProviderContext.Provider, {
          value: this.state
        }, _react["default"].createElement(WrappedComponent, this.props));
      }
    }]);

    return WithRouteProvider;
  }(_react.Component), _defineProperty(_class, "displayName", "withRouteProvider(".concat(getDisplayName__(WrappedComponent), ")")), _temp;
};

exports.withRouteProvider = withRouteProvider;

var withRouteContext = function withRouteContext(WrappedComponent, Route_, Switch_) {
  var WithRouteContext =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(WithRouteContext, _PureComponent);

    function WithRouteContext() {
      var _getPrototypeOf3;

      var _this2;

      _classCallCheck(this, WithRouteContext);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(WithRouteContext)).call.apply(_getPrototypeOf3, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this2), "getDataRoute",
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var path, _this2$context$RouteP, RouteProvider;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                path = _this2.props.path;
                _this2$context$RouteP = _this2.context.RouteProvider, RouteProvider = _this2$context$RouteP === void 0 ? {
                  register: []
                } : _this2$context$RouteP;

                if (!(!RouteProvider.register || !RouteProvider.register[path])) {
                  _context2.next = 5;
                  break;
                }

                // Do something for alert : It is not a registred route
                console.log("=======> Not route ! > ".concat(path, " >"), RouteProvider, _objectSpread({}, _this2.context.RouteProvider.register));
                return _context2.abrupt("return", false);

              case 5:
                if (RouteProvider.register[path].payload) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 8;
                return RouteProvider.loadRoute(path);

              case 8:
                _this2.setState({
                  dataRoute: RouteProvider.register[path].payload
                });

              case 9:
                return _context2.abrupt("return", true);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));

      return _this2;
    }

    _createClass(WithRouteContext, [{
      key: "componentDidMount",
      value: function () {
        var _componentDidMount2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.getDataRoute();

                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function componentDidMount() {
          return _componentDidMount2.apply(this, arguments);
        }

        return componentDidMount;
      }()
    }, {
      key: "componentDidUpdate",
      value: function () {
        var _componentDidUpdate = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4(prevProps) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  this.getDataRoute();

                case 1:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function componentDidUpdate(_x) {
          return _componentDidUpdate.apply(this, arguments);
        }

        return componentDidUpdate;
      }()
    }, {
      key: "render",
      value: function render() {
        var path = this.props.path;
        var RouteProvider = this.context.RouteProvider;
        return _react["default"].createElement(WrappedComponent, _extends({
          RouteProvider: RouteProvider,
          path: path,
          dataRoute: RouteProvider.register && RouteProvider.register[path] && RouteProvider.register[path].payload || []
        }, this.props));
      }
    }]);

    return WithRouteContext;
  }(_react.PureComponent);

  _defineProperty(WithRouteContext, "contextType", RouteProviderContext);

  _defineProperty(WithRouteContext, "Routes", function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!Route_) {
      console.error("react-router-json-routes-loader > withRouteContext Error > '".concat(WrappedComponent, ".Routes' can not be apply and return 'null' : you did not transmit the 'Route' from 'React-Router' to 'withRouteContext'."));
      return null;
    }

    return Object.keys(AppRouteProvider.register || {}).sort().reverse().map(function (path) {
      return _react["default"].createElement(Route_, {
        key: path,
        path: path,
        strict: true,
        exact: true,
        render: function render() {
          return _react["default"].createElement(WithRouteContext, _extends({
            path: path
          }, props));
        }
      });
    });
  });

  _defineProperty(WithRouteContext, "Switch", function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!Switch_) {
      console.error("react-router-json-routes-loader > withRouteContext Error > '".concat(WrappedComponent, ".Switch' can not be apply and return 'null' : you did not transmit the 'Switch' from 'React-Router' to 'withRouteContext'."));
      return null;
    }

    return _react["default"].createElement(Switch_, null, _react["default"].createElement(WithRouteContext.Routes, props));
  });

  WithRouteContext.displayName = "WithDataRoute(".concat(getDisplayName__(WrappedComponent), ")");
  WithRouteContext.Routes.displayName = "WithDataRoute(".concat(getDisplayName__(WrappedComponent), ".Routes)");
  WithRouteContext.Switch.displayName = "WithDataRoute(".concat(getDisplayName__(WrappedComponent), ".Switch)");
  return WithRouteContext;
};

exports.withRouteContext = withRouteContext;
var _default = RouteProviderContext;
exports["default"] = _default;
