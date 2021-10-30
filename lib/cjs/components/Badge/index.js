"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = exports.BadgeParagraph = exports.BadgeWrapper = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../utils");
var styled_components_1 = __importDefault(require("styled-components"));
exports.BadgeWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var badge = theme.badge;
    return "\n        padding: 4px 16px;\n        background-color: " + (badge[props.type]
        ? badge[props.type].background
        : badge.info.background) + ";\n        " + (props.align && props.align === "center"
        ? "align-items: center;"
        : "align-items: " + ("flex-" + props.align) + ";") + "\n        " + (props.fullWidth
        ? "display: flex; flex-direction: column;"
        : "\n            width: max-content;\n            width: -moz-max-content;\n            width: -webkit-max-content;\n            max-width: max-content;\n            max-width: -moz-max-content;\n            max-width: -webkit-max-content;\n            ") + "\n    ";
});
exports.BadgeParagraph = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var badge = theme.badge;
    return "\n        margin: 0px;\n        font-size: " + badge.fontSize + ";\n        color: " + (badge[props.type] ? badge[props.type].color : badge.info.background) + ";\n        font-weight: 500;\n    ";
});
function Badge(props) {
    return (react_1.default.createElement(exports.BadgeWrapper, __assign({}, props),
        react_1.default.createElement(exports.BadgeParagraph, __assign({}, props), props.text)));
}
exports.Badge = Badge;
var templateObject_1, templateObject_2;
