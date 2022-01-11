import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { InputProps } from "./types";
import styles from "./styles.module.scss";
import cn from "classnames";
import ClearIcon from "@mui/icons-material/Clear";

export const Input: FC<InputProps> = props => {
    const {
        label,
        subtext,
        icon,
        hideClear = false,
        value,
        onChange,
        error = false,
        className,
        ...other
    } = props;

    const ref = useRef<
        HTMLInputElement & {
            _valueTracker: { setValue: (key: string) => void };
        }
    >(null);

    const [valueLocal, setValueLocal] = useState<string | number>(value || "");
    const [hover, setHover] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);

    const isShowClear = !hideClear && !value;

    useEffect(() => {
        setValueLocal(value || "");
    }, [value]);

    const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);
    };
    const handlerClear = () => {
        if (ref.current) {
            const input = ref.current;
            const lastValue = input.value;
            input.value = "";
            const event = new Event("change", { bubbles: true });
            const tracker = input._valueTracker;
            if (tracker) {
                tracker.setValue(lastValue);
            }
            input.dispatchEvent(event);
        }
    };
    const handlerMouseEnter = () => {
        setHover(true);
    };
    const handlerMouseLeave = () => {
        setHover(false);
    };
    const handlerFocus = () => {
        setFocus(true);
    };
    const handlerBlur = () => {
        setFocus(false);
    };

    const classNamesInput = cn(
        styles.input,
        {
            [styles["input-error"]]: error,
            [styles["input-hover"]]: hover,
            [styles["input-focus"]]: focus,
            [styles["input-label_show"]]: !!label,
            [styles["input-subtext_show"]]: !!subtext,
        },
        className
    );

    return (
        <label className={classNamesInput}>
            {label && <div className={styles.input__label}>{label}</div>}
            {icon && <div className={styles.input__icon}>{icon}</div>}
            <input
                ref={ref}
                className={styles.input__field}
                value={valueLocal}
                onChange={handlerChange}
                onMouseEnter={handlerMouseEnter}
                onMouseLeave={handlerMouseLeave}
                onFocus={handlerFocus}
                onBlur={handlerBlur}
                {...other}
            />
            {!isShowClear && (
                <div className={styles.input__clear} onClick={handlerClear}>
                    <ClearIcon fontSize="small" />
                </div>
            )}
            {subtext && <div className={styles.input__subtext}>{subtext}</div>}
        </label>
    );
};
