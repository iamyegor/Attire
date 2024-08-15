import React, { useEffect, useRef, useState } from "react";
import useCloseOnOutsideClick from "@/components/ui/PhoneInput/hooks/useCloseOnOutsideClick.ts";
import { formatPhoneNumber } from "@/components/ui/PhoneInput/utils/formatPhoneNumber.ts";
import CountryCodeButton from "@/components/ui/PhoneInput/components/CountryCodeButton.tsx";
import CountriesDropdown from "@/components/ui/PhoneInput/components/CountriesDropdown.tsx";
import { getPlaceholderBasedOnMaxDigits } from "@/components/ui/PhoneInput/utils/getPlaceholderBasedOnMaxDigits.ts";
import { Country } from "@/components/ui/PhoneInput/types/Country.ts";
import { countries } from "@/components/ui/PhoneInput/constants/countries.ts";

interface PhoneInputProps {
    country: Country;
    phoneNumber: string;
    setPhoneNumber: (value: string) => void;
}

export default function PhoneInput({ country, phoneNumber, setPhoneNumber }: PhoneInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const countriesDropdownRef = useRef<HTMLDivElement>(null);

    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        setPhoneNumber(formatPhoneNumber(country, phoneNumber));
    }, [phoneNumber]);

    useCloseOnOutsideClick(countriesDropdownRef.current, setIsDropdownOpen);

    function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
        const phoneNumber = formatPhoneNumber(country, event.target.value);

        setPhoneNumber(phoneNumber);

        setErrorMessage("");

        if (phoneNumber.length === 0) {
            setErrorMessage("Вы не заполнили номер телефона.");
        } else if (phoneNumber.length !== 14) {
            setErrorMessage("Вы некорректно заполнили номер телефона.");
        }
    }

    function handleFocus() {
        setIsFocused(true);
    }

    function handleBlur() {
        setIsFocused(false);
    }

    return (
        <div>
            <div
                className={
                    "flex items-center border-2 border-[#ccc]  rounded-[10px] h-12 bg-white transition z-20 relative outline-none"
                }
                // ${isFocused ? "ring-2 ring-blue-500" : ""}
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                <div ref={countriesDropdownRef}>
                    <CountryCodeButton
                        country={country}
                        setIsOpen={setIsDropdownOpen}
                        disabled={countries.length == 1}
                    />
                    <CountriesDropdown
                        isOpen={isDropdownOpen}
                        setIsOpen={setIsDropdownOpen}
                        // setCountry={setCountry}
                    />
                </div>
                <input
                    type="text"
                    className="pl-3 text-[16px] border-none focus:ring-0 focus:border-none w-full h-full 
                outline-none rounded-md"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder={getPlaceholderBasedOnMaxDigits(country.maxDigits)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-testid="PhoneInput.Input"
                />
            </div>

            <div className="error-message">{errorMessage}</div>
        </div>
    );
}
