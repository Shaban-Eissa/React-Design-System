import React, { useEffect } from "react";
import clsx from "clsx";
import { X, CheckCircle, AlertTriangle, Info, XCircle } from "lucide-react";

interface ToastProps {
    message: string;
    status?: "default" | "success" | "error" | "warning" | "info";
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
    autoClose?: boolean;
    duration?: number;
    onClose: () => void;
}

const statusStyles = {
    default: "bg-gray-800 text-white",
    success: "bg-green-600 text-white",
    error: "bg-red-600 text-white",
    warning: "bg-yellow-500 text-white",
    info: "bg-blue-600 text-white",
};

const positionStyles = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
};

const statusIcons = {
    default: null,
    success: <CheckCircle className="w-5 h-5 text-white" />,
    error: <XCircle className="w-5 h-5 text-white" />,
    warning: <AlertTriangle className="w-5 h-5 text-white" />,
    info: <Info className="w-5 h-5 text-white" />,
};

const Toast: React.FC<ToastProps> = ({ message, status = "default", position = "top-left", autoClose = true, duration = 3000, onClose }) => {
    useEffect(() => {
        if (autoClose) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [autoClose, duration, onClose]);

    return (
        <div className={clsx("fixed z-50 flex items-center gap-3 p-4 rounded-lg shadow-lg", statusStyles[status], positionStyles[position])}>
            {statusIcons[status]}
            <span className="text-sm font-medium">{message}</span>
            <button onClick={onClose} className="ml-auto text-white hover:opacity-75">
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};

export default Toast;
