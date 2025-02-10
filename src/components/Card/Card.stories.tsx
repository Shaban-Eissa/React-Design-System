import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { Button } from '../Button'

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    argTypes: {
        variant: { control: "radio", options: ["default", "withImage", "bordered", "shadow"] },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        title: "Default Card",
        description: "This is a simple card with a title and description.",
    },
};

export const WithImage: Story = {
    args: {
        title: "Beautiful Landscape",
        description: "A stunning view of nature captured in this card.",
        image: "https://e0.pxfuel.com/wallpapers/80/871/desktop-wallpaper-computer-nature-high-quality-resolution-with-spring.jpg",
        variant: "withImage",
        actions: (
            <>
                <Button variant="primary">Action 1</Button>
                <Button variant="secondary">Action 2</Button>
            </>
        ),
    },
};

export const Bordered: Story = {
    args: {
        title: "Bordered Card",
        description: "A card with a bordered style.",
        image: "https://e0.pxfuel.com/wallpapers/80/871/desktop-wallpaper-computer-nature-high-quality-resolution-with-spring.jpg",
        variant: "bordered",
        actions: (
            <>
                <Button variant="primary">Action 1</Button>
                <Button variant="secondary">Action 2</Button>
            </>
        ),
    },
};

export const Shadow: Story = {
    args: {
        title: "Shadow Card",
        description: "This card has a shadow and smooth hover effect.",
        image: "https://e0.pxfuel.com/wallpapers/80/871/desktop-wallpaper-computer-nature-high-quality-resolution-with-spring.jpg",
        variant: "shadow",
        actions: (
            <>
                <Button variant="primary">Action 1</Button>
                <Button variant="secondary">Action 2</Button>
            </>
        ),
    },
};

export const WithActions: Story = {
    args: {
        title: "Card with Actions",
        description: "You can add buttons or any actions below the content.",
        actions: (
            <>
                <Button variant="primary">Action 1</Button>
                <Button variant="secondary">Action 2</Button>
            </>
        ),
    },
};
