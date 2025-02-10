import React, { useState } from "react";
import clsx from "clsx";

type AlertVariant = "success" | "error" | "warning" | "info";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
    dismissible?: boolean;
}

const variantClasses: Record<AlertVariant, string> = {
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
};

const Alert: React.FC<AlertProps> = ({
    variant = "info",
    dismissible = false,
    className,
    children,
    ...props
}) => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div
            className={clsx(
                "p-4 border rounded-md flex justify-between items-start space-x-4",
                variantClasses[variant],
                className
            )}
            {...props}
        >
            <div>{children}</div>
            {dismissible && (
                <button
                    className="text-xl font-bold text-gray-600 hover:text-gray-800"
                    onClick={() => setVisible(false)}
                >
                    &times;
                </button>
            )}
        </div>
    );
};

export default Alert;
