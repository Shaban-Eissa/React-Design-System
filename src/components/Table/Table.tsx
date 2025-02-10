import React from "react";
import clsx from "clsx";

export interface TableProps {
    headers: string[];
    data: (string | number)[][];
    variant?: "default" | "striped" | "bordered" | "hoverable" | "compact";
    className?: string;
}

const Table: React.FC<TableProps> = ({ headers, data, variant = "default", className }) => {
    return (
        <div className="overflow-x-auto">
            <table
                className={clsx(
                    "w-full text-left border-collapse rounded-lg overflow-hidden",
                    {
                        "border border-gray-300": variant === "bordered",
                        "divide-y divide-gray-200": variant === "striped",
                        "hover:table-hover": variant === "hoverable",
                        "text-sm": variant === "compact",
                    },
                    className
                )}
            >
                {/* Table Head */}
                <thead className="bg-gray-100">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-4 py-2 font-semibold text-gray-700">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={clsx({
                                "odd:bg-gray-50 even:bg-white": variant === "striped",
                                "hover:bg-gray-100 transition": variant === "hoverable",
                            })}
                        >
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-4 py-2 border-b border-gray-200">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
