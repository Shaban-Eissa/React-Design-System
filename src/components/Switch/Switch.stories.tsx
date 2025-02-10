import { Meta, StoryObj } from "@storybook/react";
import Switch, { SwitchProps } from "./Switch";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
    title: "Components/Switch",
    component: Switch,
    argTypes: {
        size: {
            control: { type: "radio" },
            options: ["sm", "md", "lg"],
        },
        disabled: {
            control: "boolean",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Switch>;

const Template = (args: SwitchProps) => {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onChange={setChecked} />;
};

export const Small: Story = {
    render: Template,
    args: {
        size: "sm",
    },
};

export const Medium: Story = {
    render: Template,
    args: {
        size: "md",
    },
};

export const Large: Story = {
    render: Template,
    args: {
        size: "lg",
    },
};

export const Disabled: Story = {
    render: Template,
    args: {
        disabled: true,
    },
};
