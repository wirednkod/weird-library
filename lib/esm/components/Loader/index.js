var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled, { keyframes } from "styled-components";
import { getTheme } from "../../utils";
var BounceAnimation = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% { transform: scale(0.1, 0.1) }\n  50% { transform: scale(0.9, 0.9) }\n  100% { transform: scale(0.1, 0.1) }\n"], ["\n  0% { transform: scale(0.1, 0.1) }\n  50% { transform: scale(0.9, 0.9) }\n  100% { transform: scale(0.1, 0.1) }\n"])));
var DotWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var Dot = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  /* Animation */\n    animation: ", " 1s linear infinite;\n  animation-delay: ", ";\n"], ["\n  ", "\n  /* Animation */\n    animation: ", " 1s linear infinite;\n  animation-delay: ", ";\n"])), function (props) {
    var theme = getTheme(props);
    var _a = theme.loader, background = _a.background, dotSize = _a.dotSize;
    return "\n      background-color: " + background + ";\n      border-radius: 50%;\n      width: " + dotSize + ";\n      height: " + dotSize + "; \n      margin: 0 5px;\n    ";
}, BounceAnimation, function (props) { return props.delay; });
var LoaderContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var Separator = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 0 7px;\n  &:before {\n    content: \"|\";\n  }\n"], ["\n  padding: 0 7px;\n  &:before {\n    content: \"|\";\n  }\n"])));
var Wrapper = styled.section(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n"], ["\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n"])));
var Sentence = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var _a = theme.loader.loadingText, fontFamily = _a.fontFamily, fontSize = _a.fontSize, color = _a.color;
    return "\n  font-family: " + fontFamily + ";\n  font-size: " + fontSize + ";\n  margin: 0;\n\ttext-align: left;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  color: " + color + ";\n  .slidingWord {\n    white-space: nowrap;\n    font-weight: normal;\n  }\n  " + (props.wordsWidth && "width: " + props.wordsWidth + "px;") + "\n";
});
var Rotate = keyframes(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  0% { opacity: 0; }\n  7% { opacity: 0; top: 50px; }\n  10% { opacity: 1; top: 0px; }\n  20% { opacity: 1; top: 0px; }\n  25% { opacity: 0; top: -50px; }\n  80% { opacity: 0; }\n  100% { opacity: 0; }\n"], ["\n  0% { opacity: 0; }\n  7% { opacity: 0; top: 50px; }\n  10% { opacity: 1; top: 0px; }\n  20% { opacity: 1; top: 0px; }\n  25% { opacity: 0; top: -50px; }\n  80% { opacity: 0; }\n  100% { opacity: 0; }\n"])));
var Words = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  overflow: hidden;\n  .slidingWord {\n    opacity: 1;\n    overflow: hidden;\n    position: absolute;\n    animation: ", " 15s linear infinite 0s;\n    -ms-animation: ", " 15s linear infinite 0s;\n    -webkit-animation: ", " 15s linear infinite 0s;\n  }\n  .stableWord {\n    opacity: 0;\n    white-space: nowrap;\n    font-weight: normal;\n  }\n  .slidingWord:nth-child(2) {\n    animation-delay: 2s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(3) {\n    animation-delay: 4s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(4) {\n    animation-delay: 6s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(5) {\n    animation-delay: 8s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(6) {\n    animation-delay: 10s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(7) {\n    animation-delay: 12s;\n    opacity: 0;\n  }\n"], ["\n  overflow: hidden;\n  .slidingWord {\n    opacity: 1;\n    overflow: hidden;\n    position: absolute;\n    animation: ", " 15s linear infinite 0s;\n    -ms-animation: ", " 15s linear infinite 0s;\n    -webkit-animation: ", " 15s linear infinite 0s;\n  }\n  .stableWord {\n    opacity: 0;\n    white-space: nowrap;\n    font-weight: normal;\n  }\n  .slidingWord:nth-child(2) {\n    animation-delay: 2s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(3) {\n    animation-delay: 4s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(4) {\n    animation-delay: 6s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(5) {\n    animation-delay: 8s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(6) {\n    animation-delay: 10s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(7) {\n    animation-delay: 12s;\n    opacity: 0;\n  }\n"])), Rotate, Rotate, Rotate);
export function Loader(props) {
    var productTitle = props.productTitle, wordsWidth = props.wordsWidth;
    return (React.createElement(React.Fragment, null,
        React.createElement(LoaderContainer, null,
            React.createElement(DotWrapper, null,
                React.createElement(Dot, { delay: "0s" }),
                React.createElement(Dot, { delay: ".3s" }),
                React.createElement(Dot, { delay: ".5s" }))),
        productTitle && (React.createElement(Wrapper, null,
            React.createElement(Sentence, { wordsWidth: wordsWidth },
                React.createElement("div", null, productTitle),
                React.createElement(Separator, null),
                React.createElement(Words, null,
                    React.createElement("div", { className: "slidingWord" }, "Loading"),
                    React.createElement("div", { className: "slidingWord" }, "\u8F09\u5165\u4E2D"),
                    React.createElement("div", { className: "slidingWord" }, "\uB85C\uB529\uC911"),
                    React.createElement("div", { className: "slidingWord" }, "Memuatkan"),
                    React.createElement("div", { className: "slidingWord" }, "Carregando"),
                    React.createElement("div", { className: "slidingWord" }, "\u52A0\u8F7D\u4E2D"),
                    React.createElement("div", { className: "slidingWord" }, "\u05D8\u05E2\u05D9\u05E0\u05D4"),
                    React.createElement("div", { className: "stableWord" }, "Carregando")))))));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
