import { Meta, StoryObj } from "@storybook/react";
import CustomDatePicker from "./DatePicker";

const meta: Meta<typeof CustomDatePicker> = {
    title: "Components/DatePicker",
    component: CustomDatePicker,
    argTypes: {
        variant: { control: "radio", options: ["default", "outlined", "filled"] },
        label: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof CustomDatePicker>;

export const Default: Story = {
    args: {
        label: "Pick a date",
        variant: "default",
    },
};

export const Outlined: Story = {
    args: {
        label: "Outlined Date",
        variant: "outlined",
    },
};

export const Filled: Story = {
    args: {
        label: "Filled Date",
        variant: "filled",
    },
};

export const NoLabel: Story = {
    args: {
        variant: "default",
    },
};
