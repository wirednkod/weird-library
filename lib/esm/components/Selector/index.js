var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { getTheme } from "../../utils";
export var SelectorWrapper = styled.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var selector = theme.selector;
    return "\n        margin: 0px;\n        padding: 0px;\n        display: flex;\n        flex-direction: row;\n        border-radius: " + selector.borderRadius + ";\n        background-color: " + selector.background + ";\n        list-style:none;\n        width: max-content;\n        width: -moz-max-content;\n        width: -webkit-max-content;\n        max-width: max-content;\n        max-width: -moz-max-content;\n        max-width: -webkit-max-content;\n    ";
});
export var SelectorItem = styled.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var selector = theme.selector;
    return "\n        padding: " + selector.verticalPadding + " " + selector.horizontalPadding + ";\n        margin: 0px;\n        color: " + selector.color + ";\n        border-radius: " + selector.borderRadius + ";\n        font-size: " + selector.fontSize + ";\n        " + (props.selected &&
        "background-color: " + (props.disabled
            ? selector.hoverBackground
            : selector.selectedBackground) + ";") + "\n        transition: all ease .3s;\n        cursor: default;\n        " + (!props.selected &&
        "&:hover{\n            cursor: " + (!props.disabled ? "pointer" : "not-allowed") + ";\n            background-color: " + (!props.disabled ? selector.hoverBackground : "inherit") + "\n          }") + "\n        " + (props.disabled &&
        "&:hover{\n              cursor: not-allowed;\n            }") + "\n    ";
});
export function Selector(props) {
    var selectors = props.items.map(function (item, i) { return (React.createElement(SelectorItem, { selected: i === props.selected, disabled: props.disabled, key: item + "_" + i }, item)); });
    return props.items.length >= 2 ? (React.createElement(SelectorWrapper, null, selectors)) : null;
}
var templateObject_1, templateObject_2;
