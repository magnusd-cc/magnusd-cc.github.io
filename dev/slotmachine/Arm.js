var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Arm = function (_React$Component) {
    _inherits(Arm, _React$Component);

    function Arm(props) {
        _classCallCheck(this, Arm);

        var _this = _possibleConstructorReturn(this, (Arm.__proto__ || Object.getPrototypeOf(Arm)).call(this, props));

        _this.state = {
            animationToggle: 0
        };
        return _this;
    }

    _createClass(Arm, [{
        key: "pullArm",
        value: function pullArm() {

            if (this.props.spin()) {
                if (this.state.animationToggle === 2) {
                    this.setState({
                        animationToggle: 1
                    });
                } else {
                    this.setState({
                        animationToggle: 2
                    });
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { id: "arm-container" },
                React.createElement(
                    "button",
                    { id: "ball", onClick: function onClick() {
                            return _this2.pullArm();
                        } },
                    "Spin"
                ),
                React.createElement("div", { id: "arm", className: "arm-animation-" + this.state.animationToggle }),
                React.createElement("div", { id: "axis" })
            );
        }
    }]);

    return Arm;
}(React.Component);

export default Arm;