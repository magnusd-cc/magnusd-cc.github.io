var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ADD = 'ADD';
var SUBTRACT = 'SUBTRACT';
var MULTIPLY = 'MULTIPLY';
var DIVIDE = 'DIVIDE';
var NONE = 'NONE';

var Calculator = function (_React$Component) {
    _inherits(Calculator, _React$Component);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

        _this.state = {
            accumulator: 0,
            operator: ADD,
            display: '0',
            decimal: false,
            replace: true,
            newOperand: false
        };
        _this.handleClearButton = _this.handleClearButton.bind(_this);
        _this.handleEqualButton = _this.handleEqualButton.bind(_this);
        _this.handleAddButton = _this.handleAddButton.bind(_this);
        _this.handleSubtractButton = _this.handleSubtractButton.bind(_this);
        _this.handleMultiplyButton = _this.handleMultiplyButton.bind(_this);
        _this.handleDivideButton = _this.handleDivideButton.bind(_this);
        _this.handleDecimalButton = _this.handleDecimalButton.bind(_this);
        _this.appendDigit = _this.appendDigit.bind(_this);
        return _this;
    }

    _createClass(Calculator, [{
        key: 'handleClearButton',
        value: function handleClearButton() {
            this.setState({
                accumulator: 0,
                operator: ADD,
                display: 0,
                decimal: false,
                replace: true,
                newOperand: false
            });
        }
    }, {
        key: 'calculate',
        value: function calculate(accumulator, operator, operand) {
            switch (operator) {
                case ADD:
                    return accumulator + operand;
                case SUBTRACT:
                    return accumulator - operand;
                case MULTIPLY:
                    return accumulator * operand;
                case DIVIDE:
                    return accumulator / operand;
            }
        }
    }, {
        key: 'handleEqualButton',
        value: function handleEqualButton(event) {

            var newValue = this.calculate(this.state.accumulator, this.state.operator, Number(this.state.display));

            this.setState({
                accumulator: newValue,
                display: newValue,
                replace: true,
                decimal: false,
                newOperand: false
            });
        }
    }, {
        key: 'handleAddButton',
        value: function handleAddButton(event) {
            if (this.state.newOperand) {
                this.handleEqualButton(event);
            }
            this.setState({
                operator: ADD,
                replace: true,
                decimal: false,
                newOperand: false
            });
        }
    }, {
        key: 'handleSubtractButton',
        value: function handleSubtractButton(event) {
            if (this.state.newOperand) {
                this.handleEqualButton(event);
            }
            this.setState({
                operator: SUBTRACT,
                replace: true,
                decimal: false,
                newOperand: false
            });
        }
    }, {
        key: 'handleMultiplyButton',
        value: function handleMultiplyButton(event) {
            if (this.state.newOperand) {
                this.handleEqualButton(event);
            }
            this.setState({
                operator: MULTIPLY,
                replace: true,
                decimal: false,
                newOperand: false
            });
        }
    }, {
        key: 'handleDivideButton',
        value: function handleDivideButton(event) {
            if (this.state.newOperand) {
                this.handleEqualButton(event);
            }
            this.setState({
                operator: DIVIDE,
                replace: true,
                decimal: false,
                newOperand: false
            });
        }
    }, {
        key: 'handleDecimalButton',
        value: function handleDecimalButton(event) {

            if (!this.state.decimal) {
                this.setState({
                    display: this.state.display + '.',
                    decimal: true,
                    replace: false,
                    newOperand: true
                });
            }
        }
    }, {
        key: 'appendDigit',
        value: function appendDigit(event) {

            if (this.state.replace) {
                this.setState({
                    display: event.target.value
                });
                if (event.target.value !== '0') {
                    this.setState({
                        replace: false
                    });
                }
            } else {
                this.setState({
                    display: this.state.display + event.target.value
                });
            }

            this.setState({
                newOperand: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'calculator' },
                React.createElement(
                    'div',
                    { id: 'display' },
                    this.state.display
                ),
                React.createElement(
                    'button',
                    { id: 'clear', onClick: this.handleClearButton, className: 'operator' },
                    'C'
                ),
                React.createElement(
                    'button',
                    { id: 'seven', onClick: this.appendDigit, value: '7' },
                    '7'
                ),
                React.createElement(
                    'button',
                    { id: 'eight', onClick: this.appendDigit, value: '8' },
                    '8'
                ),
                React.createElement(
                    'button',
                    { id: 'nine', onClick: this.appendDigit, value: '9' },
                    '9'
                ),
                React.createElement(
                    'button',
                    { id: 'divide', onClick: this.handleDivideButton, className: 'operator' },
                    '\xF7'
                ),
                React.createElement(
                    'button',
                    { id: 'four', onClick: this.appendDigit, value: '4' },
                    '4'
                ),
                React.createElement(
                    'button',
                    { id: 'five', onClick: this.appendDigit, value: '5' },
                    '5'
                ),
                React.createElement(
                    'button',
                    { id: 'six', onClick: this.appendDigit, value: '6' },
                    '6'
                ),
                React.createElement(
                    'button',
                    { id: 'multiply', onClick: this.handleMultiplyButton, className: 'operator' },
                    '\xD7'
                ),
                React.createElement(
                    'button',
                    { id: 'one', onClick: this.appendDigit, value: '1' },
                    '1'
                ),
                React.createElement(
                    'button',
                    { id: 'two', onClick: this.appendDigit, value: '2' },
                    '2'
                ),
                React.createElement(
                    'button',
                    { id: 'three', onClick: this.appendDigit, value: '3' },
                    '3'
                ),
                React.createElement(
                    'button',
                    { id: 'subtract', onClick: this.handleSubtractButton, className: 'operator' },
                    '-'
                ),
                React.createElement(
                    'button',
                    { id: 'zero', onClick: this.appendDigit, value: '0' },
                    '0'
                ),
                React.createElement(
                    'button',
                    { id: 'decimal', onClick: this.handleDecimalButton },
                    '.'
                ),
                React.createElement(
                    'button',
                    { id: 'equals', onClick: this.handleEqualButton, className: 'operator' },
                    '='
                ),
                React.createElement(
                    'button',
                    { id: 'add', onClick: this.handleAddButton, className: 'operator' },
                    '+'
                )
            );
        }
    }]);

    return Calculator;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(Calculator, null), appRoot);