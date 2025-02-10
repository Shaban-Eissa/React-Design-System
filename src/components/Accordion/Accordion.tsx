import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

interface AccordionItem {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
    multiple?: boolean;
    className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, multiple = false, className }) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenIndexes((prev) => {
            if (multiple) {
                return prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index];
            } else {
                return prev.includes(index) ? [] : [index];
            }
        });
    };

    return (
        <div className={clsx("space-y-2", className)}>
            {items.map((item, index) => {
                const isOpen = openIndexes.includes(index);
                return (
                    <div key={index} className="border border-gray-300 rounded-lg shadow-sm">
                        <button
                            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-100 text-lg font-medium transition-all duration-200 rounded-lg"
                            onClick={() => toggleItem(index)}
                        >
                            <span className="text-gray-800">{item.title}</span>
                            {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-gray-600" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-600" />
                            )}
                        </button>
                        <div
                            className={clsx(
                                "overflow-hidden transition-all duration-300 ease-in-out",
                                isOpen ? "max-h-screen p-4 bg-gray-50 text-gray-700" : "max-h-0 p-0"
                            )}
                        >
                            {item.content}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;
