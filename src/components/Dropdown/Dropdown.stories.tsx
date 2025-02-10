import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
    title: "Components/Dropdown",
    component: Dropdown,
    argTypes: {
        variant: { control: "radio", options: ["default", "outlined", "filled", "withIcon", "multiple"] },
        disabled: { control: "boolean" },
        label: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const sampleOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
];

export const Default: Story = {
    args: {
        label: "Default Dropdown",
        variant: "default",
        options: sampleOptions,
    },
};

export const Outlined: Story = {
    args: {
        label: "Outlined Dropdown",
        variant: "outlined",
        options: sampleOptions,
    },
};

export const Filled: Story = {
    args: {
        label: "Filled Dropdown",
        variant: "filled",
        options: sampleOptions,
    },
};

export const Multiple: Story = {
    args: {
        label: "Multiple Select",
        variant: "multiple",
        options: sampleOptions,
    },
};

export const Disabled: Story = {
    args: {
        label: "Disabled Dropdown",
        variant: "default",
        options: sampleOptions,
        disabled: true,
    },
};
