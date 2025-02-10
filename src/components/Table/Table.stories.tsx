import { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
import { TableProps } from "./Table";

const meta: Meta<typeof Table> = {
    title: "Components/Table",
    component: Table,
    argTypes: {
        variant: {
            control: { type: "radio" },
            options: ["default", "striped", "bordered", "hoverable", "compact"],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Table>;

const sampleHeaders = ["Name", "Age", "Role"];
const sampleData = [
    ["Alice", 28, "Engineer"],
    ["Bob", 32, "Designer"],
    ["Charlie", 25, "Developer"],
];

const Template = (args: TableProps) => <Table {...args} />;

export const Default: Story = {
    render: Template,
    args: {
        headers: sampleHeaders,
        data: sampleData,
        variant: "default",
    },
};

export const Striped: Story = {
    render: Template,
    args: {
        headers: sampleHeaders,
        data: sampleData,
        variant: "striped",
    },
};

export const Bordered: Story = {
    render: Template,
    args: {
        headers: sampleHeaders,
        data: sampleData,
        variant: "bordered",
    },
};

export const Hoverable: Story = {
    render: Template,
    args: {
        headers: sampleHeaders,
        data: sampleData,
        variant: "hoverable",
    },
};

export const Compact: Story = {
    render: Template,
    args: {
        headers: sampleHeaders,
        data: sampleData,
        variant: "compact",
    },
};
