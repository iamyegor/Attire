import { EmptyResult } from "@/types/results/EmptyResult";
import { useState } from "react";
import PasswordIsHidden from "@/assets/PasswordInput/hide.png";
import PasswordIsShown from "@/assets/PasswordInput/show.png";

interface PasswordInputProps {
    value: string | number | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    validate?: (e: React.ChangeEvent<HTMLInputElement>) => EmptyResult;
}

function PasswordInput({
    value,
    onChange,
    placeholder = "",
    className = "",
    validate,
}: PasswordInputProps) {
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isHidden, setIsHidden] = useState<boolean>(true);

    return (
        <div className={className}>
            <div className="relative">
                <input
                    className="border-[#ccc] border-2 outline-none px-[8px] py-[10px] w-full rounded-[10px] text-[16px] "
                    type={isHidden ? "password" : "text"}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => {
                        const result: EmptyResult | undefined = validate?.(e);

                        if (result && result.isFailure) {
                            setErrorMessage(result.errorMessage ?? "");
                        } else {
                            setErrorMessage("");
                        }

                        onChange(e);
                    }}
                />
                <button
                    className="w-[20px] h-[20px] absolute right-[8px] top-[50%] -translate-y-1/2"
                    onClick={() => setIsHidden(!isHidden)}
                >
                    <img
                        className="w-full"
                        src={isHidden ? PasswordIsHidden : PasswordIsShown}
                        alt={isHidden ? "скрыто" : "показано"}
                    />
                </button>
            </div>

            <div className="error-message">{errorMessage}</div>
        </div>
    );
}

export default PasswordInput;
