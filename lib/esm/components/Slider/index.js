var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { getTheme } from "../../utils";
var appearanceNone = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  box-shadow: none;\n  border: none;\n  background: transparent;\n"], ["\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  box-shadow: none;\n  border: none;\n  background: transparent;\n"])));
var SliderInput = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
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
var Output = styled.output(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var min = props.min, max = props.max, value = props.value, isDisabled = props.isDisabled, textColor = props.textColor;
    return "\n    visibility: " + (isDisabled ? "hidden" : "visible") + ";\n    font-weight: bold;\n    font-size: 14px;\n    background: transparent;\n    color: " + (isDisabled ? "#cacaca" : textColor || "#E2665C") + ";\n    position: relative;\n    left: " + (getPercentage(min, max, value) > 50
        ? getPercentage(min, max, value) > 99
            ? "99%"
            : "calc(" + getPercentage(min, max, value, false) + "% - 16px);"
        : getPercentage(min, max, value, false) + "%;") + "\n";
});
var DataList = styled.datalist(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  height: 4px;\n  overflow: hidden;\n  position: absolute;\n  top: 2px;\n  width: 100%;\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n"], ["\n  display: flex;\n  height: 4px;\n  overflow: hidden;\n  position: absolute;\n  top: 2px;\n  width: 100%;\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n"])));
var MinMaxContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n  position: relative;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n  position: relative;\n"])));
var Option = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var theme = getTheme(props);
    var slider = theme.slider;
    return "\n      position: absolute;\n      text-indent: -9999px;\n      width: 4px;\n      max-width: 4px;\n      min-width: 4px;\n      height: 4px;\n      max-height: 4px;\n      min-height: 4px;\n      padding: 0px;\n      overflow: hidden;\n      background-color: " + slider.tickerBackground + ";\n      display: " + ((!props.showTickersOnFilled && props.val < props.ticker) ||
        props.showTickersOnFilled
        ? "flex;"
        : "none;") + "\n      left: " + props.ticker + "%;\n  ";
});
var MinMax = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: 12px;\n  color: ", ";\n"], ["\n  font-weight: bold;\n  font-size: 12px;\n  color: ", ";\n"])), function (props) {
    return props.isDisabled
        ? "#cacaca"
        : props.textColor
            ? props.textColor
            : "#E2665C";
});
var SliderWrapper = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  margin-top: 12px;\n"], ["\n  position: relative;\n  display: flex;\n  margin-top: 12px;\n"])));
export function Slider(_a) {
    var _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 100 : _c, defaultValue = _a.defaultValue, value = _a.value, _d = _a.showActualValue, showActualValue = _d === void 0 ? false : _d, _e = _a.isDisabled, isDisabled = _e === void 0 ? false : _e, _f = _a.showMinMax, showMinMax = _f === void 0 ? false : _f, _g = _a.showDataTickers, showDataTickers = _g === void 0 ? undefined : _g, _h = _a.showTickersOnFilled, showTickersOnFilled = _h === void 0 ? false : _h, _j = _a.dataTickers, dataTickers = _j === void 0 ? [] : _j, _k = _a.minLabel, minLabel = _k === void 0 ? undefined : _k, _l = _a.maxLabel, maxLabel = _l === void 0 ? undefined : _l, _m = _a.selectedBackground, selectedBackground = _m === void 0 ? undefined : _m, _o = _a.thumbHover, thumbHover = _o === void 0 ? undefined : _o, _p = _a.background, background = _p === void 0 ? undefined : _p, _q = _a.textColor, textColor = _q === void 0 ? undefined : _q, _r = _a.onBlur, onBlur = _r === void 0 ? undefined : _r, _s = _a.step, step = _s === void 0 ? 1 : _s, onChange = _a.onChange;
    var dataTickersList = [];
    var _t = useState(defaultValue ? defaultValue : (max - min) / 2), val = _t[0], setVal = _t[1];
    var _u = useState(isDisabled), alterDisabled = _u[0], setAlterDisabled = _u[1];
    useEffect(function () {
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
    useEffect(function () {
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
                return (React.createElement(Option, { ticker: tickValue, val: getPercentage(min, max, val), key: tick + "_tick", showTickersOnFilled: showTickersOnFilled, textColor: textColor }, tickValue));
            });
        dataTickersList.push(React.createElement(DataList, { id: "ticks", key: "ticks_datalist" }, ticks));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Output, { showActualValue: showActualValue, isDisabled: alterDisabled, value: val, min: min || 0, max: max, textColor: textColor }, "" + (showActualValue ? "" + val : getPercentage(min, max, val) + "%")),
        React.createElement(SliderWrapper, null,
            React.createElement(SliderInput, { height: 1, background: background, thumbHover: thumbHover, selectedBackground: selectedBackground, list: "ticks", disabled: alterDisabled, type: "range", min: min || 0, max: max, showDataTickers: showDataTickers, value: val, step: step, onChange: function (e) {
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
        showMinMax ? (React.createElement(MinMaxContainer, null,
            React.createElement(MinMax, { isDisabled: alterDisabled, textColor: textColor }, minLabel ? minLabel : min),
            React.createElement(MinMax, { isDisabled: alterDisabled, textColor: textColor }, maxLabel ? maxLabel : max))) : null));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
