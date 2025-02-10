import React from "react";
import clsx from "clsx";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "link";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: TypographyVariant;
    as?: React.ElementType;
    className?: string;
    href?: string;
}

const baseClasses: Record<TypographyVariant, string> = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-medium",
    h5: "text-lg font-medium",
    h6: "text-base font-medium",
    p: "text-base text-gray-700",
    small: "text-sm text-gray-500",
    link: "text-blue-600 hover:underline",
};

const Typography: React.FC<TypographyProps> = ({
    variant = "p",
    as,
    className,
    href,
    children,
    ...props
}) => {
    const Component: React.ElementType = as || (variant === "link" ? "a" : variant);

    return (
        <Component
            className={clsx(baseClasses[variant], className)}
            {...(href && variant === "link" ? { href } : {})}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Typography;
