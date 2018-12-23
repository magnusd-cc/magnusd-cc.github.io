var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WinningLight = function (_React$Component) {
    _inherits(WinningLight, _React$Component);

    function WinningLight(props) {
        _classCallCheck(this, WinningLight);

        var _this = _possibleConstructorReturn(this, (WinningLight.__proto__ || Object.getPrototypeOf(WinningLight)).call(this, props));

        _this.state = {
            message: "",
            mode: "off"
        };
        return _this;
    }

    _createClass(WinningLight, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            if (this.props.gameOver != prevProps.gameOver || this.props.winning != prevProps.winning) {
                if (this.props.gameOver) {
                    this.setState({
                        message: "Insert coin",
                        mode: "flashing"
                    });
                } else if (this.props.winning) {
                    this.setState({
                        message: "You win!",
                        mode: "flashing"
                    });
                } else {
                    this.setState({
                        message: "",
                        mode: "off"
                    });
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "winning-light", className: "light-" + this.state.mode },
                React.createElement(
                    "span",
                    null,
                    this.state.message
                )
            );
        }
    }]);

    return WinningLight;
}(React.Component);

export default WinningLight;