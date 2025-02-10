import React from "react";
import clsx from "clsx";

const badgeVariants = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    info: "bg-indigo-100 text-indigo-800",
};

const badgeSizes = {
    small: "text-xs px-2 py-0.5",
    medium: "text-sm px-3 py-1",
    large: "text-base px-4 py-1.5",
};

const badgeShapes = {
    rounded: "rounded-md",
    pill: "rounded-full",
    square: "rounded-none",
};

interface BadgeProps {
    variant?: keyof typeof badgeVariants;
    size?: keyof typeof badgeSizes;
    shape?: keyof typeof badgeShapes;
    children: React.ReactNode;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({
    variant = "primary",
    size = "medium",
    shape = "rounded",
    children,
    className,
}) => {
    return (
        <span className={clsx("inline-flex items-center font-medium", badgeVariants[variant], badgeSizes[size], badgeShapes[shape], className)}>
            {children}
        </span>
    );
};

export default Badge;
