import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
    title: "Components/Badge",
    component: Badge,
    argTypes: {
        variant: { control: "radio", options: ["primary", "secondary", "success", "warning", "error", "info"] },
        size: { control: "radio", options: ["small", "medium", "large"] },
        shape: { control: "radio", options: ["rounded", "pill", "square"] },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
    args: {
        variant: "primary",
        size: "medium",
        shape: "rounded",
        children: "Primary Badge",
    },
};

export const Success: Story = {
    args: {
        variant: "success",
        size: "medium",
        shape: "rounded",
        children: "Success Badge",
    },
};

export const Warning: Story = {
    args: {
        variant: "warning",
        size: "medium",
        shape: "rounded",
        children: "Warning Badge",
    },
};

