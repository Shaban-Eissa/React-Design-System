import React, { useState } from "react";
import clsx from "clsx";
import { Upload, X } from "lucide-react";

interface FileUploadProps {
    label?: string;
    variant?: "default" | "dragAndDrop" | "withPreview";
    disabled?: boolean;
    className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, variant = "default", disabled = false, className }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [dragActive, setDragActive] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragActive(false);
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            setSelectedFile(event.dataTransfer.files[0]);
        }
    };

    return (
        <div className="flex flex-col gap-3 w-full max-w-md">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}

            <div
                className={clsx(
                    "relative flex flex-col items-center justify-center w-full p-6 rounded-xl border transition-all duration-300 cursor-pointer",
                    {
                        "border-gray-300 bg-white hover:bg-gray-50": variant === "default",
                        "border-blue-400 bg-blue-50 hover:bg-blue-100": variant === "dragAndDrop",
                        "border-gray-500 bg-gray-50 hover:bg-gray-100": variant === "withPreview",
                        "opacity-50 cursor-not-allowed": disabled,
                        "ring-2 ring-blue-400": dragActive,
                    },
                    className
                )}
                onDragOver={(e) => {
                    e.preventDefault();
                    setDragActive(true);
                }}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    className="hidden"
                    id="fileUpload"
                    onChange={handleFileChange}
                    disabled={disabled}
                />

                <Upload size={36} className="text-blue-500 transition-transform duration-200 hover:scale-110" />
                <p className="text-gray-700 mt-2 font-medium">
                    {selectedFile ? selectedFile.name : "Drag & drop or click to upload"}
                </p>
                <p className="text-xs text-gray-500">Supported formats: PNG, JPG, PDF</p>

                {/* Custom Upload Button */}
                <label
                    htmlFor="fileUpload"
                    className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md transition hover:bg-blue-700 active:bg-blue-800 cursor-pointer"
                >
                    Choose File
                </label>
            </div>

            {variant === "withPreview" && selectedFile && (
                <div className="relative mt-2 p-4 border rounded-xl flex items-center justify-between bg-gray-100 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
                            {selectedFile.type.split("/")[1]?.toUpperCase() || "FILE"}
                        </div>
                        <p className="text-sm text-gray-800 font-medium">{selectedFile.name}</p>
                    </div>
                    <button
                        className="text-red-500 hover:text-red-700 transition-all"
                        onClick={() => setSelectedFile(null)}
                        aria-label="Remove file"
                    >
                        <X size={18} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
