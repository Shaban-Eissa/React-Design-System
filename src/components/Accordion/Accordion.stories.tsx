import { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

const meta: Meta<typeof Accordion> = {
    title: "Components/Accordion",
    component: Accordion,
    argTypes: {
        multiple: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const SingleOpen: Story = {
    args: {
        items: [
            { title: "What is Tailwind CSS?", content: "Tailwind CSS is a utility-first CSS framework for building modern web designs." },
            { title: "Why use React?", content: "React makes it painless to create interactive UIs with a component-based approach." },
            { title: "How does Storybook help?", content: "Storybook allows you to develop and test UI components in isolation." },
        ],
        multiple: false,
    },
};

export const MultipleOpen: Story = {
    args: {
        items: [
            { title: "Accordion Item 1", content: "Here is some detailed content for item 1." },
            { title: "Accordion Item 2", content: "Another explanation for item 2." },
            { title: "Accordion Item 3", content: "Finally, the content for item 3." },
        ],
        multiple: true,
    },
};
