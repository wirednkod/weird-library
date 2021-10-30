"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = exports.NotificationActionText = exports.NotificationActionWrapper = exports.NotificationTitle = exports.NotificationContentWrapper = exports.IconWrapper = exports.NotificationWrapper = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("../../utils");
exports.NotificationWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var notification = theme.notification;
    return "\n    display: flex;\n    flex-direction: " + (props.iconPosition === "top" ? "column" : "row") + ";\n    align-items:  " + (props.iconPosition === "top" || props.actionText ? "flex-start" : "center") + ";\n    width: " + (props.width || notification.width) + ";\n    padding: " + (props.icon
        ? notification.horizontalPadding
        : notification.verticalPadding + " " + notification.horizontalPadding) + ";\n    background-color: " + (notification[props.type]
        ? notification[props.type].background
        : notification.info.backround) + ";\n\t\th5{\n\t\t\tfont-size: " + notification.fontSizeMedium + ";\n\t\t\tfont-weight: 500;\n\t\t\tcolor: " + (notification[props.type]
        ? notification[props.type].color
        : notification.info.color) + "\n\t\t}\n    p{\n        font-size: " + notification.fontSize + ";\n        text-align: " + (props.icon || props.title || props.actionText ? "left" : "center") + "\n        margin: 0px;\n        color: " + (notification[props.type]
        ? notification[props.type].color
        : notification.info.color) + "\n    }\n    a{\n      font-size: " + notification.fontSize + ";\n      text-decoration: underline;\n\t\t\tcolor: " + (notification[props.type]
        ? notification[props.type].color
        : notification.info.color) + "\n\t\t\t&:hover{\n\t\t\t\tcolor: white;\n\t\t\t}\n    }\n  ";
});
exports.IconWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var notification = theme.notification;
    return "\n    display: flex;\n    align-items: flex-start;\n    " + (props.iconPosition === "top"
        ? "padding-bottom: " + notification.horizontalPadding
        : "padding-right: " + notification.horizontalPadding) + ";\n    svg{\n      * {\n        fill: " + (notification[props.type]
        ? notification[props.type].color
        : notification.info.color) + ";\n      }\n    }\n  ";
});
exports.NotificationContentWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n"])));
exports.NotificationTitle = styled_components_1.default.h5(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var notification = theme.notification;
    return "\n        font-size: " + notification.fontSizeMedium + ";\n        color: " + (notification[props.type]
        ? notification[props.type].color
        : notification.info.color) + ";\n        font-weight: 500;\n        margin: 0px;\n        padding: 0px 0px " + notification.verticalPadding + " 0px;\n    ";
});
exports.NotificationActionWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var notification = theme.notification;
    return "\n      cursor: pointer;\n      display: flex;\n      margin-top: " + notification.actionSpacing + ";\n      flex-direciton: row;\n      svg{\n        margin-left: " + notification.verticalPadding + ";\n        * {\n          fill: " + (notification[props.type]
        ? notification[props.type].color
        : notification.info.color) + ";\n        }\n      }\n    ";
});
exports.NotificationActionText = styled_components_1.default.p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var notification = theme.notification;
    return "\n      font-size: " + notification.fontSize + ";\n      color: " + (notification[props.type]
        ? notification[props.type].color
        : notification.info.color) + ";\n    ";
});
function Notification(props) {
    return (react_1.default.createElement(exports.NotificationWrapper, { type: props.type, hasAction: props.action && props.actionText ? true : false, iconPosition: props.iconPosition, icon: props.icon, actionText: props.actionText, title: props.title },
        react_1.default.createElement(react_1.default.Fragment, null,
            props.icon && (react_1.default.createElement(exports.IconWrapper, { type: props.type, hasAction: props.action && props.actionText ? true : false, iconPosition: props.iconPosition, icon: props.icon, actionText: props.actionText }, props.icon)),
            react_1.default.createElement(exports.NotificationContentWrapper, null,
                props.title && (react_1.default.createElement(exports.NotificationTitle, { type: props.type }, props.title)),
                props.children,
                props.action && props.actionText && (react_1.default.createElement(exports.NotificationActionWrapper, { type: props.type },
                    react_1.default.createElement(exports.NotificationActionText, { type: props.type }, props.actionText),
                    props.actionIcon && props.actionIcon))))));
}
exports.Notification = Notification;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
