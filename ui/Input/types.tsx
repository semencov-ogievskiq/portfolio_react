import { InputHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface InputProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label?: string;
    subtext?: string;
    icon?: ReactNode;
    hideClear?: boolean;
    type?: "string" | "number" | "password";
    value?: string | number;
    error?: boolean;
}
