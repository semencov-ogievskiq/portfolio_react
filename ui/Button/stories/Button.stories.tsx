import { Story, Meta } from "@storybook/react";
import { ButtonProps } from "../types";
import { Button } from "../index";
import { KINDS } from "../../constant";
import styles from "./styles.module.scss";

const ButtonText = "Кнопка";

export const Default: Story<ButtonProps> = args => (
    <Button {...args}>{ButtonText}</Button>
);

Default.parameters = {
    controls: {
        disable: false,
    },
    actions: {
        disable: false,
    },
};

export const Kinds: Story<ButtonProps> = () => {
    return (
        <div className={styles.container}>
            {Object.values(KINDS).map(kind => (
                <div key={kind}>
                    <h4>{kind}</h4>
                    <Button key={kind} kind={kind} className={styles.button}>
                        {ButtonText}
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default {
    title: "Components/Button",
    component: Button,
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
} as Meta;
