var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_SESSION_LENGTH = 25;
var DEFAULT_BREAK_LENGTH = 5;

var SESSION = "Session";
var BREAK = "Break";

var DEFAULT_STATE = {
    breakLength: DEFAULT_BREAK_LENGTH,
    sessionLength: DEFAULT_SESSION_LENGTH,
    secondsLeft: DEFAULT_SESSION_LENGTH * 60,
    mode: SESSION,
    running: false
};

var Pomodoro = function (_React$Component) {
    _inherits(Pomodoro, _React$Component);

    function Pomodoro(props) {
        _classCallCheck(this, Pomodoro);

        var _this = _possibleConstructorReturn(this, (Pomodoro.__proto__ || Object.getPrototypeOf(Pomodoro)).call(this, props));

        _this.state = DEFAULT_STATE;
        _this.reset = _this.reset.bind(_this);
        _this.startStop = _this.startStop.bind(_this);
        _this.adjustBreak = _this.adjustBreak.bind(_this);
        _this.adjustSession = _this.adjustSession.bind(_this);
        return _this;
    }

    _createClass(Pomodoro, [{
        key: "reset",
        value: function reset() {
            this.setState(DEFAULT_STATE);
            document.getElementById("beep").pause();
        }
    }, {
        key: "startStop",
        value: function startStop() {
            this.setState({
                running: !this.state.running
            });
            document.getElementById("beep").play();
            document.getElementById("beep").pause();
        }
    }, {
        key: "adjustBreak",
        value: function adjustBreak(adjustment) {

            var newBreakLength = this.state.breakLength + adjustment;

            if (newBreakLength > 0 && newBreakLength <= 60 && !this.state.running) {
                this.setState({
                    breakLength: newBreakLength
                });
                if (this.state.mode === BREAK) {
                    this.setState({
                        secondsLeft: newBreakLength * 60
                    });
                }
            }
        }
    }, {
        key: "adjustSession",
        value: function adjustSession(adjustment) {

            var newSessionLength = this.state.sessionLength + adjustment;

            if (newSessionLength > 0 && newSessionLength <= 60 && !this.state.running) {
                this.setState({
                    sessionLength: newSessionLength
                });
                if (this.state.mode === SESSION) {
                    this.setState({
                        secondsLeft: newSessionLength * 60
                    });
                }
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.interval = setInterval(function () {
                if (_this2.state.running) {

                    if (_this2.state.secondsLeft <= 0) {

                        if (_this2.state.mode === SESSION) {
                            _this2.setState({
                                mode: BREAK,
                                secondsLeft: _this2.state.breakLength * 60
                            });
                        } else {
                            _this2.setState({
                                mode: SESSION,
                                secondsLeft: _this2.state.sessionLength * 60
                            });
                        }
                    } else {
                        var newSecondsLeft = _this2.state.secondsLeft - 1;
                        _this2.setState({ secondsLeft: newSecondsLeft });
                        if (newSecondsLeft <= 0) {
                            document.getElementById("beep").currentTime = 0;
                            document.getElementById("beep").play();
                        }
                    }
                }
            }, 1000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.interval);
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "div",
                { id: "pomodoro", className: 'pomodoro' + this.state.mode },
                React.createElement(
                    "div",
                    { id: "settings" },
                    React.createElement(
                        "div",
                        { className: "lengthAdjustment" },
                        React.createElement(
                            "div",
                            { id: "break-label", className: "label" },
                            "Break Length"
                        ),
                        React.createElement(
                            "button",
                            { id: "break-decrement", onClick: function onClick() {
                                    return _this3.adjustBreak(-1);
                                } },
                            React.createElement("i", { className: "far fa-minus" }),
                            React.createElement(
                                "span",
                                { className: "hidden" },
                                "Decrease"
                            )
                        ),
                        React.createElement(
                            "span",
                            { id: "break-length" },
                            this.state.breakLength
                        ),
                        React.createElement(
                            "button",
                            { id: "break-increment", onClick: function onClick() {
                                    return _this3.adjustBreak(1);
                                } },
                            React.createElement("i", { className: "far fa-plus" }),
                            React.createElement(
                                "span",
                                { className: "hidden" },
                                "Increase"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "lengthAdjustment" },
                        React.createElement(
                            "div",
                            { id: "session-label", className: "label" },
                            "Session Length"
                        ),
                        React.createElement(
                            "button",
                            { id: "session-decrement", onClick: function onClick() {
                                    return _this3.adjustSession(-1);
                                } },
                            React.createElement("i", { className: "far fa-minus" }),
                            React.createElement(
                                "span",
                                { className: "hidden" },
                                "Decrease"
                            )
                        ),
                        React.createElement(
                            "span",
                            { id: "session-length" },
                            this.state.sessionLength
                        ),
                        React.createElement(
                            "button",
                            { id: "session-increment", onClick: function onClick() {
                                    return _this3.adjustSession(1);
                                } },
                            React.createElement("i", { className: "far fa-plus" }),
                            React.createElement(
                                "span",
                                { className: "hidden" },
                                "Increase"
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { id: "timer-label" },
                    this.state.mode
                ),
                React.createElement("div", { id: "decoration" }),
                React.createElement(
                    "div",
                    { id: "time-left" },
                    ("00" + Math.floor(this.state.secondsLeft / 60)).slice(-2),
                    ":",
                    ("00" + this.state.secondsLeft % 60).slice(-2)
                ),
                React.createElement(
                    "button",
                    { id: "start_stop", onClick: this.startStop },
                    React.createElement("i", { className: this.state.running ? "fas fa-pause" : "fas fa-play" }),
                    React.createElement(
                        "span",
                        { className: "hidden" },
                        "Start/Stop"
                    )
                ),
                React.createElement(
                    "button",
                    { id: "reset", onClick: this.reset },
                    React.createElement("i", { className: "fas fa-redo" }),
                    React.createElement(
                        "span",
                        { className: "hidden" },
                        "Reset"
                    )
                ),
                React.createElement("audio", { src: "sounds/beep.mp3", id: "beep" })
            );
        }
    }]);

    return Pomodoro;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(Pomodoro, null), appRoot);