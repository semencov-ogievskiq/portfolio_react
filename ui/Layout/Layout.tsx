import { FC, memo } from "react";
import { Navbar } from "../Navbar";
import CodeIcon from "@mui/icons-material/Code";
import styles from "./styles.module.scss";

export const Layout: FC = memo(({ children }) => {
    return (
        <>
            <Navbar title="amso" icon={<CodeIcon />} />
            <main className={styles.main}>{children}</main>
        </>
    );
});

Layout.displayName = "Layout";
