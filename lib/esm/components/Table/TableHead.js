var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { getTheme } from "../../utils";
export var TableHeadWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  padding: 16px;\n  @media screen and (max-width: 800px) {\n    min-width: 750px;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  padding: 16px;\n  @media screen and (max-width: 800px) {\n    min-width: 750px;\n  }\n"])));
export var TableHeadItem = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    return "\n        display: flex;\n        flex-direction: column;\n        margin-right: 16px;\n        " + (props.size !== undefined
        ? "\n        width: calc((100% / 12) * " + props.size + " - 16px);\n        min-width: calc((100% / 12) * " + props.size + " - 16px);\n        "
        : "flex: auto") + "\n        &:last-child{\n          margin-right: 0px;\n          " + (props.size !== undefined &&
        "\n            width: calc((100% / 12) * " + props.size + ");\n            min-width: calc((100% / 12) * " + props.size + ");\n            ") + "\n        }\n    ";
});
export var TableHeadParagraph = styled.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var fontFamily = theme.fontFamily;
    return "\n      color: #838383;\n      font-size: 12px;\n      margin: 0px;\n      font-family: " + fontFamily + "\n  ";
});
export function TableHead(props) {
    var structure = props.structure;
    var tableHead = structure.map(function (item, i) { return (React.createElement(TableHeadItem, { size: item.size, key: item.title.replace(/\s+/g, "") + i + "_element" },
        React.createElement(TableHeadParagraph, null, item.title))); });
    return React.createElement(TableHeadWrapper, null, tableHead);
}
var templateObject_1, templateObject_2, templateObject_3;
