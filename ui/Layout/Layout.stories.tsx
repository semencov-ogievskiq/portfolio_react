import { Story, Meta } from "@storybook/react";
import { Layout } from "../index";

export const Default: Story = () => <Layout>Тело сайта</Layout>;

export default {
    title: "Components/Layout",
    component: Layout,
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
} as Meta;
