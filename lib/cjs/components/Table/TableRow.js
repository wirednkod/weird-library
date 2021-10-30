"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRow = exports.TableRowWrapper = exports.TableRowItem = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("../../utils");
exports.TableRowItem = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    return "\n        display: flex;\n        flex-direction: column;\n        margin-right: 16px;\n        " + (props.size !== undefined
        ? "\n        width: calc((100% / 12) * " + props.size + " - 16px);\n        min-width: calc((100% / 12) * " + props.size + " - 16px);\n        "
        : "flex: auto") + "\n        &:last-child{\n          margin-right: 0px;\n          " + (props.size !== undefined &&
        "\n            width: calc((100% / 12) * " + props.size + ");\n            min-width: calc((100% / 12) * " + props.size + ");\n            ") + "\n        }\n    ";
});
exports.TableRowWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var table = theme.table;
    return "\n      display: flex;\n      flex-direction: row;\n      padding: " + table.rowPadding + ";\n      background-color: " + table.rowBackground + ";\n      align-items: center;\n      margin-bottom: " + table.rowMargin + ";\n    ";
});
function TableRow(props) {
    var item = props.item;
    return (react_1.default.createElement(exports.TableRowWrapper, { i: props.i, length: item.length }, item.map(function (element, i) { return (react_1.default.createElement(exports.TableRowItem, { size: element.size, key: "tableRow_" + i }, element.value)); })));
}
exports.TableRow = TableRow;
var templateObject_1, templateObject_2;
