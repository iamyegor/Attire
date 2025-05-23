import { useState } from "react";
import OpenedEyeSvg from "@/assets/opened-eye.svg?react";
import ClosedEyeSvg from "@/assets/closed-eye.svg?react";
import usePasswordInputTranslation from "./hooks/usePasswordInputTranslation";

interface PasswordInputProps {
    id: string;
    placeholder?: string | null;
}

export default function AuthPasswordInput({ id, placeholder = null }: PasswordInputProps) {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const t = usePasswordInputTranslation();

    const togglePasswordVisibility = () => {
        setIsPasswordShown(!isPasswordShown);
    };

    return (
        <div>
            <div className="relative">
                <input
                    id={id}
                    name={id}
                    type={isPasswordShown ? "text" : "password"}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder={placeholder || t.placeholder}
                    required
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-4 text-sm h-full"
                >
                    {isPasswordShown ? (
                        <OpenedEyeSvg className="w-5 h-5" />
                    ) : (
                        <ClosedEyeSvg className="w-5 h-5" />
                    )}
                </button>
            </div>
        </div>
    );
}
