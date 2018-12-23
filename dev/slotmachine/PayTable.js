var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayTable = function (_React$Component) {
    _inherits(PayTable, _React$Component);

    function PayTable(props) {
        _classCallCheck(this, PayTable);

        return _possibleConstructorReturn(this, (PayTable.__proto__ || Object.getPrototypeOf(PayTable)).call(this, props));
    }

    _createClass(PayTable, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var rows = this.props.payTable.map(function (tableRow) {
                return React.createElement(
                    'div',
                    { key: tableRow.combination.join('-') },
                    _this2.renderTableRow(tableRow.combination, tableRow.pay)
                );
            });
            return React.createElement(
                'div',
                { id: 'pay-table' },
                rows
            );
        }
    }, {
        key: 'renderTableRow',
        value: function renderTableRow(symbols, pay) {

            var listItems = symbols.map(function (symbolName, index) {
                return React.createElement('img', { src: symbolName + ".png", key: symbolName + index });
            });

            return React.createElement(
                'div',
                { className: 'pay-row' },
                React.createElement(
                    'span',
                    null,
                    listItems
                ),
                React.createElement(
                    'span',
                    { className: 'pay-amount' },
                    '$',
                    pay
                )
            );
        }
    }]);

    return PayTable;
}(React.Component);

export default PayTable;