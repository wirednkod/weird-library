import React, { useState, useEffect } from "react";

import styled, { css } from "styled-components";
import { getTheme } from "../../utils";
import {
  SliderProps,
  SliderInputProps,
  OutputProps,
  MinMaxProps,
  OptionProps,
} from "./types";

declare const window: any;

const appearanceNone = css`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
`;

const SliderInput = styled.input<SliderInputProps>`
  ${(props) => {
    const theme = getTheme(props);
    const { slider } = theme;

    return `
      -webkit-appearance: none;
      width: 100%;
      height: 4px;
      max-height: 4px;
      background: ${
        props.disabled
          ? slider.disabledBackground
          : props.background
          ? props.background
          : slider.background
      };
      border-radius: 5px;
      background-image: ${
        props.disabled
          ? "none"
          : `linear-gradient(${
              props.selectedBackground
                ? props.selectedBackground
                : slider.selectedBackground
            }, ${
              props.selectedBackground
                ? props.selectedBackground
                : slider.selectedBackground
            })`
      };
      background-size: ${getPercentage(
        props.min,
        props.max,
        props.value,
        false,
      )}% 100%;
      background-repeat: no-repeat;
      position: relative;
      &&::-webkit-slider-thumb {
        z-index: 1000;
        -webkit-appearance: none;
        appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: ${
          props.selectedBackground
            ? props.selectedBackground
            : slider.selectedBackground
        };
        cursor: ew-resize;
        box-shadow: 0 0 2px 0 #555;
        transition: all .3s ease;
        white-space: pre;
        text-transform: none;
        box-sizing: border-box;
        display: block;
        ${
          !!window.chrome &&
          `
            position: relative;
            top: -9px;
          `
        }
        visibility: ${props.disabled ? "hidden;" : "visible;"}
      }

      &&::-moz-range-thumb {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: ${
          props.selectedBackground
            ? props.selectedBackground
            : slider.selectedBackground
        };
        cursor: ew-resize;
        border: none;
        transition: all .3s ease;
        display: ${props.disabled ? "none;" : "flex;"}
        visibility: ${props.disabled ? "hidden;" : "visible;"}
      }

      &&::-ms-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: ${
          props.disabled
            ? "transparent"
            : props.selectedBackground
            ? props.selectedBackground
            : slider.selectedBackground
        };
        cursor: ew-resize;
        transition: all .3s ease;
        display: ${props.disabled ? "none;" : "flex;"}
      }

      &&::-webkit-slider-thumb:hover {
        background: ${props.thumbHover ? props.thumbHover : slider.thumbHover};
        display: ${props.disabled ? "none;" : "flex;"}
      }

      &&::-moz-range-thumb:hover {
        background: ${props.thumbHover ? props.thumbHover : slider.thumbHover};
        display: ${props.disabled ? "none;" : "flex;"}
      }

      &&::-ms-thumb:hover {
        background: ${props.thumbHover ? props.thumbHover : slider.thumbHover};
      }

      /* Input Track */
      &&::-webkit-slider-runnable-track  {
        ${appearanceNone}
        display: ${props.disabled ? "none;" : "flex;"}
      }

      &&::-moz-range-track {
        display: ${props.disabled ? "none;" : "flex;"}
        ${appearanceNone}
      }

      &&::-ms-track {
        display: ${props.disabled ? "none;" : "flex;"}
        ${appearanceNone}
      }
    `;
  }}
`;

const getPercentage = (
  min: number,
  max: number,
  value: number,
  accurate?: boolean,
) => {
  const math = ((value - min) / (max - min)) * 100;
  return accurate === false ? math : Math.round(math);
};

const Output = styled.output<OutputProps>`
  ${(props) => {
    const { min, max, value, isDisabled, textColor } = props;
    return `
    visibility: ${isDisabled ? "hidden" : "visible"};
    font-weight: bold;
    font-size: 14px;
    background: transparent;
    color: ${isDisabled ? "#cacaca" : textColor || "#E2665C"};
    position: relative;
    left: ${
      getPercentage(min, max, value) > 50
        ? getPercentage(min, max, value) > 99
          ? `99%`
          : `calc(${getPercentage(min, max, value, false)}% - 16px);`
        : `${getPercentage(min, max, value, false)}%;`
    }
`;
  }}
`;

