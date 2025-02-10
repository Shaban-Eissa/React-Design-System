import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
    title: "Components/Pagination",
    component: Pagination,
    args: {
        totalPages: 10,
        currentPage: 1,
        variant: "default",
    },
    argTypes: {
        variant: {
            options: ["default", "outlined", "compact"],
            control: { type: "radio" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const PaginationWrapper: React.FC<{ totalPages: number; variant?: string }> = ({
    totalPages,
    variant,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            variant={variant as "default" | "outlined" | "compact"}
        />
    );
};


export const Default: Story = {
    render: (args) => <PaginationWrapper {...args} />,
};

export const Outlined: Story = {
    render: (args) => <PaginationWrapper {...args} variant="outlined" />,
};
