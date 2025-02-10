import React from "react";
import clsx from "clsx";

interface CardProps {
    title: string;
    description?: string;
    image?: string;
    actions?: React.ReactNode;
    variant?: "default" | "withImage" | "bordered" | "shadow";
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, actions, variant = "default", className }) => {
    return (
        <div
            className={clsx(
                "rounded-xl overflow-hidden bg-white transition-all duration-300 w-96",
                {
                    "shadow-lg hover:shadow-xl": variant === "shadow",
                    "border border-gray-300": variant === "bordered",
                    "p-2": variant === "shadow" || variant === "bordered",
                },
                className
            )}
        >
            {image && <img src={image} alt={title} className="w-full h-48 rounded-xl object-cover bg-center" />}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                {description && <p className="text-gray-600 mt-2">{description}</p>}
                {actions && <div className="mt-4 flex gap-2">{actions}</div>}
            </div>
        </div>
    );
};

export default Card;
