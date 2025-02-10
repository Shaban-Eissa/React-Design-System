import React from "react";
import clsx from "clsx";

type AvatarSize = "small" | "medium" | "large";
type AvatarShape = "circle" | "rounded" | "square";
type Status = "online" | "offline" | "busy" | "away" | null;

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    initials?: string;
    size?: AvatarSize;
    shape?: AvatarShape;
    status?: Status;
}

const sizeClasses: Record<AvatarSize, string> = {
    small: "w-8 h-8 text-sm",
    medium: "w-12 h-12 text-base",
    large: "w-16 h-16 text-lg",
};

const shapeClasses: Record<AvatarShape, string> = {
    circle: "rounded-full",
    rounded: "rounded-lg",
    square: "rounded-none",
};

const statusClasses: Record<NonNullable<Status>, string> = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    busy: "bg-red-500",
    away: "bg-yellow-500",
};

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt,
    initials,
    size = "medium",
    shape = "circle",
    status = null,
    className,
    ...props
}) => {
    return (
        <div className={clsx("relative inline-block", sizeClasses[size], shapeClasses[shape], className)}>
            {src ? (
                <div className={clsx("w-full h-full overflow-hidden", shapeClasses[shape])}>
                    <img
                        src={src}
                        alt={alt || "Avatar"}
                        className="w-full h-full object-cover"
                        {...props}
                    />
                </div>
            ) : (
                <div
                    className={clsx(
                        "flex items-center justify-center bg-gray-300 text-white font-bold w-full h-full",
                        shapeClasses[shape]
                    )}
                    {...props}
                >
                    {initials}
                </div>
            )}

            {status && (
                <span
                    className={clsx(
                        "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white",
                        statusClasses[status]
                    )}
                ></span>
            )}
        </div>
    );
};

export default Avatar;
