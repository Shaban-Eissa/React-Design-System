import React from "react";
import clsx from "clsx";
import { LucideIcon, Eye, EyeOff, AlertCircle } from "lucide-react";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    icon?: LucideIcon;
    type?: "text" | "password" | "email" | "number";
    inputSize?: "sm" | "md" | "lg"; // Renamed from `size` to `inputSize`
    variant?: "default" | "outline" | "filled";
    error?: string;
}

const SIZE_MAP = {
    sm: "text-sm py-1 px-2 h-8",
    md: "text-base py-2 px-3 h-10",
    lg: "text-lg py-3 px-4 h-12",
};

const VARIANT_MAP = {
    default: "border border-gray-300 focus:ring-2 focus:ring-gray-400",
    outline: "border border-gray-400 focus:ring-2 focus:ring-gray-500",
    filled: "bg-gray-100 border border-gray-200 focus:ring-2 focus:ring-gray-500",
};

const Input: React.FC<InputProps> = ({ label, icon: Icon, type = "text", inputSize = "md", variant = "default", error, className, ...props }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div className="w-96">
            {label && <label className="block text-gray-700 font-medium mb-1">{label}</label>}
            <div className="relative">
                {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />}
                <input
                    type={type === "password" && showPassword ? "text" : type}
                    className={clsx(
                        "w-full rounded-md focus:outline-none transition-all duration-200",
                        SIZE_MAP[inputSize],
                        VARIANT_MAP[variant],
                        {
                            "pl-10": Icon,
                            "pr-10": type === "password",
                            "border-red-500 focus:ring-red-500": error,
                        },
                        className
                    )}
                    {...props}
                />
                {type === "password" && (
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                )}
            </div>
            {error && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={16} /> {error}
                </p>
            )}
        </div>
    );
};

export default Input;
