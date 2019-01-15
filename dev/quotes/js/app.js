var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var quotes = [{
    quote: "Experience is overrated. Some people say they have twenty years, when in reality, they only have one year’s experience, repeated twenty times.",
    author: "Stephen Covey"
}, {
    quote: "I can remain on shore, paralyzed with fear, or I can raise my sails and dip and soar in the breeze.",
    author: "Richard Bode"
}, {
    quote: "When you're finished changing, you're finished.",
    author: "Benjamin Franklin"
}, {
    quote: "It is not necessary to change. Survival is not mandatory.",
    author: "W. Edwards Deming"
}, {
    quote: "Don't settle.",
    author: "Steve Jobs"
}, {
    quote: "Impossible is not a declaration. It’s a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.",
    author: "Muhammed Ali"
}, {
    quote: "It isn’t enough to think outside the box. Thinking is passive. Get used to acting outside of the box.",
    author: "Tim Ferris"
}, {
    quote: "Even the greatest was once a beginner. Don’t be afraid to take that first step.",
    author: "Unknown"
}, {
    quote: "You cannot change your destination overnight, but you can change your direction overnight.",
    author: "Jim Rohn"
}, {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
}, {
    quote: "It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something.",
    author: "Franklin D. Roosevelt"
}, {
    quote: "Tomorrow is often the busiest day of the week.",
    author: "Spanish Proverb"
}, {
    quote: "Just do it!",
    author: "Nike"
}];

var QuoteMachine = function (_React$Component) {
    _inherits(QuoteMachine, _React$Component);

    function QuoteMachine(props) {
        _classCallCheck(this, QuoteMachine);

        var _this = _possibleConstructorReturn(this, (QuoteMachine.__proto__ || Object.getPrototypeOf(QuoteMachine)).call(this, props));

        _this.state = _this.randomQuote();
        _this.newQuote = _this.newQuote.bind(_this);
        return _this;
    }

    _createClass(QuoteMachine, [{
        key: "randomQuote",
        value: function randomQuote() {
            return quotes[Math.floor(Math.random() * quotes.length)];
        }
    }, {
        key: "newQuote",
        value: function newQuote(event) {
            this.setState(this.randomQuote());
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "quote-box" },
                React.createElement(
                    "div",
                    { id: "quote" },
                    React.createElement(
                        "blockquote",
                        { id: "text" },
                        "\u201C",
                        this.state.quote,
                        "\u201D"
                    ),
                    React.createElement(
                        "cite",
                        { id: "author" },
                        "\u2013 ",
                        this.state.author
                    )
                ),
                React.createElement(
                    "div",
                    { id: "controls" },
                    React.createElement(
                        "a",
                        { href: "https://twitter.com/intent/tweet?hashtags=quotes&text=" + this.state.quote + " - " + this.state.author, id: "tweet-quote" },
                        React.createElement("i", { "class": "fab fa-twitter-square" }),
                        " Tweet quote"
                    ),
                    React.createElement(
                        "button",
                        { id: "new-quote", onClick: this.newQuote },
                        React.createElement("i", { "class": "fas fa-sync-alt" }),
                        " New quote"
                    )
                )
            );
        }
    }]);

    return QuoteMachine;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(QuoteMachine, null), appRoot);