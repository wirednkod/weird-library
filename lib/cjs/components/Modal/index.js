"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var ModalWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1000000;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1000000;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var ModalBackdrop = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  z-index: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n"], ["\n  display: flex;\n  flex-direction: column;\n  z-index: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n"])));
var ModalContent = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin: 0px auto;\n  z-index: 100000;\n  max-height: calc(100vh - 148px);\n  background-color: #28262c;\n  width: calc(50% - 48px);\n  overflow: auto;\n  padding: 24px;\n\n  @media screen and (max-width: 1200px) {\n    width: calc(80% - 48px);\n  }\n  @media screen and (max-width: 750px) {\n    min-height: 100vh;\n    height: 100vh;\n    width: calc(100% - 48px);\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin: 0px auto;\n  z-index: 100000;\n  max-height: calc(100vh - 148px);\n  background-color: #28262c;\n  width: calc(50% - 48px);\n  overflow: auto;\n  padding: 24px;\n\n  @media screen and (max-width: 1200px) {\n    width: calc(80% - 48px);\n  }\n  @media screen and (max-width: 750px) {\n    min-height: 100vh;\n    height: 100vh;\n    width: calc(100% - 48px);\n  }\n"])));
var ModalHeader = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 24px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 24px;\n"])));
var CloseWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex: auto;\n  align-items: center;\n  justify-content: flex-end;\n  svg {\n    cursor: pointer;\n    transition: all ease 0.4s;\n    opacity: 0.5;\n    &:hover {\n      opacity: 1;\n    }\n  }\n"], ["\n  display: flex;\n  flex: auto;\n  align-items: center;\n  justify-content: flex-end;\n  svg {\n    cursor: pointer;\n    transition: all ease 0.4s;\n    opacity: 0.5;\n    &:hover {\n      opacity: 1;\n    }\n  }\n"])));
var ModalTitleWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin-right: 20px;\n  width: calc((100% / 12) * 6 - 20px);\n  min-width: calc((100% / 12) * 6 - 20px);\n  @media screen and (max-width: 750px) {\n    width: 80%;\n    max-width: 80%;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin-right: 20px;\n  width: calc((100% / 12) * 6 - 20px);\n  min-width: calc((100% / 12) * 6 - 20px);\n  @media screen and (max-width: 750px) {\n    width: 80%;\n    max-width: 80%;\n  }\n"])));
var ChildrenWrapper = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var ModalTitle = styled_components_1.default.h5(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-size: 28px;\n  font-weight: 400;\n  color: white;\n  margin: 0px;\n"], ["\n  font-size: 28px;\n  font-weight: 400;\n  color: white;\n  margin: 0px;\n"])));
var ModalDescription = styled_components_1.default.h5(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: #a5a8a9;\n  font-size: 12px;\n  margin: 0px;\n"], ["\n  color: #a5a8a9;\n  font-size: 12px;\n  margin: 0px;\n"])));
var Modal = function (props) {
    var title = props.title, description = props.description, close = props.close, children = props.children;
    return (react_1.default.createElement(ModalWrapper, null,
        react_1.default.createElement(ModalBackdrop, { onClick: function () { return close(); } }),
        react_1.default.createElement(ModalContent, null,
            react_1.default.createElement(ModalHeader, null,
                react_1.default.createElement(ModalTitleWrapper, null,
                    react_1.default.createElement(ModalTitle, null, title),
                    description && react_1.default.createElement(ModalDescription, null, description)),
                react_1.default.createElement(CloseWrapper, { onClick: function () { return close(); } }, props.icon)),
            react_1.default.createElement(ChildrenWrapper, null, children))));
};
exports.Modal = Modal;
exports.default = exports.Modal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
