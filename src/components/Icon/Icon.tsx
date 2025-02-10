import React from "react";
import clsx from "clsx";
import { LucideProps, AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react";

interface IconProps extends LucideProps {
    name: "alert" | "check" | "close" | "info";
    size?: "sm" | "md" | "lg" | "xl";
    variant?: "solid" | "outline" | "subtle";
    className?: string;
}

const ICONS = {
    alert: AlertTriangle,
    check: CheckCircle,
    close: XCircle,
    info: Info,
};

const SIZE_MAP = {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
};

const VARIANT_MAP = {
    solid: "text-white bg-gray-900 p-2 rounded-full",
    outline: "text-gray-900 border border-gray-900 p-2 rounded-full",
    subtle: "text-gray-600",
};

const Icon: React.FC<IconProps> = ({ name, size = "md", variant = "subtle", className, ...props }) => {
    const LucideIcon = ICONS[name];

    return (
        <div className={clsx("inline-flex items-center justify-center", VARIANT_MAP[variant], className)}>
            <LucideIcon size={SIZE_MAP[size]} {...props} />
        </div>
    );
};

export default Icon;
