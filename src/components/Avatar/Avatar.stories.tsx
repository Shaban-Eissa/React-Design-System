import { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
    title: "Components/Avatar",
    component: Avatar,
    argTypes: {
        size: { control: "radio", options: ["small", "medium", "large"] },
        shape: { control: "radio", options: ["circle", "rounded", "square"] },
        status: { control: "radio", options: [null, "online", "offline", "busy", "away"] },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const InitialsAvatar: Story = {
    args: {
        initials: "JD",
        size: "medium",
        shape: "circle",
    },
};

export const StatusOnline: Story = {
    args: {
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
        size: "medium",
        shape: "circle",
        status: "online",
    },
};

export const StatusOffline: Story = {
    args: {
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
        size: "medium",
        shape: "circle",
        status: "offline",
    },
};

export const StatusBusy: Story = {
    args: {
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
        size: "medium",
        shape: "circle",
        status: "busy",
    },
};

export const StatusAway: Story = {
    args: {
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
        size: "medium",
        shape: "circle",
        status: "away",
    },
};
