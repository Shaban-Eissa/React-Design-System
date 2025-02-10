import React from "react";
import clsx from "clsx";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    title?: string;
    children: React.ReactNode;
    onClose: () => void;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "centered" | "fullscreen" | "bordered" | "shadow";
    hideCloseButton?: boolean;
    footer?: React.ReactNode;
}

const SIZE_MAP = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
};

const VARIANT_MAP = {
    default: "bg-white shadow-lg",
    centered: "bg-white shadow-lg mx-auto my-auto",
    fullscreen: "bg-white w-full h-full rounded-lg",
    bordered: "border border-gray-300 shadow-md",
    shadow: "bg-white shadow-2xl",
};

const Modal: React.FC<ModalProps> = ({
    isOpen,
    title,
    children,
    onClose,
    size = "md",
    variant = "default",
    hideCloseButton = false,
    footer,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div
                className={clsx(
                    "relative w-full rounded-lg overflow-hidden transition-all duration-300",
                    SIZE_MAP[size],
                    VARIANT_MAP[variant]
                )}
            >
                <div className="p-4 border-b flex justify-between items-center">
                    {title && <h3 className="text-lg font-semibold">{title}</h3>}
                    {!hideCloseButton && (
                        <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
                            <X size={20} />
                        </button>
                    )}
                </div>

                <div className="p-4">{children}</div>

                {footer && <div className="p-4 border-t">{footer}</div>}
            </div>
        </div>
    );
};

export default Modal;
