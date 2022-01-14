import { Story, Meta } from "@storybook/react";
import { NavbarProps } from "../types";
import { Navbar } from "../index";
import CodeIcon from "@mui/icons-material/Code";

export const Default: Story<NavbarProps> = args => <Navbar {...args}></Navbar>;

export default {
    title: "Components/Navbar",
    component: Navbar,
    args: {
        title: "amso",
        icon: <CodeIcon />,
    },
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
} as Meta;
