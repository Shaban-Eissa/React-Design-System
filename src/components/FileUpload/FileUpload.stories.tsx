import { Meta, StoryObj } from "@storybook/react";
import FileUpload from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
    title: "Components/FileUpload",
    component: FileUpload,
    argTypes: {
        variant: { control: "radio", options: ["default", "dragAndDrop", "withPreview"] },
        disabled: { control: "boolean" },
        label: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
    args: {
        label: "Upload a file",
        variant: "default",
    },
};

export const DragAndDrop: Story = {
    args: {
        label: "Drag & Drop Upload",
        variant: "dragAndDrop",
    },
};

export const WithPreview: Story = {
    args: {
        label: "Upload with Preview",
        variant: "withPreview",
    },
};

export const Disabled: Story = {
    args: {
        label: "Disabled Upload",
        variant: "default",
        disabled: true,
    },
};
