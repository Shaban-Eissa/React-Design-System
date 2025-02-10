import React from "react";
import clsx from "clsx";
import { X } from "lucide-react";

interface ChipProps {
    label: string;
    variant?: "default" | "outlined" | "filled";
    icon?: React.ReactNode;
    onClose?: () => void;
    className?: string;
}

const Chip: React.FC<ChipProps> = ({ label, variant = "default", icon, onClose, className }) => {
    return (
        <div
            className={clsx(
                "inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full transition-all",
                {
                    "bg-gray-200 text-gray-800": variant === "default",
                    "border border-gray-400 text-gray-800": variant === "outlined",
                    "bg-blue-600 text-white": variant === "filled",
                },
                className
            )}
        >
            {icon && <span className="text-lg">{icon}</span>}
            <span>{label}</span>
            {onClose && (
                <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                    <X size={14} />
                </button>
            )}
        </div>
    );
};

export default Chip;
