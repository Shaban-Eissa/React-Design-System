import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        variant: { control: "radio", options: ["primary", "secondary", "outline", "danger", "success"] },
        size: { control: "radio", options: ["sm", "md", "lg"] },
        isLoading: { control: "boolean" },
        fullWidth: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: "primary", children: "Primary Button" } };
export const Secondary: Story = { args: { variant: "secondary", children: "Secondary Button" } };
export const Outline: Story = { args: { variant: "outline", children: "Outline Button" } };
export const Danger: Story = { args: { variant: "danger", children: "Danger Button" } };
export const success: Story = { args: { variant: "success", children: "Success Button" } };
export const Loading: Story = { args: { isLoading: true, children: "Loading..." } };
export const FullWidth: Story = { args: { fullWidth: true, children: "Full Width Button" } };
export const Large: Story = { args: { size: "lg", children: "Large Button" } };
export const Small: Story = { args: { size: "sm", children: "Small Button" } };
