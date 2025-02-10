import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger" | "success";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    isLoading = false,
    fullWidth = false,
    className,
    ...props
}) => {
    const baseClasses = "flex items-center justify-center font-medium rounded-lg transition duration-200";
    const variantClasses = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
        danger: "bg-red-600 text-white hover:bg-red-700",
        success: "bg-green-600 text-white hover:bg-green-700",
    };
    const sizeClasses = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
    };

    return (
        <button
            className={clsx(
                baseClasses,
                variantClasses[variant],
                sizeClasses[size],
                fullWidth && "w-full",
                isLoading && "opacity-50 cursor-not-allowed",
                className
            )}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? "Loading..." : children}
        </button>
    );
};

export default Button;
