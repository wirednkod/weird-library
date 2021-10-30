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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var utils_1 = require("../../utils");
var appearanceNone = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  box-shadow: none;\n  border: none;\n  background: transparent;\n"], ["\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  box-shadow: none;\n  border: none;\n  background: transparent;\n"])));
var SliderInput = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var slider = theme.slider;
    return "\n      -webkit-appearance: none;\n      width: 100%;\n      height: 4px;\n      max-height: 4px;\n      background: " + (props.disabled
        ? slider.disabledBackground
        : props.background
            ? props.background
            : slider.background) + ";\n      border-radius: 5px;\n      background-image: " + (props.disabled
        ? "none"
        : "linear-gradient(" + (props.selectedBackground
            ? props.selectedBackground
            : slider.selectedBackground) + ", " + (props.selectedBackground
            ? props.selectedBackground
            : slider.selectedBackground) + ")") + ";\n      background-size: " + getPercentage(props.min, props.max, props.value, false) + "% 100%;\n      background-repeat: no-repeat;\n      position: relative;\n      &&::-webkit-slider-thumb {\n        z-index: 1000;\n        -webkit-appearance: none;\n        appearance: none;\n        height: 20px;\n        width: 20px;\n        border-radius: 50%;\n        background: " + (props.selectedBackground
        ? props.selectedBackground
        : slider.selectedBackground) + ";\n        cursor: ew-resize;\n        box-shadow: 0 0 2px 0 #555;\n        transition: all .3s ease;\n        white-space: pre;\n        text-transform: none;\n        box-sizing: border-box;\n        display: block;\n        " + (!!window.chrome &&
        "\n            position: relative;\n            top: -9px;\n          ") + "\n        visibility: " + (props.disabled ? "hidden;" : "visible;") + "\n      }\n\n      &&::-moz-range-thumb {\n        appearance: none;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        height: 20px;\n        width: 20px;\n        border-radius: 50%;\n        background: " + (props.selectedBackground
        ? props.selectedBackground
        : slider.selectedBackground) + ";\n        cursor: ew-resize;\n        border: none;\n        transition: all .3s ease;\n        display: " + (props.disabled ? "none;" : "flex;") + "\n        visibility: " + (props.disabled ? "hidden;" : "visible;") + "\n      }\n\n      &&::-ms-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        height: 20px;\n        width: 20px;\n        border-radius: 50%;\n        background: " + (props.disabled
        ? "transparent"
        : props.selectedBackground
            ? props.selectedBackground
            : slider.selectedBackground) + ";\n        cursor: ew-resize;\n        transition: all .3s ease;\n        display: " + (props.disabled ? "none;" : "flex;") + "\n      }\n\n      &&::-webkit-slider-thumb:hover {\n        background: " + (props.thumbHover ? props.thumbHover : slider.thumbHover) + ";\n        display: " + (props.disabled ? "none;" : "flex;") + "\n      }\n\n      &&::-moz-range-thumb:hover {\n        background: " + (props.thumbHover ? props.thumbHover : slider.thumbHover) + ";\n        display: " + (props.disabled ? "none;" : "flex;") + "\n      }\n\n      &&::-ms-thumb:hover {\n        background: " + (props.thumbHover ? props.thumbHover : slider.thumbHover) + ";\n      }\n\n      /* Input Track */\n      &&::-webkit-slider-runnable-track  {\n        " + appearanceNone + "\n        display: " + (props.disabled ? "none;" : "flex;") + "\n      }\n\n      &&::-moz-range-track {\n        display: " + (props.disabled ? "none;" : "flex;") + "\n        " + appearanceNone + "\n      }\n\n      &&::-ms-track {\n        display: " + (props.disabled ? "none;" : "flex;") + "\n        " + appearanceNone + "\n      }\n    ";
});
var getPercentage = function (min, max, value, accurate) {
    var math = ((value - min) / (max - min)) * 100;
    return accurate === false ? math : Math.round(math);
};
var Output = styled_components_1.default.output(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var min = props.min, max = props.max, value = props.value, isDisabled = props.isDisabled, textColor = props.textColor;
    return "\n    visibility: " + (isDisabled ? "hidden" : "visible") + ";\n    font-weight: bold;\n    font-size: 14px;\n    background: transparent;\n    color: " + (isDisabled ? "#cacaca" : textColor || "#E2665C") + ";\n    position: relative;\n    left: " + (getPercentage(min, max, value) > 50
        ? getPercentage(min, max, value) > 99
            ? "99%"
            : "calc(" + getPercentage(min, max, value, false) + "% - 16px);"
        : getPercentage(min, max, value, false) + "%;") + "\n";
});
var DataList = styled_components_1.default.datalist(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  height: 4px;\n  overflow: hidden;\n  position: absolute;\n  top: 2px;\n  width: 100%;\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n"], ["\n  display: flex;\n  height: 4px;\n  overflow: hidden;\n  position: absolute;\n  top: 2px;\n  width: 100%;\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n"])));
var MinMaxContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n  position: relative;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n  position: relative;\n"])));
var Option = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = utils_1.getTheme(props);
    var slider = theme.slider;
    return "\n      position: absolute;\n      text-indent: -9999px;\n      width: 4px;\n      max-width: 4px;\n      min-width: 4px;\n      height: 4px;\n      max-height: 4px;\n      min-height: 4px;\n      padding: 0px;\n      overflow: hidden;\n      background-color: " + slider.tickerBackground + ";\n      display: " + ((!props.showTickersOnFilled && props.val < props.ticker) ||
        props.showTickersOnFilled
        ? "flex;"
        : "none;") + "\n      left: " + props.ticker + "%;\n  ";
});
var MinMax = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: 12px;\n  color: ", ";\n"], ["\n  font-weight: bold;\n  font-size: 12px;\n  color: ", ";\n"])), function (props) {
    return props.isDisabled
        ? "#cacaca"
        : props.textColor
            ? props.textColor
            : "#E2665C";
});
var SliderWrapper = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  margin-top: 12px;\n"], ["\n  position: relative;\n  display: flex;\n  margin-top: 12px;\n"])));
function Slider(_a) {
    var _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 100 : _c, defaultValue = _a.defaultValue, value = _a.value, _d = _a.showActualValue, showActualValue = _d === void 0 ? false : _d, _e = _a.isDisabled, isDisabled = _e === void 0 ? false : _e, _f = _a.showMinMax, showMinMax = _f === void 0 ? false : _f, _g = _a.showDataTickers, showDataTickers = _g === void 0 ? undefined : _g, _h = _a.showTickersOnFilled, showTickersOnFilled = _h === void 0 ? false : _h, _j = _a.dataTickers, dataTickers = _j === void 0 ? [] : _j, _k = _a.minLabel, minLabel = _k === void 0 ? undefined : _k, _l = _a.maxLabel, maxLabel = _l === void 0 ? undefined : _l, _m = _a.selectedBackground, selectedBackground = _m === void 0 ? undefined : _m, _o = _a.thumbHover, thumbHover = _o === void 0 ? undefined : _o, _p = _a.background, background = _p === void 0 ? undefined : _p, _q = _a.textColor, textColor = _q === void 0 ? undefined : _q, _r = _a.onBlur, onBlur = _r === void 0 ? undefined : _r, _s = _a.step, step = _s === void 0 ? 1 : _s, onChange = _a.onChange;
    var dataTickersList = [];
    var _t = react_1.useState(defaultValue ? defaultValue : (max - min) / 2), val = _t[0], setVal = _t[1];
    var _u = react_1.useState(isDisabled), alterDisabled = _u[0], setAlterDisabled = _u[1];
    react_1.useEffect(function () {
        if (value) {
            setVal(value);
        }
        else if (!isNaN(value || 0) ||
            value === undefined ||
            value === null ||
            value === 0) {
            setVal(0);
        }
    }, [value]);
    react_1.useEffect(function () {
        if (val > max || val < min || isDisabled) {
            setAlterDisabled(true);
        }
        else {
            setAlterDisabled(false);
        }
    }, [isDisabled, val, min, max]);
    if (showDataTickers && !alterDisabled) {
        var ticks = typeof dataTickers === "object" &&
            dataTickers.map(function (tick) {
                var tickValue = showDataTickers === "percentage"
                    ? tick
                    : getPercentage(min, max, tick);
                return (react_1.default.createElement(Option, { ticker: tickValue, val: getPercentage(min, max, val), key: tick + "_tick", showTickersOnFilled: showTickersOnFilled, textColor: textColor }, tickValue));
            });
        dataTickersList.push(react_1.default.createElement(DataList, { id: "ticks", key: "ticks_datalist" }, ticks));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Output, { showActualValue: showActualValue, isDisabled: alterDisabled, value: val, min: min || 0, max: max, textColor: textColor }, "" + (showActualValue ? "" + val : getPercentage(min, max, val) + "%")),
        react_1.default.createElement(SliderWrapper, null,
            react_1.default.createElement(SliderInput, { height: 1, background: background, thumbHover: thumbHover, selectedBackground: selectedBackground, list: "ticks", disabled: alterDisabled, type: "range", min: min || 0, max: max, showDataTickers: showDataTickers, value: val, step: step, onChange: function (e) {
                    var val = e.target.value <= min
                        ? min
                        : e.target.value <= max
                            ? e.target.value
                            : max;
                    setVal(val);
                    onChange(val);
                }, onTouchEnd: function (e) {
                    if (onBlur !== undefined) {
                        var val_1 = e.target.value <= min
                            ? min
                            : e.target.value <= max
                                ? e.target.value
                                : max;
                        setVal(val_1);
                        onBlur(val_1);
                    }
                }, onDragEnd: function (e) {
                    if (onBlur !== undefined) {
                        var val_2 = e.target.value <= min
                            ? min
                            : e.target.value <= max
                                ? e.target.value
                                : max;
                        setVal(val_2);
                        onBlur(val_2);
                    }
                }, onMouseUp: function (e) {
                    if (onBlur !== undefined) {
                        var val_3 = e.target.value <= min
                            ? min
                            : e.target.value <= max
                                ? e.target.value
                                : max;
                        setVal(val_3);
                        onBlur(val_3);
                    }
                } }),
            dataTickersList),
        showMinMax ? (react_1.default.createElement(MinMaxContainer, null,
            react_1.default.createElement(MinMax, { isDisabled: alterDisabled, textColor: textColor }, minLabel ? minLabel : min),
            react_1.default.createElement(MinMax, { isDisabled: alterDisabled, textColor: textColor }, maxLabel ? maxLabel : max))) : null));
}
exports.Slider = Slider;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
