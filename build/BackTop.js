'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    visibilityHeight: _react.PropTypes.number,
    click: _react.PropTypes.func,
    target: _react.PropTypes.func
};
var defaultProps = {
    visibilityHeight: 400,
    click: function click() {},
    target: function target() {
        return window;
    },
    character: _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-top-up' })
};

var Backtop = function (_Component) {
    _inherits(Backtop, _Component);

    function Backtop(props) {
        _classCallCheck(this, Backtop);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            show: false
        };
        _this.click = _this.click.bind(_this);
        _this.scroll = _this.scroll.bind(_this);
        return _this;
    }

    Backtop.prototype.componentDidMount = function componentDidMount() {
        this.scroll();
    };

    Backtop.prototype.scroll = function scroll() {
        var self = this;
        this.props.target().onscroll = function () {
            if ((self.props.target().scrollY || self.props.target().scrollTop) >= self.props.visibilityHeight) {
                self.setState({
                    show: true
                });
            } else {
                self.setState({
                    show: false
                });
            }
        };
    };

    Backtop.prototype.click = function click() {
        this.props.target().scrollTo ? this.props.target().scrollTo(0, 0) : this.props.target().scrollTop = 0;
        this.setState({
            show: false
        });
        this.props.click();
    };

    Backtop.prototype.render = function render() {
        return _react2["default"].createElement(
            'span',
            { className: (0, _classnames2["default"])({ 'u-backtop': true, 'hide': !this.state.show }), onClick: this.click },
            this.props.character
        );
    };

    return Backtop;
}(_react.Component);

;
Backtop.propTypes = propTypes;
Backtop.defaultProps = defaultProps;
exports["default"] = Backtop;
module.exports = exports['default'];