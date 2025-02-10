import React from "react";
import clsx from "clsx";

export interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, disabled, size = "md" }) => {
    return (
        <button
            type="button"
            className={clsx(
                "relative inline-flex items-center rounded-full transition-all duration-300",
                {
                    "w-10 h-5 p-0.5": size === "sm",
                    "w-12 h-6 p-0.5": size === "md",
                    "w-16 h-8 p-1": size === "lg",
                    "bg-gray-300": !checked,
                    "bg-blue-500": checked,
                    "cursor-not-allowed opacity-50": disabled,
                }
            )}
            onClick={() => !disabled && onChange(!checked)}
            disabled={disabled}
        >
            <span
                className={clsx(
                    "inline-block bg-white rounded-full shadow transition-all duration-300",
                    {
                        "w-4 h-4": size === "sm",
                        "w-5 h-5": size === "md",
                        "w-7 h-7": size === "lg",
                        "translate-x-0": !checked,
                        "translate-x-full": checked,
                    }
                )}
            />
        </button>
    );
};

export default Switch;
