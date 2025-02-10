import React from "react";
import clsx from "clsx";

interface TimelineItem {
    title: string;
    description: string;
    date?: string;
    icon?: React.ReactNode;
}

interface TimelineProps {
    items: TimelineItem[];
    variant?: "vertical" | "horizontal";
}

const Timeline: React.FC<TimelineProps> = ({ items, variant = "vertical" }) => {
    return (
        <div className={clsx(
            "flex",
            variant === "vertical" ? "flex-col space-y-6" : "flex-row space-x-6 items-center"
        )}>
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    {/* Icon or Step */}
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg">
                        {item.icon || index + 1}
                        {index < items.length - 1 && (
                            <div className={clsx(
                                "absolute bg-gray-300",
                                variant === "vertical" ? "w-1 h-12 left-1/2 top-full" : "h-1 w-16 top-1/2 left-full"
                            )} />
                        )}
                    </div>
                    
                    {/* Content */}
                    <div className={clsx(
                        "ml-4",
                        variant === "horizontal" ? "text-center" : ""
                    )}>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        {item.date && <p className="text-sm text-gray-500">{item.date}</p>}
                        <p className="text-sm text-gray-700">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
