import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Icon from "./Icon";

export default {
    title: "Components/Icon",
    component: Icon,
    argTypes: {
        name: {
            control: "select",
            options: ["alert", "check", "close", "info"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg", "xl"],
        },
        variant: {
            control: "select",
            options: ["solid", "outline", "subtle"],
        },
    },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "info",
    size: "md",
    variant: "subtle",
};

export const LargeSolidCheck = Template.bind({});
LargeSolidCheck.args = {
    name: "check",
    size: "lg",
    variant: "solid",
};

export const SmallOutlineAlert = Template.bind({});
SmallOutlineAlert.args = {
    name: "alert",
    size: "sm",
    variant: "outline",
};

export const CloseIcon = Template.bind({});
CloseIcon.args = {
    name: "close",
    size: "md",
    variant: "subtle",
};
