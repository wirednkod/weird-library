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
exports.Input = exports.InputComponentWrapper = exports.InputContainer = exports.ErrorParagraph = exports.InputElement = exports.InputWrapper = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("../../utils");
exports.InputWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
exports.InputElement = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var input = theme.input;
    return "\n        font-size: " + (props.large ? input.fontSizeLarge : input.fontSize) + ";\n        display: flex;\n        flex-direction: column;\n        flex:auto;\n        background-color: transparent;\n        color: " + (props.disabled ? input.disabledColor : input.color) + ";\n        padding: " + input.verticalPadding + " " + input.horizontalPadding + ";\n        border: none;\n        outline: none;\n        border-radius: 0px;\n        &:disabled{\n          cursor: not-allowed\n        }\n    ";
});
exports.ErrorParagraph = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var input = theme.input;
    return "\n        font-size: " + input.fontSizeSmall + ";\n        color: " + input.errorColor + ";\n        margin: 8px 0px 0px 0px;\n        line-height: 16px;\n        min-height: 16px;\n    ";
});
exports.InputContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var input = theme.input;
    return "\n      display: flex;\n      flex-direction: row;\n      transition: all ease .3s;\n      " + (props.large
        ? "\n        svg{\n          opacity: " + (!props.focused ? ".5" : "1") + "\n          transition: all ease .3s;\n        }\n        border-bottom: 2px solid " + (props.focused || props.error ? input.errorColor : "transparent") + ";\n        &:hover{\n          svg{\n            opacity: 1\n          }\n        }\n      "
        : "\n      border: 1px solid " + (props.disabled
            ? input.disabledColor
            : props.error && props.error.length > 0
                ? input.errorColor
                : "transparent") + ";") + "\n      background-color: " + (props.disabled ? "transparent" : input.background) + ";";
});
exports.InputComponentWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
function Input(props) {
    var _a = react_1.default.useState(false), focused = _a[0], setFocused = _a[1];
    var onFocus = function () {
        if (props.onFocus)
            props.onFocus;
        setFocused(true);
    };
    var onBlur = function () {
        if (props.onBlur)
            props.onBlur;
        setFocused(false);
    };
    return (react_1.default.createElement(exports.InputWrapper, null,
        react_1.default.createElement(exports.InputContainer, { error: props.error, disabled: props.disabled, large: props.large, focused: focused },
            props.component &&
                (props.componentPosition === "left" || !props.componentPosition) && (react_1.default.createElement(exports.InputComponentWrapper, null, props.component)),
            react_1.default.createElement(exports.InputElement, __assign({}, props, { onFocus: onFocus, onBlur: onBlur })),
            props.component && props.componentPosition === "right" && (react_1.default.createElement(exports.InputComponentWrapper, null, props.component))),
        react_1.default.createElement(exports.ErrorParagraph, null, props.error)));
}
exports.Input = Input;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
