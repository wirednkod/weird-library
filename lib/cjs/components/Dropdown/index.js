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
exports.Dropdown = void 0;
var react_1 = __importStar(require("react"));
var utils_1 = require("../../utils");
var styled_components_1 = __importDefault(require("styled-components"));
var useClickedOutside_1 = __importDefault(require("../../hooks/useClickedOutside"));
var DropDownContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  height: 100%;\n"], ["\n  position: relative;\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  height: 100%;\n"])));
var DropDownHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var _a = theme.dropdown, disabled = _a.disabled, _b = _a.header, fontFamily = _b.fontFamily, fontSize = _b.fontSize, background = _b.background, lineHeight = _b.lineHeight, title = _b.title, desc = _b.desc;
    return "\n    font-family: " + fontFamily + ";\n    font-size: " + fontSize + ";\n    background-color: " + (props.disabled ? disabled.background : background) + ";\n    line-height: " + lineHeight + ";\n    cursor: " + (props.disabled ? "normal" : "pointer") + ";\n    " + ListItemTitle + " {\n      color: " + (props.disabled ? disabled.color : title.color) + ";\n      padding: " + title.padding + ";\n      width: " + title.width + ";\n    }\n    " + ListItemDesc + " {\n      color: " + (props.disabled ? disabled.color : desc.color) + ";\n      padding: " + desc.padding + ";\n      width: " + desc.width + ";\n    }\n";
});
var ListItem = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var _a = theme.dropdown, header = _a.header, item = _a.item;
    var t = props.isHeader ? header : item;
    return "\n  position: relative;\n  font-family: " + t.fontFamily + ";\n  font-size: " + t.fontSize + ";\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  padding:" + t.padding + ";\n  " + (!props.isHeader &&
        "&:hover {\n    color: " + item.hoverColor + ";\n    background-color: " + item.hoverbackground + ";\n    cursor: pointer;\n  },") + "\n  " + ListItemTitle + " {\n    color: " + t.title.color + ";\n    padding: " + t.title.padding + ";\n  }\n  " + ListItemDesc + " {\n    color: " + t.desc.color + ";\n    padding: " + t.desc.padding + ";\n  }\n";
});
var ListItemTexts = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var ItemsContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var _a = theme.dropdown, width = _a.width, background = _a.item.background;
    return "\n    position: absolute;\n    z-index: 9999;\n    width: " + width + ";\n    top: 100%;\n    background-color: " + background + ";\n  ";
});
var ListItemTitle = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""])));
var ListItemDesc = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject([""], [""])));
function Dropdown(props) {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = react_1.useState(null), selectedOption = _b[0], setSelectedOption = _b[1];
    var options = props.options, headerOption = props.headerOption, onChange = props.onChange;
    var wrapperRef = react_1.useRef(null);
    var clicked = useClickedOutside_1.default(wrapperRef);
    var toggling = function () { return setIsOpen(!isOpen); };
    var onOptionClicked = function (option, i) { return function () {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(i);
    }; };
    react_1.useEffect(function () {
        clicked && setIsOpen(false);
    }, [clicked]);
    var header = function (selectedOption, headerOption) {
        var magicStuff = function (stuff) { return (react_1.default.createElement(ListItem, { isHeader: true, theme: props.theme },
            stuff.icon && (react_1.default.createElement("div", { style: { display: "flex", padding: "0 10px", alignSelf: "center" } }, stuff.icon)),
            react_1.default.createElement(ListItemTexts, null,
                react_1.default.createElement(ListItemTitle, null, stuff.title),
                stuff.desc && react_1.default.createElement(ListItemDesc, null, stuff.desc)))); };
        if (headerOption &&
            !utils_1.isEmpty(headerOption) &&
            headerOption.title) {
            return magicStuff(headerOption);
        }
        return selectedOption
            ? magicStuff(selectedOption)
            : magicStuff({
                title: "select an option",
            });
    };
    return (react_1.default.createElement(DropDownContainer, { ref: wrapperRef },
        react_1.default.createElement(DropDownHeader, { disabled: props.disabled, theme: props.theme, onClick: !props.disabled ? toggling : undefined }, header(selectedOption, headerOption)),
        isOpen && (react_1.default.createElement(ItemsContainer, null, options.map(function (option, i) {
            var title = option.title, desc = option.desc, icon = option.icon;
            return (react_1.default.createElement(ListItem, { onClick: onOptionClicked(option, i), key: Math.random() },
                icon && (react_1.default.createElement("div", { style: {
                        display: "flex",
                        padding: "0 10px",
                        alignSelf: "center",
                    } }, icon)),
                react_1.default.createElement(ListItemTexts, null,
                    react_1.default.createElement(ListItemTitle, null, title),
                    desc && react_1.default.createElement(ListItemDesc, null, desc))));
        })))));
}
exports.Dropdown = Dropdown;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
