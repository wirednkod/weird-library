var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { getTheme } from "../../utils";
export var NotificationWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
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
export var IconWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var notification = theme.notification;
    return "\n    display: flex;\n    align-items: flex-start;\n    " + (props.iconPosition === "top"
        ? "padding-bottom: " + notification.horizontalPadding
        : "padding-right: " + notification.horizontalPadding) + ";\n    svg{\n      * {\n        fill: " + (notification[props.type]
        ? notification[props.type].color
        : notification.info.color) + ";\n      }\n    }\n  ";
});
export var NotificationContentWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n"])));
export var NotificationTitle = styled.h5(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var notification = theme.notification;
    return "\n        font-size: " + notification.fontSizeMedium + ";\n        color: " + (notification[props.type]
        ? notification[props.type].color
        : notification.info.color) + ";\n        font-weight: 500;\n        margin: 0px;\n        padding: 0px 0px " + notification.verticalPadding + " 0px;\n    ";
});
export var NotificationActionWrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var notification = theme.notification;
    return "\n      cursor: pointer;\n      display: flex;\n      margin-top: " + notification.actionSpacing + ";\n      flex-direciton: row;\n      svg{\n        margin-left: " + notification.verticalPadding + ";\n        * {\n          fill: " + (notification[props.type]
        ? notification[props.type].color
        : notification.info.color) + ";\n        }\n      }\n    ";
});
export var NotificationActionText = styled.p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var notification = theme.notification;
    return "\n      font-size: " + notification.fontSize + ";\n      color: " + (notification[props.type]
        ? notification[props.type].color
        : notification.info.color) + ";\n    ";
});
export function Notification(props) {
    return (React.createElement(NotificationWrapper, { type: props.type, hasAction: props.action && props.actionText ? true : false, iconPosition: props.iconPosition, icon: props.icon, actionText: props.actionText, title: props.title },
        React.createElement(React.Fragment, null,
            props.icon && (React.createElement(IconWrapper, { type: props.type, hasAction: props.action && props.actionText ? true : false, iconPosition: props.iconPosition, icon: props.icon, actionText: props.actionText }, props.icon)),
            React.createElement(NotificationContentWrapper, null,
                props.title && (React.createElement(NotificationTitle, { type: props.type }, props.title)),
                props.children,
                props.action && props.actionText && (React.createElement(NotificationActionWrapper, { type: props.type },
                    React.createElement(NotificationActionText, { type: props.type }, props.actionText),
                    props.actionIcon && props.actionIcon))))));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
