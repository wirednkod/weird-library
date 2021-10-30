"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.TableContentWrapper = exports.TableWrapper = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var TableHead_1 = require("./TableHead");
var TableRow_1 = require("./TableRow");
exports.TableWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n"])));
exports.TableContentWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  @media screen and (max-width: 800px) {\n    min-width: 750px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  @media screen and (max-width: 800px) {\n    min-width: 750px;\n  }\n"])));
function Table(props) {
    var headStructure = props.headStructure, content = props.content;
    var tableRows = content.map(function (item, i) { return (react_1.default.createElement(TableRow_1.TableRow, { item: item, i: i, key: "tableRowElement_" + i })); });
    return (react_1.default.createElement(exports.TableWrapper, null,
        headStructure && react_1.default.createElement(TableHead_1.TableHead, { structure: headStructure }),
        react_1.default.createElement(exports.TableContentWrapper, null, tableRows)));
}
exports.Table = Table;
var templateObject_1, templateObject_2;
