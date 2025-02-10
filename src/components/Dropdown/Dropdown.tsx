import React, { useState } from "react";
import clsx from "clsx";
import { ChevronDown, Check } from "lucide-react";

interface DropdownProps {
    label?: string;
    options: { label: string; value: string }[];
    variant?: "default" | "outlined" | "filled" | "withIcon" | "multiple";
    disabled?: boolean;
    className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
    label,
    options,
    variant = "default",
    disabled = false,
    className
}) => {
    const [selected, setSelected] = useState<string | string[]>("");

    const handleSelect = (value: string) => {
        if (variant === "multiple") {
            setSelected((prev) => {
                if (Array.isArray(prev)) {
                    return prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value];
                }
                return [value];
            });
        } else {
            setSelected(value);
        }
    };

    return (
        <div className="flex flex-col gap-2 w-full max-w-md">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            <div
                className={clsx(
                    "relative flex items-center w-full px-4 py-2 rounded-lg cursor-pointer transition-all duration-300",
                    "focus-within:ring-2 focus-within:ring-blue-500",
                    {
                        "border border-gray-300 bg-white": variant === "default",
                        "border border-gray-500 bg-white": variant === "outlined",
                        "bg-blue-50 text-gray-900 border border-blue-400": variant === "filled",
                        "opacity-50 cursor-not-allowed": disabled,
                    },
                    className
                )}
            >
                <div className="flex w-full items-center justify-between">
                    <span className="text-gray-800">
                        {Array.isArray(selected)
                            ? selected.map((val) => options.find((opt) => opt.value === val)?.label).join(", ")
                            : options.find((opt) => opt.value === selected)?.label || "Select an option"}
                    </span>
                    <ChevronDown size={18} className="text-gray-500" />
                </div>

                <div className="absolute left-0 top-full w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 overflow-hidden z-10">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={clsx(
                                "px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center justify-between",
                                {
                                    "bg-blue-100": Array.isArray(selected)
                                        ? selected.includes(option.value)
                                        : selected === option.value,
                                }
                            )}
                            onClick={() => !disabled && handleSelect(option.value)}
                        >
                            {option.label}
                            {Array.isArray(selected) && selected.includes(option.value) && <Check size={16} />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
