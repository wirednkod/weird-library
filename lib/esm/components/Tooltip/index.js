var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
// import { getTheme } from '../../utils'
import styled from "styled-components";
var ToolTipText = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var where;
    var beforeOrAfter;
    var arrowPosition;
    var arrowPositonColors;
    var bubblePush;
    var bubblePosition;
    switch (props.placement) {
        case "leftTop":
            where = "top: 70%;";
            bubblePush = "top: -100%;";
            bubblePosition = "right: 110%;";
            beforeOrAfter = "after";
            arrowPositonColors =
                "transparent transparent transparent rgba(0, 0, 0, 0.8)";
            arrowPosition = "right: -14%;";
            break;
        case "leftBottom":
            where = "top: 3%;";
            bubblePush = "top: 70%;";
            bubblePosition = "right: 110%;";
            beforeOrAfter = "after";
            arrowPositonColors =
                "transparent transparent transparent rgba(0, 0, 0, 0.8)";
            arrowPosition = "right: -14%;";
            break;
        case "left":
            where = "top: 40%;";
            bubblePush = "top: -10%;";
            bubblePosition = "right: 110%;";
            beforeOrAfter = "after";
            arrowPositonColors =
                "transparent transparent transparent rgba(0, 0, 0, 0.8)";
            arrowPosition = "right: -14%;";
            break;
        case "topLeft":
            where = "top: 100%;";
            bubblePush = "bottom: 120%;";
            bubblePosition = "right: 85%;";
            beforeOrAfter = "after";
            arrowPositonColors =
                "rgba(0, 0, 0, 0.8) transparent transparent transparent";
            arrowPosition = "right: 2%;";
            break;
        case "top":
            where = "top: 100%;";
            bubblePush = "bottom: 120%;";
            bubblePosition = "left: 45%;";
            beforeOrAfter = "after";
            arrowPositonColors =
                "rgba(0, 0, 0, 0.8) transparent transparent transparent";
            arrowPosition = "left: 45%;";
            break;
        case "topRight":
            where = "top: 100%;";
            bubblePush = "bottom: 120%;";
            bubblePosition = "left: 130%;";
            beforeOrAfter = "after";
            arrowPositonColors =
                "rgba(0, 0, 0, 0.8) transparent transparent transparent";
            arrowPosition = "left: 2%;";
            break;
        case "rightTop":
            where = "top: 70%;";
            bubblePush = "top: -100%;";
            bubblePosition = "right: -110%;";
            beforeOrAfter = "after";
            arrowPositonColors =
                "transparent rgba(0, 0, 0, 0.8) transparent transparent";
            arrowPosition = "left: -14%;";
            break;
        case "right":
            where = "top: 40%;";
            bubblePush = "top: -10%;";
            bubblePosition = "right: -110%;";
            beforeOrAfter = "after";
            arrowPositonColors =
                "transparent rgba(0, 0, 0, 0.8) transparent transparent";
            arrowPosition = "left: -14%;";
            break;
        case "rightBottom":
            where = "top: 3%;";
            bubblePush = "top: 70%;";
            bubblePosition = "right: -110%;";
            beforeOrAfter = "after";
            arrowPositonColors =
                "transparent rgba(0, 0, 0, 0.8) transparent transparent";
            arrowPosition = "left: -14%;";
            break;
        case "bottomRight":
            where = "bottom: 100%;";
            bubblePush = "top: 120%;";
            bubblePosition = "left: 130%;";
            beforeOrAfter = "before";
            arrowPositonColors =
                "transparent transparent rgba(0, 0, 0, 0.8) transparent";
            arrowPosition = "left: 2%;";
            break;
        case "bottom":
            where = "bottom: 100%;";
            bubblePush = "top: 120%;";
            bubblePosition = "left: 45%;";
            beforeOrAfter = "before";
            arrowPositonColors =
                "transparent transparent rgba(0, 0, 0, 0.8) transparent";
            arrowPosition = "left: 45%;";
            break;
        case "bottomLeft":
            where = "bottom: 100%;";
            bubblePush = "top: 120%;";
            bubblePosition = "right: 85%;";
            beforeOrAfter = "before";
            arrowPositonColors =
                "transparent transparent rgba(0, 0, 0, 0.8) transparent";
            arrowPosition = "right: 2%;";
            break;
        default:
            where = "top: 100%;";
            bubblePush = "bottom: 120%;";
            bubblePosition = "left: 45%;";
            beforeOrAfter = "after";
            arrowPositonColors =
                "rgba(0, 0, 0, 0.8) transparent transparent transparent";
            arrowPosition = "left: 45%;";
    }
    return "\n    visibility: hidden;\n    width: 120px;\n    background-color: transparent;\n    color: transparent;\n    text-align: center;\n    border-radius: 4px;\n    padding: 10px;\n    position: absolute;\n    z-index: 99999;\n    " + bubblePush + "\n    " + bubblePosition + "\n    margin-left: -60px;\n    // transition: all 0.3s ease;\n    &:" + beforeOrAfter + " {\n      // transition: all 0.3s ease;\n      content: '';\n      position: absolute;\n      " + where + "\n      " + arrowPosition + "\n      margin-left: 0%;\n      border: 10px solid transparent;\n      border-color: " + arrowPositonColors + "\n    }\n";
});
var ToolTip = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var arrowPositonColors;
    switch (props.placement) {
        case "topLeft":
        case "topRight":
        case "top":
            arrowPositonColors =
                "rgba(0, 0, 0, 0.8) transparent transparent transparent";
            break;
        case "bottomLeft":
        case "bottomRight":
        case "bottom":
            arrowPositonColors =
                "transparent transparent rgba(0, 0, 0, 0.8) transparent";
            break;
        default:
            arrowPositonColors =
                "rgba(0, 0, 0, 0.8) transparent transparent transparent";
    }
    return "\n    position: relative;\n    display: inline-block;\n    &:hover " + ToolTipText + " {\n      visibility: visible;\n      color: #fff;\n      background-color: rgba(0, 0, 0, 0.8);\n      padding: 10px;\n      &:before {\n        border-color: " + arrowPositonColors + ";\n      }\n    }\n  ";
});
export function Tooltip(_a) {
    var children = _a.children, text = _a.text, _b = _a.placement, placement = _b === void 0 ? "top" : _b;
    return (React.createElement(ToolTip, { placement: placement },
        children,
        React.createElement(ToolTipText, { placement: placement }, text)));
}
var templateObject_1, templateObject_2;
