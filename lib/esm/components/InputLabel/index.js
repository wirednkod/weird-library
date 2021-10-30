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
import React from "react";
import { getTheme } from "../../utils";
import styled from "styled-components";
export var InputLabelWrapper = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var inputLabel = theme.inputLabel;
    return "\n            display: flex;\n            font-size: " + inputLabel.fontSize + ";\n            color: " + inputLabel.color + ";\n        ";
});
export var InputLabelIconWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var inputLabel = theme.inputLabel;
    return "\n        " + (props.icon && props.iconPosition === "right"
        ? "padding-left: " + inputLabel.iconPadding
        : "padding-right:  " + inputLabel.iconPadding) + "\n    ";
});
export function InputLabel(props) {
    return (React.createElement(InputLabelWrapper, { htmlFor: props.htmlFor ? props.htmlFor : "" },
        props.icon && (props.iconPosition === "left" || !props.iconPosition) && (React.createElement(InputLabelIconWrapper, __assign({}, props), props.icon)),
        props.children,
        props.icon && props.iconPosition === "right" && (React.createElement(InputLabelIconWrapper, __assign({}, props), props.icon))));
}
var templateObject_1, templateObject_2;
