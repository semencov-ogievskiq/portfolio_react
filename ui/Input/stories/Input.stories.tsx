import { Story, Meta } from "@storybook/react";
import { InputProps } from "../types";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Input } from "../Input";
import { useState } from "react";

export const Default: Story<InputProps> = args => {
    const [value, setValue] = useState("");
    return (
        <Input
            {...args}
            value={value}
            onChange={event => {
                setValue(event.target.value);
            }}
        />
    );
};

Default.parameters = {
    controls: {
        disable: false,
    },
    actions: {
        disable: false,
    },
};

export const TitleAndSubtext: Story<InputProps> = args => {
    const [value, setValue] = useState("");
    return (
        <Input
            {...args}
            value={value}
            onChange={event => {
                setValue(event.target.value);
            }}
        />
    );
};

TitleAndSubtext.args = {
    label: "Название",
    subtext: "подсказка",
};

export const Error: Story<InputProps> = args => {
    const [value, setValue] = useState("");
    return (
        <Input
            {...args}
            value={value}
            onChange={event => {
                setValue(event.target.value);
            }}
        />
    );
};

Error.args = {
    label: "Название",
    subtext: "подсказка",
    error: true,
};

export const Icon: Story<InputProps> = args => {
    const [value, setValue] = useState("");
    return (
        <Input
            {...args}
            value={value}
            onChange={event => {
                setValue(event.target.value);
            }}
        />
    );
};

Icon.args = {
    label: "Название",
    subtext: "подсказка",
    icon: <AttachMoneyIcon />,
};

export default {
    title: "Components/Input",
    component: Input,
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
} as Meta;
