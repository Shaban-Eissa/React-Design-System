import { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";

const meta: Meta<typeof Alert> = {
    title: "Components/Alert",
    component: Alert,
    argTypes: {
        variant: {
            control: { type: "radio" },
            options: ["success", "error", "warning", "info"],
        },
        dismissible: { control: { type: "boolean" } },
    },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
    args: {
        variant: "success",
        children: "This is a success message!",
        dismissible: true,
    },
};

export const Error: Story = {
    args: {
        variant: "error",
        children: "Something went wrong!",
        dismissible: true,
    },
};

export const Warning: Story = {
    args: {
        variant: "warning",
        children: "Warning: Check your settings!",
        dismissible: true,
    },
};

export const Info: Story = {
    args: {
        variant: "info",
        children: "This is an informational message.",
        dismissible: true,
    },
};
