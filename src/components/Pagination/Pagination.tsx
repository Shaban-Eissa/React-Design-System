import React from "react";
import clsx from "clsx";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    variant?: "default" | "outlined" | "compact";
}

const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    currentPage,
    onPageChange,
    variant = "default",
}) => {
    return (
        <div
            className={clsx(
                "flex items-center justify-center mt-4",
                variant === "compact" ? "gap-1 text-sm" : "gap-2"
            )}
        >
            <button
                className={clsx(
                    "px-3 py-1 rounded transition-all",
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200",
                    variant === "outlined" && "border border-gray-300 bg-white",
                    variant === "compact" && "px-2 py-0.5 text-xs"
                )}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Prev
            </button>

            {[...Array(totalPages)].map((_, index) => {
                const isActive = currentPage === index + 1;
                return (
                    <button
                        key={index}
                        className={clsx(
                            "px-3 py-1 rounded transition-all",
                            isActive
                                ? "bg-blue-500 text-white font-bold"
                                : "hover:bg-gray-200 text-gray-700",
                            variant === "outlined" &&
                            (isActive
                                ? "border border-blue-500 bg-blue-100 text-blue-700"
                                : "border border-gray-300 bg-white"),
                            variant === "compact" && "px-2 py-0.5 text-xs"
                        )}
                        onClick={() => onPageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                );
            })}

            <button
                className={clsx(
                    "px-3 py-1 rounded transition-all",
                    currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200",
                    variant === "outlined" && "border border-gray-300 bg-white",
                    variant === "compact" && "px-2 py-0.5 text-xs"
                )}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
