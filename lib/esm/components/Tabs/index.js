var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { getTheme } from "../../utils";
export var TabItem = styled.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var fontSize = theme.fontSize, tabs = theme.tabs;
    return "\n        font-family: " + (theme.fontFamily || "'Poppins', sans-serif") + ";\n        font-weight: 400;\n        font-size: " + fontSize.normal + ";\n        border-bottom: " + tabs.borderSize + "px solid " + (props.active ? tabs.activeColor : "transparent") + ";\n        display: flex;\n        background: transparent;\n        margin-bottom: 0px;\n        color: " + (props.active ? tabs.activeColor : tabs.color) + ";\n        padding: " + tabs.padding + "px;\n        transition: all ease .3s;\n        &:hover:not([disabled]) {\n            cursor: pointer;\n            color: " + tabs.activeColor + ";\n        }\n    ";
});
export var TabsList = styled.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var tabs = theme.tabs;
    return "\n    padding: 0px;\n    margin: 0px;\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    flex: auto;\n    justify-content: " + (tabs.justifyContent || "initial") + "\n    &:after {\n      position: absolute;\n      bottom: 0px;\n      width: 100%;\n      border: " + tabs.borderSize + "px solid " + tabs.borderColor + ";\n      content: '';\n    }\n    ";
});
export function Tabs(props) {
    var tabs = props.tabs.map(function (t, i) { return (React.createElement(TabItem, { active: i === props.activeTab, key: t.replace(/\s/g, "") + i + "_element", onClick: function () { return props.onTabChange(i); } }, t)); });
    return React.createElement(TabsList, { theme: props.theme }, tabs);
}
var templateObject_1, templateObject_2;
