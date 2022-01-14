import { Story, Meta } from "@storybook/react";
import { Sidebar } from "../index";
export const Default: Story = () => <Sidebar></Sidebar>;

export default {
    title: "Components/Sidebar",
    component: Sidebar,
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
} as Meta;
