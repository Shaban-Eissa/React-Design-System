import { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
    title: "Components/Select",
    component: Select,
    argTypes: {
        variant: {
            control: { type: "radio" },
            options: ["default", "bordered", "minimal"],
        },
        disabled: {
            control: "boolean",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        label: "Choose an option",
        placeholder: "Select...",
        options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
        ],
        variant: "default",
    },
};

export const Bordered: Story = {
    args: {
        ...Default.args,
        variant: "bordered",
    },
};

export const Minimal: Story = {
    args: {
        ...Default.args,
        variant: "minimal",
    },
};

export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true,
    },
};
