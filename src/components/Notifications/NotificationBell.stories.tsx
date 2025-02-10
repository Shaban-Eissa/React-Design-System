import { Meta, StoryFn } from "@storybook/react";
import NotificationBell, { NotificationBellProps } from "./NotificationBell";
import { within, userEvent } from "@storybook/testing-library";

export default {
    title: "Components/NotificationBell",
    component: NotificationBell,
    argTypes: {
        count: { control: "number" },
        styleVariant: { control: "select", options: ["facebook", "twitter", "linkedin", "minimal"] },
        position: { control: "select", options: ["top-right", "top-left"] },
    },
    decorators: [
        (Story) => (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <Story />
            </div>
        ),
    ],
} as Meta<typeof NotificationBell>;

const Template: StoryFn<NotificationBellProps> = (args) => <NotificationBell {...args} />;

export const FacebookStyle = Template.bind({});
FacebookStyle.args = {
    count: 10,
    styleVariant: "facebook",
};

export const TwitterStyle = Template.bind({});
TwitterStyle.args = {
    count: 1,
    styleVariant: "twitter",
};

export const LinkedInStyle = Template.bind({});
LinkedInStyle.args = {
    count: 5,
    styleVariant: "linkedin",
};

export const MinimalStyle = Template.bind({});
MinimalStyle.args = {
    count: 3,
    styleVariant: "minimal",
};

export const Clickable = Template.bind({});
Clickable.args = {
    count: 8,
    styleVariant: "facebook",
};
Clickable.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const bellButton = await canvas.getByRole("button");
    await userEvent.click(bellButton);
};
