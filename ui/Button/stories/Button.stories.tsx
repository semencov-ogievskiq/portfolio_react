import { Story, Meta } from "@storybook/react";
import { ButtonProps } from "../types";
import { Button } from "../index";

const ButtonText = "Кнопка";

export const Default: Story<ButtonProps> = args => (
    <Button {...args}>{ButtonText}</Button>
);

export default {
    title: "Components/Button",
    component: Button,
} as Meta;
