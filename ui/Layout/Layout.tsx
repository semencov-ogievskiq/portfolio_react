import { FC, memo, useState } from "react";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";
import CodeIcon from "@mui/icons-material/Code";
import cn from "classnames";
import styles from "./styles.module.scss";

export const Layout: FC = memo(({ children }) => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);
    const classNameMain = cn(styles.main, {
        [styles.main_hidden]: openSidebar,
    });
    return (
        <>
            <Navbar title="amso" icon={<CodeIcon />} />
            <Sidebar
                className={styles.sidebar}
                open={openSidebar}
                onOpen={(open: boolean) => setOpenSidebar(open)}
            />
            <main className={classNameMain}>{children}</main>
        </>
    );
});

Layout.displayName = "Layout";
