import React from "react";
import { Country } from "@/components/ui/PhoneInput/types/Country.ts";

interface CountryDropdownOptionsProps {
    handleClick: () => void;
    country: Country;
    isLast: boolean;
}

export default function CountryDropdownOption({
    handleClick,
    country,
    isLast,
}: CountryDropdownOptionsProps) {
    return (
        <>
            <button
                className="p-1 flex items-center cursor-pointer bg-white w-full"
                onClick={handleClick}
                data-testid="CountryDropdownOption"
            >
                <div className="hover:bg-gray-100 w-full flex justify-start px-3 py-1 rounded">
                    <span className="mr-2" data-testid="CountryDropdownOption.Flag">
                        {country.flag}
                    </span>
                    <span data-testid="CountryDropdownOption.Details" className="text-left">
                        {`${country.name} (${country.dialCode})`}
                    </span>
                </div>
            </button>
            {!isLast && <hr data-testid="CountryDropdownOption.Line" />}
        </>
    );
}
