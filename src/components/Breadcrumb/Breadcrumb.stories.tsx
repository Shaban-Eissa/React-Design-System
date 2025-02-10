import { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
    title: "Components/Breadcrumb",
    component: Breadcrumb,
    argTypes: {
        separator: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
    args: {
        items: [
            { label: "Home", href: "/" },
            { label: "Category", href: "/category" },
            { label: "Product" },
        ],
    },
};

export const CustomSeparator: Story = {
    args: {
        items: [
            { label: "Dashboard", href: "/" },
            { label: "Settings", href: "/settings" },
            { label: "Profile" },
        ],
        separator: "➜",
    },
};

export const WithIcons: Story = {
    args: {
        items: [
            { label: "🏠 Home", href: "/" },
            { label: "📂 Files", href: "/files" },
            { label: "📄 Document" },
        ],
    },
};
