import { FC, useEffect, useState } from "react";
import cn from "classnames";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styles from "./styles.module.scss";
import { SidebarProps } from "./types";

export const Sidebar: FC<SidebarProps> = props => {
    const { open, onOpen, className } = props;

    const [openLocal, setOpenLocal] = useState<boolean>(open || false);
    const [hover, setHover] = useState<boolean>(false);

    useEffect(() => {
        if (open !== undefined && openLocal !== open) {
            setOpenLocal(open);
        }
    }, [open, openLocal]);

    const handlerOpen = () => {
        const open = !openLocal;
        setOpenLocal(open);
        onOpen?.(open);
    };

    const classNameSidebar = cn(
        styles.sidebar,
        {
            [styles.sidebar_open]: openLocal || hover,
        },
        className
    );

    return (
        <div
            className={classNameSidebar}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div
                className={styles["sidebar__button-open"]}
                onClick={handlerOpen}
            >
                {openLocal ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </div>
        </div>
    );
};
