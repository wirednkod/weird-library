var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { getTheme } from "../../utils";
export var TableRowItem = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    return "\n        display: flex;\n        flex-direction: column;\n        margin-right: 16px;\n        " + (props.size !== undefined
        ? "\n        width: calc((100% / 12) * " + props.size + " - 16px);\n        min-width: calc((100% / 12) * " + props.size + " - 16px);\n        "
        : "flex: auto") + "\n        &:last-child{\n          margin-right: 0px;\n          " + (props.size !== undefined &&
        "\n            width: calc((100% / 12) * " + props.size + ");\n            min-width: calc((100% / 12) * " + props.size + ");\n            ") + "\n        }\n    ";
});
export var TableRowWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var table = theme.table;
    return "\n      display: flex;\n      flex-direction: row;\n      padding: " + table.rowPadding + ";\n      background-color: " + table.rowBackground + ";\n      align-items: center;\n      margin-bottom: " + table.rowMargin + ";\n    ";
});
export function TableRow(props) {
    var item = props.item;
    return (React.createElement(TableRowWrapper, { i: props.i, length: item.length }, item.map(function (element, i) { return (React.createElement(TableRowItem, { size: element.size, key: "tableRow_" + i }, element.value)); })));
}
var templateObject_1, templateObject_2;
