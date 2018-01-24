'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toast = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _styles = require('./styles');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = function (_React$Component) {
    _inherits(Toast, _React$Component);

    function Toast(props) {
        _classCallCheck(this, Toast);

        var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));

        _this.state = {
            containerStyleExt: _this.setContainerStyle().container
        };
        return _this;
    }
    // set container style


    _createClass(Toast, [{
        key: 'setContainerStyle',
        value: function setContainerStyle() {
            // create style object
            var style = {};
            style.animate = {};
            // switch position
            switch (this.props.position) {
                case 'top':
                    style.container = (0, _objectAssign2.default)({}, _styles.containerStyle, _styles.containerTopStyle);
                    style.animate.show = (0, _objectAssign2.default)({}, _styles.animateDownStyleToShow);
                    style.animate.hide = (0, _objectAssign2.default)({}, _styles.animateDownStyleToHide);
                    break;
                case 'bottom':
                    style.container = (0, _objectAssign2.default)({}, _styles.containerStyle, _styles.containerBottomStyle);
                    style.animate.show = (0, _objectAssign2.default)({}, _styles.animateUpStyleToShow);
                    style.animate.hide = (0, _objectAssign2.default)({}, _styles.animateUpStyleToHide);
                    break;
                case 'default':
                    style.container = (0, _objectAssign2.default)({}, _styles.containerStyle, _styles.containerDefaultStyle);
                    style.animate.show = (0, _objectAssign2.default)({}, _styles.animateFadeStyleToShow);
                    style.animate.hide = (0, _objectAssign2.default)({}, _styles.animateFadeStyleToHide);
                    break;
                default:
                    style.container = (0, _objectAssign2.default)({}, _styles.containerStyle, _styles.containerDefaultStyle);
                    style.animate.show = (0, _objectAssign2.default)({}, _styles.animateFadeStyleToShow);
                    style.animate.hide = (0, _objectAssign2.default)({}, _styles.animateFadeStyleToHide);
                    break;
            }
            // return style
            return style;
        }
        // set content style

    }, {
        key: 'setContentStyle',
        value: function setContentStyle() {
            // create style object
            var style = {};
            // switch type
            switch (this.props.type) {
                case 'success':
                    style = (0, _objectAssign2.default)({}, _styles.contentBaseStyle, _styles.contentSuccessStyle);
                    break;
                case 'error':
                    style = (0, _objectAssign2.default)({}, _styles.contentBaseStyle, _styles.contentErrorStyle);
                    break;
                case 'warning':
                    style = (0, _objectAssign2.default)({}, _styles.contentBaseStyle, _styles.contentWarningStyle);
                    break;
                case 'info':
                    style = (0, _objectAssign2.default)({}, _styles.contentBaseStyle, _styles.contentInfoStyle);
                    break;
                default:
                    style = (0, _objectAssign2.default)({}, _styles.contentBaseStyle);
                    break;
            }
            // if set backgroundColor attr
            if (this.props.backgroundColor) {
                style = (0, _objectAssign2.default)({}, style, { backgroundColor: this.props.backgroundColor });
            }
            // if set textColor attr
            if (this.props.textColor) {
                style = (0, _objectAssign2.default)({}, style, { color: this.props.textColor });
            }
            // return style
            return style;
        }
        // after component mount

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _containerStyle = this.setContainerStyle();
            // // show toast effect style
            setTimeout(function () {
                _this2.setState({
                    containerStyleExt: (0, _objectAssign2.default)({}, _containerStyle.container, _containerStyle.animate.show)
                });
            }, 100);
            // hide toast effect style, do it after timeout
            setTimeout(function () {
                _this2.setState({
                    containerStyleExt: (0, _objectAssign2.default)({}, _containerStyle.container, _containerStyle.animate.hide)
                });
            }, this.props.timeout);
        }

        // render component

    }, {
        key: 'render',
        value: function render() {
            var text = this.props.text;

            var _contentStyle = this.setContentStyle();
            return _react2.default.createElement(
                'div',
                { style: this.state.containerStyleExt },
                _react2.default.createElement(
                    'span',
                    { style: _contentStyle },
                    text
                )
            );
        }
    }]);

    return Toast;
}(_react2.default.Component);
// component prop types


Toast.PropTypes = {
    text: _propTypes2.default.string,
    type: _propTypes2.default.string,
    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool])

    // will mount react dom
};
var _class = function (_React$Component2) {
    _inherits(_class, _React$Component2);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { id: _config.wrapper });
        }
    }]);

    return _class;
}(_react2.default.Component);

// mount toast to wrapper dom


exports.default = _class;
function mountToast(text, type, config) {
    _reactDom2.default.render(_react2.default.createElement(Toast, _extends({ text: text, type: type }, config)), document.getElementById(_config.wrapper));
}

// un mount toast to wrapper dom
function umountToast() {
    _reactDom2.default.unmountComponentAtNode(document.getElementById(_config.wrapper));
}

// show animated toast
function show(text) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var newConfig = (0, _objectAssign2.default)({}, _config.options, config);
    if (!document.getElementById(_config.wrapper).hasChildNodes()) {
        // mount toast
        mountToast(text, type, newConfig);
        // un mount after timeout
        setTimeout(function () {
            umountToast();
        }, newConfig.timeout + _config.duration);
        return true;
    }
    return false;
}

// export methods what dispatch toast
var toast = exports.toast = {
    show: show
};