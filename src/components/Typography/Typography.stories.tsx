import { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
    title: "Components/Typography",
    component: Typography,
    argTypes: {
        variant: {
            control: "radio",
            options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "small", "link"],
        },
        href: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Headings: Story = {
    render: () => (
        <div>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
        </div>
    ),
};

export const Paragraph: Story = { args: { variant: "p", children: "This is a paragraph text." } };

export const SmallText: Story = { args: { variant: "small", children: "This is small text." } };

export const Link: Story = { args: { variant: "link", href: "#", children: "This is a link" } };
