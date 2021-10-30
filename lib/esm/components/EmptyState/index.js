var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { getTheme } from "../../utils";
import styled from "styled-components";
export var EmptyStateWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var emptyState = theme.emptyState;
    return "\n      display: flex;\n      align-items: center;\n      text-align: center;\n      flex-direction: column;\n      border: " + (!props.disabledBorder ? "1px solid " + emptyState.borderColor : "none") + ";\n      padding: " + emptyState.padding + " 0px;\n    ";
});
export var EmptyStateParagraph = styled.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var fontSize = theme.fontSize, emptyState = theme.emptyState;
    return "\n      font-size: " + fontSize.small + ";\n      color: " + emptyState.color + ";\n      margin: " + (props.title
        ? "0px 0px " + emptyState.textMargin + " 0px"
        : emptyState.textMargin + " 0px") + "\n      };\n    ";
});
export var EmptyStateTitle = styled.h5(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var fontSize = theme.fontSize, emptyState = theme.emptyState;
    return "\n      font-size: " + fontSize.h5 + ";\n      color: " + emptyState.color + ";\n      margin-top: " + emptyState.headMarginTop + ";\n      margin-bottom: " + emptyState.headMarginBottom + ";\n    ";
});
export function EmptyState(props) {
    return (React.createElement(EmptyStateWrapper, { disabledBorder: props.disabledBorder },
        props.icon,
        props.title && React.createElement(EmptyStateTitle, null, props.title),
        React.createElement(EmptyStateParagraph, { title: props.title }, props.text)));
}
var templateObject_1, templateObject_2, templateObject_3;
