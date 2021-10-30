"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHead = exports.TableHeadParagraph = exports.TableHeadItem = exports.TableHeadWrapper = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("../../utils");
exports.TableHeadWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  padding: 16px;\n  @media screen and (max-width: 800px) {\n    min-width: 750px;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  padding: 16px;\n  @media screen and (max-width: 800px) {\n    min-width: 750px;\n  }\n"])));
exports.TableHeadItem = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    return "\n        display: flex;\n        flex-direction: column;\n        margin-right: 16px;\n        " + (props.size !== undefined
        ? "\n        width: calc((100% / 12) * " + props.size + " - 16px);\n        min-width: calc((100% / 12) * " + props.size + " - 16px);\n        "
        : "flex: auto") + "\n        &:last-child{\n          margin-right: 0px;\n          " + (props.size !== undefined &&
        "\n            width: calc((100% / 12) * " + props.size + ");\n            min-width: calc((100% / 12) * " + props.size + ");\n            ") + "\n        }\n    ";
});
exports.TableHeadParagraph = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var fontFamily = theme.fontFamily;
    return "\n      color: #838383;\n      font-size: 12px;\n      margin: 0px;\n      font-family: " + fontFamily + "\n  ";
});
function TableHead(props) {
    var structure = props.structure;
    var tableHead = structure.map(function (item, i) { return (react_1.default.createElement(exports.TableHeadItem, { size: item.size, key: item.title.replace(/\s+/g, "") + i + "_element" },
        react_1.default.createElement(exports.TableHeadParagraph, null, item.title))); });
    return react_1.default.createElement(exports.TableHeadWrapper, null, tableHead);
}
exports.TableHead = TableHead;
var templateObject_1, templateObject_2, templateObject_3;
