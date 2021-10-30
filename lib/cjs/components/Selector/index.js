"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selector = exports.SelectorItem = exports.SelectorWrapper = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("../../utils");
exports.SelectorWrapper = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var selector = theme.selector;
    return "\n        margin: 0px;\n        padding: 0px;\n        display: flex;\n        flex-direction: row;\n        border-radius: " + selector.borderRadius + ";\n        background-color: " + selector.background + ";\n        list-style:none;\n        width: max-content;\n        width: -moz-max-content;\n        width: -webkit-max-content;\n        max-width: max-content;\n        max-width: -moz-max-content;\n        max-width: -webkit-max-content;\n    ";
});
exports.SelectorItem = styled_components_1.default.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var selector = theme.selector;
    return "\n        padding: " + selector.verticalPadding + " " + selector.horizontalPadding + ";\n        margin: 0px;\n        color: " + selector.color + ";\n        border-radius: " + selector.borderRadius + ";\n        font-size: " + selector.fontSize + ";\n        " + (props.selected &&
        "background-color: " + (props.disabled
            ? selector.hoverBackground
            : selector.selectedBackground) + ";") + "\n        transition: all ease .3s;\n        cursor: default;\n        " + (!props.selected &&
        "&:hover{\n            cursor: " + (!props.disabled ? "pointer" : "not-allowed") + ";\n            background-color: " + (!props.disabled ? selector.hoverBackground : "inherit") + "\n          }") + "\n        " + (props.disabled &&
        "&:hover{\n              cursor: not-allowed;\n            }") + "\n    ";
});
function Selector(props) {
    var selectors = props.items.map(function (item, i) { return (react_1.default.createElement(exports.SelectorItem, { selected: i === props.selected, disabled: props.disabled, key: item + "_" + i }, item)); });
    return props.items.length >= 2 ? (react_1.default.createElement(exports.SelectorWrapper, null, selectors)) : null;
}
exports.Selector = Selector;
var templateObject_1, templateObject_2;
