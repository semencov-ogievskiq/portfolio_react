import { FC } from "react";
import { ButtonProps } from "./types";
import cn from "classnames";
import { KINDS } from "../constant";
import styles from "./styles.module.scss";

export const Button: FC<ButtonProps> = props => {
    const { children, className, kind = KINDS.SECONDARY, ...other } = props;

    const classNames = cn(styles.button, styles[`button-${kind}`], className);

    return (
        <button {...other} className={classNames}>
            {children}
        </button>
    );
};
