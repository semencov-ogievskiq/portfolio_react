import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface SidebarProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    open?: boolean;
    onOpen?: (open: boolean) => void;
}
