"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyState = exports.EmptyStateTitle = exports.EmptyStateParagraph = exports.EmptyStateWrapper = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../utils");
var styled_components_1 = __importDefault(require("styled-components"));
exports.EmptyStateWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var emptyState = theme.emptyState;
    return "\n      display: flex;\n      align-items: center;\n      text-align: center;\n      flex-direction: column;\n      border: " + (!props.disabledBorder ? "1px solid " + emptyState.borderColor : "none") + ";\n      padding: " + emptyState.padding + " 0px;\n    ";
});
exports.EmptyStateParagraph = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var fontSize = theme.fontSize, emptyState = theme.emptyState;
    return "\n      font-size: " + fontSize.small + ";\n      color: " + emptyState.color + ";\n      margin: " + (props.title
        ? "0px 0px " + emptyState.textMargin + " 0px"
        : emptyState.textMargin + " 0px") + "\n      };\n    ";
});
exports.EmptyStateTitle = styled_components_1.default.h5(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var fontSize = theme.fontSize, emptyState = theme.emptyState;
    return "\n      font-size: " + fontSize.h5 + ";\n      color: " + emptyState.color + ";\n      margin-top: " + emptyState.headMarginTop + ";\n      margin-bottom: " + emptyState.headMarginBottom + ";\n    ";
});
function EmptyState(props) {
    return (react_1.default.createElement(exports.EmptyStateWrapper, { disabledBorder: props.disabledBorder },
        props.icon,
        props.title && react_1.default.createElement(exports.EmptyStateTitle, null, props.title),
        react_1.default.createElement(exports.EmptyStateParagraph, { title: props.title }, props.text)));
}
exports.EmptyState = EmptyState;
var templateObject_1, templateObject_2, templateObject_3;
