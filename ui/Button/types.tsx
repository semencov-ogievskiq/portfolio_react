import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Kinds } from "../types";

export interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    kind?: Kinds;
}
