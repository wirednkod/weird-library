import { InputHTMLAttributes } from "react";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    component?: React.ReactElement;
    componentPosition?: "right" | "left";
    large?: boolean;
    focused?: boolean;
}
