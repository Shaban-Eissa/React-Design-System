import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal from "./Modal";
import Button from "../Button/Button";

export default {
    title: "Components/Modal",
    component: Modal,
    argTypes: {
        size: { control: "select", options: ["sm", "md", "lg"] },
        variant: { control: "select", options: ["default", "centered", "fullscreen", "bordered", "shdaow"] },
        hideCloseButton: { control: "boolean" },
    },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    title: "Default Modal",
    children: <p>This is a default modal.</p>,
    size: "md",
    variant: "default",
};

export const Centered = Template.bind({});
Centered.args = {
    title: "Centered Modal",
    children: <p>This modal is centered.</p>,
    size: "md",
    variant: "centered",
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
    title: "Fullscreen Modal",
    children: <p>This modal takes up the full screen.</p>,
    size: "lg",
    variant: "fullscreen",
};

export const Shadow = Template.bind({});
Shadow.args = {
    title: "Elevated Modal",
    children: <p>This modal has a strong shadow.</p>,
    size: "lg",
    variant: "shadow",
};