const DataList = styled.datalist`
  display: flex;
  height: 4px;
  overflow: hidden;
  position: absolute;
  top: 2px;
  width: 100%;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

const MinMaxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  position: relative;
`;
const Option = styled.div<OptionProps>`
  ${(props) => {
    const theme = getTheme(props);
    const { slider } = theme;
    return `
      position: absolute;
      text-indent: -9999px;
      width: 4px;
      max-width: 4px;
      min-width: 4px;
      height: 4px;
      max-height: 4px;
      min-height: 4px;
      padding: 0px;
      overflow: hidden;
      background-color: ${slider.tickerBackground};
      display: ${
        (!props.showTickersOnFilled && props.val < props.ticker) ||
        props.showTickersOnFilled
          ? "flex;"
          : "none;"
      }
      left: ${props.ticker}%;
  `;
  }}
`;

const MinMax = styled.div<MinMaxProps>`
  font-weight: bold;
  font-size: 12px;
  color: ${(props) =>
    props.isDisabled
      ? "#cacaca"
      : props.textColor
      ? props.textColor
      : "#E2665C"};
`;
const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 12px;
`;

export function Slider({
  min = 0,
  max = 100,
  defaultValue,
  value,
  showActualValue = false,
  isDisabled = false,
  showMinMax = false,
  showDataTickers = undefined,
  showTickersOnFilled = false,
  dataTickers = [],
  minLabel = undefined,
  maxLabel = undefined,
  selectedBackground = undefined,
  thumbHover = undefined,
  background = undefined,
  textColor = undefined,
  onBlur = undefined,
  step = 1,
  onChange,
}: SliderProps) {
  const dataTickersList = [];
  const [val, setVal] = useState<number>(
    defaultValue ? defaultValue : (max - min) / 2,
  );
  const [alterDisabled, setAlterDisabled] = useState<boolean>(isDisabled);

  useEffect(() => {
    if (value) {
      setVal(value);
    } else if (
      !isNaN(value || 0) ||
      value === undefined ||
      value === null ||
      value === 0
    ) {
      setVal(0);
    }
  }, [value]);

  useEffect(() => {
    if (val > max || val < min || isDisabled) {
      setAlterDisabled(true);
    } else {
      setAlterDisabled(false);
    }
  }, [isDisabled, val, min, max]);

  if (showDataTickers && !alterDisabled) {
    const ticks =
      typeof dataTickers === "object" &&
      dataTickers.map((tick) => {
        const tickValue =
          showDataTickers === "percentage"
            ? tick
            : getPercentage(min, max, tick);
        return (
          <Option
            ticker={tickValue}
            val={getPercentage(min, max, val)}
            key={tick + "_tick"}
            showTickersOnFilled={showTickersOnFilled}
            textColor={textColor}
          >
            {tickValue}
          </Option>
        );
      });
    dataTickersList.push(
      <DataList id="ticks" key="ticks_datalist">
        {ticks}
      </DataList>,
    );
  }

  return (
    <>
      <Output
        showActualValue={showActualValue}
        isDisabled={alterDisabled}
        value={val}
        min={min || 0}
        max={max}
        textColor={textColor}
      >{`${
        showActualValue ? `${val}` : `${getPercentage(min, max, val)}%`
      }`}</Output>
      <SliderWrapper>
        <SliderInput
          height={1}
          background={background}
          thumbHover={thumbHover}
          selectedBackground={selectedBackground}
          list="ticks"
          disabled={alterDisabled}
          type="range"
          min={min || 0}
          max={max}
          showDataTickers={showDataTickers}
          value={val}
          step={step}
          onChange={(e: any) => {
            const val =
              e.target.value <= min
                ? min
                : e.target.value <= max
                ? e.target.value
                : max;
            setVal(val);
            onChange(val);
          }}
          onTouchEnd={(e: any) => {
            if (onBlur !== undefined) {
              const val =
                e.target.value <= min
                  ? min
                  : e.target.value <= max
                  ? e.target.value
                  : max;
              setVal(val);
              onBlur(val);
            }
          }}
          onDragEnd={(e: any) => {
            if (onBlur !== undefined) {
              const val =
                e.target.value <= min
                  ? min
                  : e.target.value <= max
                  ? e.target.value
                  : max;
              setVal(val);
              onBlur(val);
            }
          }}
          onMouseUp={(e: any) => {
            if (onBlur !== undefined) {
              const val =
                e.target.value <= min
                  ? min
                  : e.target.value <= max
                  ? e.target.value
                  : max;
              setVal(val);
              onBlur(val);
            }
          }}
        />
        {dataTickersList}
      </SliderWrapper>
      {showMinMax ? (
        <MinMaxContainer>
          <MinMax isDisabled={alterDisabled} textColor={textColor}>
            {minLabel ? minLabel : min}
          </MinMax>
          <MinMax isDisabled={alterDisabled} textColor={textColor}>
            {maxLabel ? maxLabel : max}
          </MinMax>
        </MinMaxContainer>
      ) : null}
    </>
  );
}
