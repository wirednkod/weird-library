var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";
export var TableWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n"])));
export var TableContentWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  @media screen and (max-width: 800px) {\n    min-width: 750px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  @media screen and (max-width: 800px) {\n    min-width: 750px;\n  }\n"])));
export function Table(props) {
    var headStructure = props.headStructure, content = props.content;
    var tableRows = content.map(function (item, i) { return (React.createElement(TableRow, { item: item, i: i, key: "tableRowElement_" + i })); });
    return (React.createElement(TableWrapper, null,
        headStructure && React.createElement(TableHead, { structure: headStructure }),
        React.createElement(TableContentWrapper, null, tableRows)));
}
var templateObject_1, templateObject_2;
