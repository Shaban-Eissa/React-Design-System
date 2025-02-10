import { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
    title: "Components/Toast",
    component: Toast,
    argTypes: {
        status: { control: "select", options: ["default", "success", "error", "warning", "info"] },
        position: { control: "select", options: ["top-left", "top-right", "bottom-left", "bottom-right", "top-center", "bottom-center"] },
        autoClose: { control: "boolean" },
        duration: { control: "number" },
    },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
    args: {
        message: "This is a toast notification!",
        status: "default",
        position: "top-left",
        autoClose: true,
        duration: 3000,
    },
};

export const Success: Story = {
    args: {
        ...Default.args,
        message: "Success! Your action was completed.",
        status: "success",
    },
};

export const Error: Story = {
    args: {
        ...Default.args,
        message: "Error! Something went wrong.",
        status: "error",
    },
};

export const Warning: Story = {
    args: {
        ...Default.args,
        message: "Warning! Check your inputs.",
        status: "warning",
    },
};

export const Info: Story = {
    args: {
        ...Default.args,
        message: "Info! Here’s something you should know.",
        status: "info",
    },
};
