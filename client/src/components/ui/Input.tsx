import { EmptyResult } from "@/types/results/EmptyResult";
import { useState } from "react";

interface InputProps {
    value: string | number | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    validate?: (e: React.ChangeEvent<HTMLInputElement>) => EmptyResult;
}

function Input({ value, onChange, placeholder = "", className = "", validate }: InputProps) {
    const [errorMessage, setErrorMessage] = useState<string>("");

    return (
        <div className={className}>
            <input
                className="border-[#ccc] border-2 outline-none px-[8px] py-[10px] w-full rounded-[10px] text-[16px] "
                type="text"
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
            <div className="error-message">{errorMessage}</div>
        </div>
    );
}

export default Input;
