import { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";
import { TabsProps } from "./Tabs";

const meta: Meta<typeof Tabs> = {
    title: "Components/Tabs",
    component: Tabs,
    argTypes: {
        variant: {
            control: { type: "radio" },
            options: ["default", "underlined", "pills", "outlined", "filled"],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const sampleTabs = [
    { label: "Tab 1", content: <p>Content for Tab 1</p> },
    { label: "Tab 2", content: <p>Content for Tab 2</p> },
    { label: "Tab 3", content: <p>Content for Tab 3</p> },
];

const Template = (args: TabsProps) => <Tabs {...args} />;

export const Default: Story = {
    render: Template,
    args: {
        tabs: sampleTabs,
        variant: "default",
    },
};

export const Underlined: Story = {
    render: Template,
    args: {
        tabs: sampleTabs,
        variant: "underlined",
    },
};

export const Pills: Story = {
    render: Template,
    args: {
        tabs: sampleTabs,
        variant: "pills",
    },
};

export const Outlined: Story = {
    render: Template,
    args: {
        tabs: sampleTabs,
        variant: "outlined",
    },
};

export const Filled: Story = {
    render: Template,
    args: {
        tabs: sampleTabs,
        variant: "filled",
    },
};
