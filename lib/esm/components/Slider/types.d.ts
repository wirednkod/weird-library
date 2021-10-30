export interface SliderProps {
    min?: number;
    max: number;
    defaultValue?: number;
    value?: number;
    showActualValue: boolean;
    isDisabled?: boolean;
    showMinMax?: boolean;
    showTickersOnFilled?: boolean;
    showDataTickers?: "percentage" | "number";
    dataTickers?: Array<number>;
    minLabel?: string;
    maxLabel?: string;
    background?: string;
    textColor?: string;
    onBlur?: (a: string) => void;
    selectedBackground?: string;
    thumbHover?: string;
    step?: number;
    onChange: (a: string) => void;
    debounceDelay?: number;
}
export interface SliderInputProps extends BasicProps {
    height: number;
    background?: string;
    selectedBackground?: string;
    thumbHover?: string;
    showDataTickers?: "percentage" | "number";
}
export interface OutputProps extends BasicProps {
    showActualValue: boolean;
    isDisabled: boolean;
    textColor?: string;
}
export interface MinMaxProps {
    isDisabled: boolean;
    textColor?: string;
}
export interface BasicProps {
    value: number;
    min: number;
    max: number;
}
export interface OptionProps {
    ticker: number;
    val: number;
    showTickersOnFilled?: boolean;
    textColor?: string;
}
