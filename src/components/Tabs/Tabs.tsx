import React, { useState } from "react";
import clsx from "clsx";

interface Tab {
    label: string;
    content: React.ReactNode;
}

export interface TabsProps {
    tabs: Tab[];
    variant?: "default" | "underlined" | "pills" | "outlined" | "filled";
    className?: string;
}

// Extracting styles for better readability and maintainability
const tabVariants = {
    default: (isActive: boolean) =>
        clsx(
            "text-gray-700 font-semibold transition-all px-4 py-2 rounded-md",
            isActive && "bg-gray-100 "
        ),
    underlined: (isActive: boolean) =>
        clsx(
            "px-4 py-2 border-b-2 transition-all",
            isActive
                ? "border-blue-600 text-blue-700 font-bold bg-blue-100 rounded-md"
                : "border-transparent hover:border-gray-400 text-gray-600"
        ),
    pills: (isActive: boolean) =>
        clsx(
            "rounded-full px-5 py-2 transition-all",
            isActive ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
        ),
    outlined: (isActive: boolean) =>
        clsx(
            "border border-gray-300 px-4 py-2 rounded-md transition-all",
            isActive && "bg-gray-100"
        ),
    filled: (isActive: boolean) =>
        clsx(
            "px-5 py-2 rounded-md font-semibold transition-all",
            isActive ? "bg-blue-600 text-white" : "bg-gray-300 hover:bg-gray-400"
        ),
};

const Tabs: React.FC<TabsProps> = ({ tabs, variant = "default", className }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={clsx("w-full", className)}>
            {/* Tab Buttons */}
            <div className="flex space-x-2">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={tabVariants[variant](activeTab === index)}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-4 my-4 border border-gray-200 rounded-lg">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;
