"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var utils_1 = require("../../utils");
var BounceAnimation = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% { transform: scale(0.1, 0.1) }\n  50% { transform: scale(0.9, 0.9) }\n  100% { transform: scale(0.1, 0.1) }\n"], ["\n  0% { transform: scale(0.1, 0.1) }\n  50% { transform: scale(0.9, 0.9) }\n  100% { transform: scale(0.1, 0.1) }\n"])));
var DotWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var Dot = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  /* Animation */\n    animation: ", " 1s linear infinite;\n  animation-delay: ", ";\n"], ["\n  ", "\n  /* Animation */\n    animation: ", " 1s linear infinite;\n  animation-delay: ", ";\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var _a = theme.loader, background = _a.background, dotSize = _a.dotSize;
    return "\n      background-color: " + background + ";\n      border-radius: 50%;\n      width: " + dotSize + ";\n      height: " + dotSize + "; \n      margin: 0 5px;\n    ";
}, BounceAnimation, function (props) { return props.delay; });
var LoaderContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var Separator = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 0 7px;\n  &:before {\n    content: \"|\";\n  }\n"], ["\n  padding: 0 7px;\n  &:before {\n    content: \"|\";\n  }\n"])));
var Wrapper = styled_components_1.default.section(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n"], ["\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n"])));
var Sentence = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var _a = theme.loader.loadingText, fontFamily = _a.fontFamily, fontSize = _a.fontSize, color = _a.color;
    return "\n  font-family: " + fontFamily + ";\n  font-size: " + fontSize + ";\n  margin: 0;\n\ttext-align: left;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  color: " + color + ";\n  .slidingWord {\n    white-space: nowrap;\n    font-weight: normal;\n  }\n  " + (props.wordsWidth && "width: " + props.wordsWidth + "px;") + "\n";
});
var Rotate = styled_components_1.keyframes(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  0% { opacity: 0; }\n  7% { opacity: 0; top: 50px; }\n  10% { opacity: 1; top: 0px; }\n  20% { opacity: 1; top: 0px; }\n  25% { opacity: 0; top: -50px; }\n  80% { opacity: 0; }\n  100% { opacity: 0; }\n"], ["\n  0% { opacity: 0; }\n  7% { opacity: 0; top: 50px; }\n  10% { opacity: 1; top: 0px; }\n  20% { opacity: 1; top: 0px; }\n  25% { opacity: 0; top: -50px; }\n  80% { opacity: 0; }\n  100% { opacity: 0; }\n"])));
var Words = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  overflow: hidden;\n  .slidingWord {\n    opacity: 1;\n    overflow: hidden;\n    position: absolute;\n    animation: ", " 15s linear infinite 0s;\n    -ms-animation: ", " 15s linear infinite 0s;\n    -webkit-animation: ", " 15s linear infinite 0s;\n  }\n  .stableWord {\n    opacity: 0;\n    white-space: nowrap;\n    font-weight: normal;\n  }\n  .slidingWord:nth-child(2) {\n    animation-delay: 2s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(3) {\n    animation-delay: 4s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(4) {\n    animation-delay: 6s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(5) {\n    animation-delay: 8s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(6) {\n    animation-delay: 10s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(7) {\n    animation-delay: 12s;\n    opacity: 0;\n  }\n"], ["\n  overflow: hidden;\n  .slidingWord {\n    opacity: 1;\n    overflow: hidden;\n    position: absolute;\n    animation: ", " 15s linear infinite 0s;\n    -ms-animation: ", " 15s linear infinite 0s;\n    -webkit-animation: ", " 15s linear infinite 0s;\n  }\n  .stableWord {\n    opacity: 0;\n    white-space: nowrap;\n    font-weight: normal;\n  }\n  .slidingWord:nth-child(2) {\n    animation-delay: 2s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(3) {\n    animation-delay: 4s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(4) {\n    animation-delay: 6s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(5) {\n    animation-delay: 8s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(6) {\n    animation-delay: 10s;\n    opacity: 0;\n  }\n  .slidingWord:nth-child(7) {\n    animation-delay: 12s;\n    opacity: 0;\n  }\n"])), Rotate, Rotate, Rotate);
function Loader(props) {
    var productTitle = props.productTitle, wordsWidth = props.wordsWidth;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(LoaderContainer, null,
            react_1.default.createElement(DotWrapper, null,
                react_1.default.createElement(Dot, { delay: "0s" }),
                react_1.default.createElement(Dot, { delay: ".3s" }),
                react_1.default.createElement(Dot, { delay: ".5s" }))),
        productTitle && (react_1.default.createElement(Wrapper, null,
            react_1.default.createElement(Sentence, { wordsWidth: wordsWidth },
                react_1.default.createElement("div", null, productTitle),
                react_1.default.createElement(Separator, null),
                react_1.default.createElement(Words, null,
                    react_1.default.createElement("div", { className: "slidingWord" }, "Loading"),
                    react_1.default.createElement("div", { className: "slidingWord" }, "\u8F09\u5165\u4E2D"),
                    react_1.default.createElement("div", { className: "slidingWord" }, "\uB85C\uB529\uC911"),
                    react_1.default.createElement("div", { className: "slidingWord" }, "Memuatkan"),
                    react_1.default.createElement("div", { className: "slidingWord" }, "Carregando"),
                    react_1.default.createElement("div", { className: "slidingWord" }, "\u52A0\u8F7D\u4E2D"),
                    react_1.default.createElement("div", { className: "slidingWord" }, "\u05D8\u05E2\u05D9\u05E0\u05D4"),
                    react_1.default.createElement("div", { className: "stableWord" }, "Carregando")))))));
}
exports.Loader = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
