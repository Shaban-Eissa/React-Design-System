import { Meta, StoryFn } from "@storybook/react";
import Timeline from "./Timeline";
import { Calendar, CheckCircle, AlertTriangle } from "lucide-react";

export default {
    title: "Components/Timeline",
    component: Timeline,
    argTypes: {
        variant: { control: "radio", options: ["vertical", "horizontal"] },
    },
    decorators: [
        (Story) => (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <Story />
            </div>
        ),
    ],
} as Meta<typeof Timeline>;

const Template: StoryFn<typeof Timeline> = (args) => <Timeline {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
    variant: "vertical",
    items: [
        { title: "Step 1", description: "Started the process", date: "Jan 1, 2024", icon: <CheckCircle /> },
        { title: "Step 2", description: "In progress", date: "Feb 15, 2024", icon: <Calendar /> },
        { title: "Step 3", description: "Completed!", date: "Mar 10, 2024", icon: <AlertTriangle /> },
    ],
};

export const Milestone = Template.bind({});
Milestone.args = {
    variant: "vertical",
    items: [
        { title: "Joined Company", description: "Hired as a developer", date: "2021", icon: <CheckCircle /> },
        { title: "First Promotion", description: "Promoted to Senior Dev", date: "2023", icon: <Calendar /> },
        { title: "Lead Position", description: "Became Tech Lead", date: "2025", icon: <AlertTriangle /> },
    ],
};

