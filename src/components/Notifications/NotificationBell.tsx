import React, { useState } from "react";
import clsx from "clsx";
import { Bell } from "lucide-react";

export interface NotificationBellProps {
    count?: number;
    styleVariant?: "facebook" | "twitter" | "linkedin" | "minimal";
    position?: "top-right" | "top-left";
}

const NotificationBell: React.FC<NotificationBellProps> = ({
    count = 0,
    styleVariant = "minimal",
    position = "top-right",
}) => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen(!open);

    return (
        <div className={clsx("relative inline-block", position === "top-left" ? "left-0" : "right-0")}>
            {/* Bell Icon */}
            <button
                onClick={handleToggle}
                className={clsx(
                    "relative flex items-center justify-center p-2 rounded-full transition-all",
                    {
                        "text-gray-500 hover:text-blue-600": styleVariant === "linkedin",
                        "text-blue-600 bg-gray-100 hover:bg-blue-200": styleVariant === "facebook",
                        "text-gray-700 hover:text-red-500": styleVariant === "twitter",
                        "text-gray-500 hover:text-gray-800": styleVariant === "minimal",
                    }
                )}
            >
                <Bell className="w-6 h-6" />
                {/* Notification Badge */}
                {count > 0 && (
                    <span
                        className={clsx(
                            "absolute -top-1 -right-1 flex items-center justify-center text-xs font-bold rounded-full",
                            {
                                "bg-blue-600 text-white w-5 h-5": styleVariant === "facebook",
                                "bg-red-500 text-white w-2 h-2 rounded-full": styleVariant === "twitter",
                                "bg-red-600 text-white w-4 h-4": styleVariant === "linkedin",
                                "bg-gray-800 text-white w-4 h-4": styleVariant === "minimal",
                            }
                        )}
                    >
                        {styleVariant !== "twitter" ? count : ""}
                    </span>
                )}
            </button>

            {/* Notification Dropdown (only for Facebook & LinkedIn) */}
            {(styleVariant === "facebook" || styleVariant === "linkedin" || styleVariant === "twitter" || styleVariant === "minimal") && open && (
                <div
                    className="absolute mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 p-3"
                    style={{ right: position === "top-right" ? "0" : "auto", left: position === "top-left" ? "0" : "auto" }}
                >
                    <p className="text-sm text-gray-600">{count > 0 ? "You have new notifications" : "No new notifications"}</p>
                </div>
            )}
        </div>
    );
};

export default NotificationBell;
