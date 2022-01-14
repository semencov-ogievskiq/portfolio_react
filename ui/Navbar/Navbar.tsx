import { FC } from "react";
import { NavbarProps } from "./types";
import cn from "classnames";
import styles from "./styles.module.scss";

export const Navbar: FC<NavbarProps> = props => {
    const { className, title, icon } = props;

    const classNamesNavbar = cn(styles.navbar, className);

    return (
        <header className={classNamesNavbar}>
            {title && (
                <div className={styles.navbar__title}>
                    {icon && (
                        <div className={styles.navbar__title__icon}>{icon}</div>
                    )}
                    {title}
                </div>
            )}
        </header>
    );
};
