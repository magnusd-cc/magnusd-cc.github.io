var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Arm from './Arm.js';
import Reels from './Reels.js';
import PayTable from './PayTable.js';
import WinningLight from './WinningLight.js';

var SPINNING = "spinning";
var CHERRY = "cherry";
var ORANGE = "orange";
var LEMON = "lemon";
var BANANA = "banana";
var BAR = "bar";

var SlotMachine = function (_React$Component) {
    _inherits(SlotMachine, _React$Component);

    function SlotMachine(props) {
        _classCallCheck(this, SlotMachine);

        var _this = _possibleConstructorReturn(this, (SlotMachine.__proto__ || Object.getPrototypeOf(SlotMachine)).call(this, props));

        _this.state = {
            reels: [5, 5, 5],
            bet: 1,
            credits: 50,
            canSpin: true,
            winning: false,
            jackpot: false,
            gameOver: false
        };
        _this.spin = _this.spin.bind(_this);
        _this.decreaseBet = _this.decreaseBet.bind(_this);
        _this.increaseBet = _this.increaseBet.bind(_this);
        return _this;
    }

    _createClass(SlotMachine, [{
        key: 'spin',
        value: function spin() {
            var _this2 = this;

            if (this.state.credits > 0 && this.state.canSpin) {

                var newReels = [Math.ceil(Math.random() * 5), Math.ceil(Math.random() * 5), Math.ceil(Math.random() * 5)];

                var win = this.checkWin(newReels);

                this.setState({
                    credits: this.state.credits - this.state.bet,
                    canSpin: false
                });

                var timeReelsAreSpinning = this.spinReels(newReels);
                var timeToPayWin = 0;

                if (win > 0) {
                    setTimeout(function () {
                        _this2.increaseCredits(win);
                    }, timeReelsAreSpinning);
                    timeToPayWin = win * 50 + 20;

                    if (timeToPayWin < 700) {
                        timeToPayWin = 700;
                    }
                }

                setTimeout(function () {
                    _this2.setState({
                        bet: Math.min(_this2.state.bet, _this2.state.credits),
                        canSpin: true,
                        winning: false
                    });

                    if (_this2.state.credits === 0 && win === 0) {
                        _this2.setState({
                            gameOver: true
                        });
                    }
                }, timeReelsAreSpinning + timeToPayWin); // todo: tidy up delays

                return true;
            } else {

                return false;
            }
        }
    }, {
        key: 'increaseCredits',
        value: function increaseCredits(credits) {
            var _this3 = this;

            var balance = this.state.credits;
            for (var i = 0; i < credits; i++) {

                if (i === 0) {
                    this.setState({
                        winning: true
                    });
                }

                setTimeout(function () {
                    balance++;
                    _this3.setState({
                        credits: balance
                    });
                }, 50 * i);
            }
        }
    }, {
        key: 'spinReels',
        value: function spinReels(newReels) {
            var _this4 = this;

            var spinningTimes = [2000, 3000, 4000];
            var reels = [0, 0, 0];

            this.setState({
                reels: reels
            });

            var _loop = function _loop(n) {
                setTimeout(function () {
                    reels[n] = newReels[n];
                    _this4.setState({ reels: reels });
                }, spinningTimes[n]);
            };

            for (var n = 0; n < reels.length; n++) {
                _loop(n);
            }

            return spinningTimes[2];
        }
    }, {
        key: 'decreaseBet',
        value: function decreaseBet() {
            this.setState({
                bet: this.state.bet - 1
            });
        }
    }, {
        key: 'increaseBet',
        value: function increaseBet() {
            this.setState({
                bet: this.state.bet + 1
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'div',
                { id: 'wrapper' },
                React.createElement(
                    'div',
                    { id: 'machine' },
                    React.createElement(WinningLight, { gameOver: this.state.gameOver, winning: this.state.winning }),
                    React.createElement(Reels, { symbols: symbols, reels: this.state.reels }),
                    React.createElement(
                        'div',
                        { id: 'displays' },
                        React.createElement(
                            'div',
                            { id: 'score' },
                            'Credit',
                            React.createElement(
                                'span',
                                null,
                                '$',
                                this.state.credits
                            )
                        ),
                        React.createElement(
                            'div',
                            { id: 'bet' },
                            'Bet',
                            React.createElement(
                                'span',
                                null,
                                '$',
                                this.state.bet
                            )
                        ),
                        React.createElement(
                            'div',
                            { id: 'controls' },
                            React.createElement(
                                'button',
                                { id: 'decreaseBet', disabled: this.state.bet <= 1, onClick: this.decreaseBet },
                                '-'
                            ),
                            React.createElement(
                                'button',
                                { id: 'increaseBet', disabled: this.state.bet >= 20 || this.state.bet >= this.state.credits, onClick: this.increaseBet },
                                '+'
                            ),
                            React.createElement(
                                'button',
                                { id: 'spin', disabled: this.state.credits <= 0 || !this.state.canSpin, onClick: this.spin },
                                'Spin'
                            )
                        )
                    ),
                    React.createElement(PayTable, { payTable: payTable })
                ),
                React.createElement(Arm, { spin: function spin() {
                        return _this5.spin();
                    } })
            );
        }
    }, {
        key: 'checkWin',
        value: function checkWin(reels) {

            var occurrences = [[], [], [], [], [], []];
            var winnings = [];

            reels.forEach(function (symbol) {
                occurrences[symbol].push(symbols[symbol]);
            });

            occurrences.forEach(function (combination) {
                if (combination.length > 0) {
                    var winningCombination = payTable.find(function (row) {
                        return row.combination.join(',') === combination.join(',');
                    });
                    if (winningCombination != undefined) {
                        winnings.push(winningCombination.pay);
                    }
                }
            });

            return Math.max.apply(Math, winnings) * this.state.bet;
        }
    }]);

    return SlotMachine;
}(React.Component);

var payTable = [{ combination: [BAR, BAR, BAR], pay: 8 }, { combination: [BANANA, BANANA, BANANA], pay: 6 }, { combination: [LEMON, LEMON, LEMON], pay: 5 }, { combination: [ORANGE, ORANGE, ORANGE], pay: 4 }, { combination: [CHERRY, CHERRY, CHERRY], pay: 4 }, { combination: [CHERRY, CHERRY], pay: 2 }, { combination: [CHERRY], pay: 1 }];

var symbols = [SPINNING, CHERRY, ORANGE, LEMON, BANANA, BAR];

ReactDOM.render(React.createElement(SlotMachine, null), document.getElementById('app-container'));