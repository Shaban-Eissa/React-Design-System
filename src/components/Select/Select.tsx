import React, { useState } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react"; 

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options: Option[];
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    variant?: "default" | "bordered" | "minimal";
    className?: string;
}

const Select: React.FC<SelectProps> = ({
    options,
    label,
    placeholder = "Select an option...",
    disabled = false,
    variant = "default",
    className,
}) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (value: string) => {
        setSelected(value);
        setIsOpen(false);
    };

    return (
        <div className={clsx("relative w-full max-w-xs", className)}>
            {label && <label className="block text-gray-700 mb-1">{label}</label>}

            <div
                className={clsx(
                    "flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all",
                    "bg-white border border-gray-300",
                    isOpen && "ring-2 ring-blue-400",
                    disabled && "opacity-50 cursor-not-allowed",
                    variant === "bordered" && "border border-gray-500",
                    variant === "minimal" && "border-none shadow-sm",
                )}
                onClick={() => !disabled && setIsOpen(!isOpen)}
            >
                <span className={selected ? "text-gray-900" : "text-gray-400"}>
                    {selected ? options.find((opt) => opt.value === selected)?.label : placeholder}
                </span>
                <ChevronDown size={18} className="text-gray-600" />
            </div>

            {isOpen && (
                <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer transition"
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
