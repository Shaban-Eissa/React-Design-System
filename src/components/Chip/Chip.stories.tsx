import { Meta, StoryObj } from "@storybook/react";
import Chip from "./Chip";
import { Star } from "lucide-react";

const meta: Meta<typeof Chip> = {
    title: "Components/Chip",
    component: Chip,
    argTypes: {
        variant: { control: "radio", options: ["default", "outlined", "filled"] },
    },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
    args: {
        label: "Default Chip",
        variant: "default",
    },
};

export const Outlined: Story = {
    args: {
        label: "Outlined Chip",
        variant: "outlined",
    },
};

export const Filled: Story = {
    args: {
        label: "Filled Chip",
        variant: "filled",
    },
};

export const WithIcon: Story = {
    args: {
        label: "With Icon",
        variant: "filled",
        icon: <Star size={14} />,
    },
};

export const Closable: Story = {
    args: {
        label: "Closable Chip",
        variant: "default",
        onClose: () => alert("Chip closed!"),
    },
};
