var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled, { keyframes } from "styled-components";
import { MetaMask, WalletConnect, } from "./types";
import { getTheme } from "../../utils";
export var Button = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var button = theme.button;
    return "\n  font-family: " + (theme.fontFamily || "'Poppins', sans-serif") + ";\n  font-weight: " + (theme.fontWeight || "500") + ";\n  font-size: " + (theme.fontSize || "14") + "px;\n  border: " + button.default.borderSize + "px solid " + button.default.borderColor + ";\n  display: flex;\n  background: " + button.default.background + ";\n  color: " + button.default.color + ";\n  padding: " + button.padding.normal + ";\n  border-radius: " + button.default.borderRadius + "px;\n  &:hover:not([disabled]) {\n    cursor: pointer;\n  }\n\t&:hover([disabled]){\n\t\tcursor: not-allowed;\n\t}\n  ";
});
export var MenuButton = styled(Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  padding: 10px 42px;\n  height: ", "px;\n  background-color: #000;\n  align-items: center;\n  display: flex;\n  border: 0;\n  flex-direction: row;\n  &:hover:not([disabled]) {\n    background-color: grey;\n    cursor: pointer;\n  }\n  p {\n    margin-left: 8px;\n    color: #fff;\n  }\n"], ["\n  width: 100%;\n  padding: 10px 42px;\n  height: ", "px;\n  background-color: #000;\n  align-items: center;\n  display: flex;\n  border: 0;\n  flex-direction: row;\n  &:hover:not([disabled]) {\n    background-color: grey;\n    cursor: pointer;\n  }\n  p {\n    margin-left: 8px;\n    color: #fff;\n  }\n"])), function (props) { return props.height; });
var BounceAnimation = keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  0% { transform: scale(0.1, 0.1) }\n  50% { transform: scale(0.9, 0.9) }\n  100% { transform: scale(0.1, 0.1) }\n"], ["\n  0% { transform: scale(0.1, 0.1) }\n  50% { transform: scale(0.9, 0.9) }\n  100% { transform: scale(0.1, 0.1) }\n"])));
var DotWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: flex-end;\n"], ["\n  display: flex;\n  align-items: flex-end;\n"])));
var Dot = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n  /* Animation */\n  animation: ", " 1s linear infinite;\n  animation-delay: ", ";\n"], ["\n  ", "\n  /* Animation */\n  animation: ", " 1s linear infinite;\n  animation-delay: ", ";\n"])), function (props) {
    var theme = getTheme(props);
    var button = theme.button;
    return "\n    background-color: " + button[props.buttonType].color + ";\n    border-radius: 50%;\n    width: 5px;\n    height: 5px;\n    margin: 0 2px;\n  ";
}, BounceAnimation, function (props) { return props.delay; });
export function LoadingDots(props) {
    return (React.createElement(DotWrapper, null,
        React.createElement(Dot, { delay: "0s", buttonType: props.buttonType, color: props.loadingColor }),
        React.createElement(Dot, { delay: ".3s", buttonType: props.buttonType, color: props.loadingColor }),
        React.createElement(Dot, { delay: ".5s", buttonType: props.buttonType, color: props.loadingColor })));
}
export function LoginButton(_a) {
    var children = _a.children, isMetaMask = _a.isMetaMask, isWalletConnect = _a.isWalletConnect, height = _a.height, onClick = _a.onClick;
    return (React.createElement(MenuButton, { height: height || 40, onClick: onClick },
        isMetaMask && React.createElement(MetaMask, null),
        isWalletConnect && React.createElement(WalletConnect, null),
        React.createElement("p", null, children)));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
