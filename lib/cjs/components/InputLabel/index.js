"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputLabel = exports.InputLabelIconWrapper = exports.InputLabelWrapper = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../utils");
var styled_components_1 = __importDefault(require("styled-components"));
exports.InputLabelWrapper = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var inputLabel = theme.inputLabel;
    return "\n            display: flex;\n            font-size: " + inputLabel.fontSize + ";\n            color: " + inputLabel.color + ";\n        ";
});
exports.InputLabelIconWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var inputLabel = theme.inputLabel;
    return "\n        " + (props.icon && props.iconPosition === "right"
        ? "padding-left: " + inputLabel.iconPadding
        : "padding-right:  " + inputLabel.iconPadding) + "\n    ";
});
function InputLabel(props) {
    return (react_1.default.createElement(exports.InputLabelWrapper, { htmlFor: props.htmlFor ? props.htmlFor : "" },
        props.icon && (props.iconPosition === "left" || !props.iconPosition) && (react_1.default.createElement(exports.InputLabelIconWrapper, __assign({}, props), props.icon)),
        props.children,
        props.icon && props.iconPosition === "right" && (react_1.default.createElement(exports.InputLabelIconWrapper, __assign({}, props), props.icon))));
}
exports.InputLabel = InputLabel;
var templateObject_1, templateObject_2;
