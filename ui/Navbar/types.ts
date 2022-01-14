import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface NavbarProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    icon?: ReactNode;
}
