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
exports.LoginButton = exports.LoadingDots = exports.MenuButton = exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var types_1 = require("./types");
var utils_1 = require("../../utils");
exports.Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var button = theme.button;
    return "\n  font-family: " + (theme.fontFamily || "'Poppins', sans-serif") + ";\n  font-weight: " + (theme.fontWeight || "500") + ";\n  font-size: " + (theme.fontSize || "14") + "px;\n  border: " + button.default.borderSize + "px solid " + button.default.borderColor + ";\n  display: flex;\n  background: " + button.default.background + ";\n  color: " + button.default.color + ";\n  padding: " + button.padding.normal + ";\n  border-radius: " + button.default.borderRadius + "px;\n  &:hover:not([disabled]) {\n    cursor: pointer;\n  }\n\t&:hover([disabled]){\n\t\tcursor: not-allowed;\n\t}\n  ";
});
exports.MenuButton = styled_components_1.default(exports.Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  padding: 10px 42px;\n  height: ", "px;\n  background-color: #000;\n  align-items: center;\n  display: flex;\n  border: 0;\n  flex-direction: row;\n  &:hover:not([disabled]) {\n    background-color: grey;\n    cursor: pointer;\n  }\n  p {\n    margin-left: 8px;\n    color: #fff;\n  }\n"], ["\n  width: 100%;\n  padding: 10px 42px;\n  height: ", "px;\n  background-color: #000;\n  align-items: center;\n  display: flex;\n  border: 0;\n  flex-direction: row;\n  &:hover:not([disabled]) {\n    background-color: grey;\n    cursor: pointer;\n  }\n  p {\n    margin-left: 8px;\n    color: #fff;\n  }\n"])), function (props) { return props.height; });
var BounceAnimation = styled_components_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  0% { transform: scale(0.1, 0.1) }\n  50% { transform: scale(0.9, 0.9) }\n  100% { transform: scale(0.1, 0.1) }\n"], ["\n  0% { transform: scale(0.1, 0.1) }\n  50% { transform: scale(0.9, 0.9) }\n  100% { transform: scale(0.1, 0.1) }\n"])));
var DotWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: flex-end;\n"], ["\n  display: flex;\n  align-items: flex-end;\n"])));
var Dot = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n  /* Animation */\n  animation: ", " 1s linear infinite;\n  animation-delay: ", ";\n"], ["\n  ", "\n  /* Animation */\n  animation: ", " 1s linear infinite;\n  animation-delay: ", ";\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var button = theme.button;
    return "\n    background-color: " + button[props.buttonType].color + ";\n    border-radius: 50%;\n    width: 5px;\n    height: 5px;\n    margin: 0 2px;\n  ";
}, BounceAnimation, function (props) { return props.delay; });
function LoadingDots(props) {
    return (react_1.default.createElement(DotWrapper, null,
        react_1.default.createElement(Dot, { delay: "0s", buttonType: props.buttonType, color: props.loadingColor }),
        react_1.default.createElement(Dot, { delay: ".3s", buttonType: props.buttonType, color: props.loadingColor }),
        react_1.default.createElement(Dot, { delay: ".5s", buttonType: props.buttonType, color: props.loadingColor })));
}
exports.LoadingDots = LoadingDots;
function LoginButton(_a) {
    var children = _a.children, isMetaMask = _a.isMetaMask, isWalletConnect = _a.isWalletConnect, height = _a.height, onClick = _a.onClick;
    return (react_1.default.createElement(exports.MenuButton, { height: height || 40, onClick: onClick },
        isMetaMask && react_1.default.createElement(types_1.MetaMask, null),
        isWalletConnect && react_1.default.createElement(types_1.WalletConnect, null),
        react_1.default.createElement("p", null, children)));
}
exports.LoginButton = LoginButton;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
