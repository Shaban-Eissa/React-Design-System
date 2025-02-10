import React from "react";
import clsx from "clsx";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: string;
    className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator = "/", className }) => {
    return (
        <nav className={clsx("flex items-center text-gray-600 text-sm", className)} aria-label="Breadcrumb">
            {items.map((item, index) => (
                <span key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2">{separator}</span>}
                    {item.href ? (
                        <a href={item.href} className="text-blue-600 hover:underline">
                            {item.label}
                        </a>
                    ) : (
                        <span className="text-gray-500">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumb;
