var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useEffect, useRef, useState } from "react";
import { getTheme, isEmpty } from "../../utils";
import styled from "styled-components";
import useClickedOutside from "../../hooks/useClickedOutside";
var DropDownContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  height: 100%;\n"], ["\n  position: relative;\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  height: 100%;\n"])));
var DropDownHeader = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var _a = theme.dropdown, disabled = _a.disabled, _b = _a.header, fontFamily = _b.fontFamily, fontSize = _b.fontSize, background = _b.background, lineHeight = _b.lineHeight, title = _b.title, desc = _b.desc;
    return "\n    font-family: " + fontFamily + ";\n    font-size: " + fontSize + ";\n    background-color: " + (props.disabled ? disabled.background : background) + ";\n    line-height: " + lineHeight + ";\n    cursor: " + (props.disabled ? "normal" : "pointer") + ";\n    " + ListItemTitle + " {\n      color: " + (props.disabled ? disabled.color : title.color) + ";\n      padding: " + title.padding + ";\n      width: " + title.width + ";\n    }\n    " + ListItemDesc + " {\n      color: " + (props.disabled ? disabled.color : desc.color) + ";\n      padding: " + desc.padding + ";\n      width: " + desc.width + ";\n    }\n";
});
var ListItem = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var _a = theme.dropdown, header = _a.header, item = _a.item;
    var t = props.isHeader ? header : item;
    return "\n  position: relative;\n  font-family: " + t.fontFamily + ";\n  font-size: " + t.fontSize + ";\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  padding:" + t.padding + ";\n  " + (!props.isHeader &&
        "&:hover {\n    color: " + item.hoverColor + ";\n    background-color: " + item.hoverbackground + ";\n    cursor: pointer;\n  },") + "\n  " + ListItemTitle + " {\n    color: " + t.title.color + ";\n    padding: " + t.title.padding + ";\n  }\n  " + ListItemDesc + " {\n    color: " + t.desc.color + ";\n    padding: " + t.desc.padding + ";\n  }\n";
});
var ListItemTexts = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var ItemsContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var _a = theme.dropdown, width = _a.width, background = _a.item.background;
    return "\n    position: absolute;\n    z-index: 9999;\n    width: " + width + ";\n    top: 100%;\n    background-color: " + background + ";\n  ";
});
var ListItemTitle = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""])));
var ListItemDesc = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject([""], [""])));
export function Dropdown(props) {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = useState(null), selectedOption = _b[0], setSelectedOption = _b[1];
    var options = props.options, headerOption = props.headerOption, onChange = props.onChange;
    var wrapperRef = useRef(null);
    var clicked = useClickedOutside(wrapperRef);
    var toggling = function () { return setIsOpen(!isOpen); };
    var onOptionClicked = function (option, i) { return function () {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(i);
    }; };
    useEffect(function () {
        clicked && setIsOpen(false);
    }, [clicked]);
    var header = function (selectedOption, headerOption) {
        var magicStuff = function (stuff) { return (React.createElement(ListItem, { isHeader: true, theme: props.theme },
            stuff.icon && (React.createElement("div", { style: { display: "flex", padding: "0 10px", alignSelf: "center" } }, stuff.icon)),
            React.createElement(ListItemTexts, null,
                React.createElement(ListItemTitle, null, stuff.title),
                stuff.desc && React.createElement(ListItemDesc, null, stuff.desc)))); };
        if (headerOption &&
            !isEmpty(headerOption) &&
            headerOption.title) {
            return magicStuff(headerOption);
        }
        return selectedOption
            ? magicStuff(selectedOption)
            : magicStuff({
                title: "select an option",
            });
    };
    return (React.createElement(DropDownContainer, { ref: wrapperRef },
        React.createElement(DropDownHeader, { disabled: props.disabled, theme: props.theme, onClick: !props.disabled ? toggling : undefined }, header(selectedOption, headerOption)),
        isOpen && (React.createElement(ItemsContainer, null, options.map(function (option, i) {
            var title = option.title, desc = option.desc, icon = option.icon;
            return (React.createElement(ListItem, { onClick: onOptionClicked(option, i), key: Math.random() },
                icon && (React.createElement("div", { style: {
                        display: "flex",
                        padding: "0 10px",
                        alignSelf: "center",
                    } }, icon)),
                React.createElement(ListItemTexts, null,
                    React.createElement(ListItemTitle, null, title),
                    desc && React.createElement(ListItemDesc, null, desc))));
        })))));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
