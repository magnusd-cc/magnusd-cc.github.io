var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SOUNDS = [{ id: "Q", sound: "bear" }, { id: "W", sound: "cat" }, { id: "E", sound: "elephant" }, { id: "A", sound: "cow" }, { id: "S", sound: "frog" }, { id: "D", sound: "lion" }, { id: "Z", sound: "rooster" }, { id: "X", sound: "horse" }, { id: "C", sound: "sheep" }];

var DrumMachine = function (_React$Component) {
    _inherits(DrumMachine, _React$Component);

    function DrumMachine(props) {
        _classCallCheck(this, DrumMachine);

        var _this = _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this, props));

        _this.state = {
            nowPlaying: null
        };
        _this.playSound = _this.playSound.bind(_this);
        document.addEventListener('keydown', DrumMachine.handleKeyDown);
        return _this;
    }

    _createClass(DrumMachine, [{
        key: "playSound",
        value: function playSound(id, sound) {
            document.getElementById(id).play();
            this.setState({
                nowPlaying: sound
            });
        }
    }, {
        key: "setNowPlaying",
        value: function setNowPlaying(sound) {
            this.setState({
                nowPlaying: sound
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { id: "drum-machine", className: this.state.nowPlaying },
                React.createElement(Display, { nowPlaying: this.state.nowPlaying }),
                React.createElement(
                    "div",
                    { id: "drum-pads" },
                    SOUNDS.map(function (sound) {
                        return React.createElement(DrumPad, { id: sound.id, sound: sound.sound, key: sound.id, setNowPlaying: function setNowPlaying() {
                                return _this2.setNowPlaying(sound.sound);
                            } });
                    })
                )
            );
        }
    }]);

    return DrumMachine;
}(React.Component);

var Display = function (_React$Component2) {
    _inherits(Display, _React$Component2);

    function Display(props) {
        _classCallCheck(this, Display);

        return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this, props));
    }

    _createClass(Display, [{
        key: "render",
        value: function render() {
            if (this.props.nowPlaying != null) {
                return React.createElement(
                    "div",
                    { id: "display" },
                    this.props.nowPlaying
                );
            } else {
                return React.createElement("div", null);
            }
        }
    }]);

    return Display;
}(React.Component);

var DrumPad = function (_React$Component3) {
    _inherits(DrumPad, _React$Component3);

    function DrumPad(props) {
        _classCallCheck(this, DrumPad);

        var _this4 = _possibleConstructorReturn(this, (DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call(this, props));

        _this4.play = _this4.play.bind(_this4);
        _this4.handleKeyDown = _this4.handleKeyDown.bind(_this4);
        return _this4;
    }

    _createClass(DrumPad, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            document.addEventListener("keydown", this.handleKeyDown);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            document.removeEventListener("keydown", this.handleKeyDown);
        }
    }, {
        key: "handleKeyDown",
        value: function handleKeyDown(event) {
            if (event.key.toUpperCase() === this.props.id) {
                this.play();
            }
        }
    }, {
        key: "play",
        value: function play() {
            document.getElementById(this.props.id).play();
            this.props.setNowPlaying();
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            return React.createElement(
                "button",
                { className: "drum-pad", id: this.props.sound, onClick: function onClick() {
                        return _this5.play();
                    } },
                this.props.id,
                React.createElement("audio", { src: "sounds/" + this.props.sound + ".mp3", id: this.props.id, className: "clip" })
            );
        }
    }]);

    return DrumPad;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(DrumMachine, null), appRoot);