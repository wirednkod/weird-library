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
export var BadgeWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var badge = theme.badge;
    return "\n        padding: 4px 16px;\n        background-color: " + (badge[props.type]
        ? badge[props.type].background
        : badge.info.background) + ";\n        " + (props.align && props.align === "center"
        ? "align-items: center;"
        : "align-items: " + ("flex-" + props.align) + ";") + "\n        " + (props.fullWidth
        ? "display: flex; flex-direction: column;"
        : "\n            width: max-content;\n            width: -moz-max-content;\n            width: -webkit-max-content;\n            max-width: max-content;\n            max-width: -moz-max-content;\n            max-width: -webkit-max-content;\n            ") + "\n    ";
});
export var BadgeParagraph = styled.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var badge = theme.badge;
    return "\n        margin: 0px;\n        font-size: " + badge.fontSize + ";\n        color: " + (badge[props.type] ? badge[props.type].color : badge.info.background) + ";\n        font-weight: 500;\n    ";
});
export function Badge(props) {
    return (React.createElement(BadgeWrapper, __assign({}, props),
        React.createElement(BadgeParagraph, __assign({}, props), props.text)));
}
var templateObject_1, templateObject_2;
