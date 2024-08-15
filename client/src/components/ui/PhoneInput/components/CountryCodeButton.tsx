import React, { useRef } from "react";
import DownArrowSvg from "@/assets/down-arrow.svg?react";
import { Country } from "@/components/ui/PhoneInput/types/Country.ts";

interface CountriesDropdown {
    country: Country;
    setIsOpen: (newValue: (prev: boolean) => boolean) => void;
    disabled: boolean;
}

export default function CountryCodeButton({ country, setIsOpen, disabled }: CountriesDropdown) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={wrapperRef} className="relative select-none">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                data-testid="CountryCodeButton.Button"
                className={`flex items-center justify-center bg-neutral-100
                rounded-md h-8 mx-1.5 px-3 space-x-2 ${disabled ? "cursor-default" : "cursor-pointer"}`}
                type="button"
                disabled={disabled}
            >
                <span className="flex items-center space-x-1">
                    <span data-testid="CountryCodeButton.Flag">{country.flag}</span>
                    <span data-testid="CountryCodeButton.DialCode">{country.dialCode}</span>
                </span>
                {!disabled && <DownArrowSvg className="w-4 h-4" />}
            </button>
        </div>
    );
}
