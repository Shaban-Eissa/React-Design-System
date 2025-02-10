import { Meta, StoryFn } from "@storybook/react";
import Input from "./Input";
import { Search } from "lucide-react";

export default {
    title: "Components/Input",
    component: Input,
    argTypes: {
        type: { control: "select", options: ["text", "password", "email", "number"] },
        inputSize: { control: "select", options: ["sm", "md", "lg"] }, // Updated from `size` to `inputSize`
        variant: { control: "select", options: ["default", "outline", "filled"] },
    },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Username",
    type: "text",
    inputSize: "md",
    variant: "default",
    placeholder: "Enter your username",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: "Search",
    type: "text",
    inputSize: "md",
    variant: "outline",
    placeholder: "Search here...",
    icon: Search,
};

export const Password = Template.bind({});
Password.args = {
    label: "Password",
    type: "password",
    inputSize: "md",
    variant: "default",
    placeholder: "Enter your password",
};

export const ErrorState = Template.bind({});
ErrorState.args = {
    label: "Email",
    type: "email",
    inputSize: "md",
    variant: "filled",
    placeholder: "Enter your email",
    error: "Invalid email address",
};

export const LargeFilled = Template.bind({});
LargeFilled.args = {
    label: "Full Name",
    type: "text",
    inputSize: "lg",
    variant: "filled",
    placeholder: "Enter your full name",
};
