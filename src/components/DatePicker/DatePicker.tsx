import React, { useState } from "react";
import DatePicker from "react-datepicker";
import clsx from "clsx";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";

interface DatePickerProps {
    label?: string;
    variant?: "default" | "outlined" | "filled";
    className?: string;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({ label, variant = "default", className }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
        <div className="flex flex-col gap-2 w-full max-w-md">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            <div
                className={clsx(
                    "relative flex items-center w-full px-4 py-2 rounded-lg text-gray-800 cursor-pointer transition-all duration-300",
                    "focus-within:ring-2 focus-within:ring-blue-500",
                    {
                        "border border-gray-300 bg-white": variant === "default",
                        "border border-gray-500 bg-white": variant === "outlined",
                        "bg-blue-50 text-gray-900 border border-blue-400": variant === "filled", // Softer filled color
                    },
                    className
                )}
            >
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="w-full bg-transparent focus:outline-none"
                    placeholderText="Select a date"
                />
                <Calendar size={20} className="absolute right-4 text-gray-500 pointer-events-none" />
            </div>
        </div>
    );
};

export default CustomDatePicker;
