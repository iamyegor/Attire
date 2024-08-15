import { useState } from "react";
import CountriesSearchBar from "@/components/ui/PhoneInput/components/CountriesSearchBar.tsx";
import CountriesComponent from "@/components/ui/PhoneInput/components/CountriesComponent.tsx";
import useSearchCountries from "@/components/ui/PhoneInput/hooks/useSearchCountries.ts";
import { countries } from "@/components/ui/PhoneInput/constants/countries.ts";
import { Country } from "@/components/ui/PhoneInput/types/Country.ts";

interface CountriesDropdownProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    // setCountry: (country: Country) => void;
}

export default function CountriesDropdown({
    isOpen,
    setIsOpen,
    // setCountry,
}: CountriesDropdownProps) {
    const [search, setSearch] = useState("");
    const [displayedCountries, setDisplayedCountries] = useState(countries);

    useSearchCountries(search, countries, setDisplayedCountries);

    const handleSelect = (country: Country) => {
        // setCountry(country);
        setIsOpen(false);
    };

    return (
        isOpen && (
            <div
                className="absolute top-full mt-1 z-50 space-y-0.5"
                data-testid="CountriesDropdown"
            >
                <CountriesSearchBar search={search} setSearch={setSearch} />
                <CountriesComponent countries={displayedCountries} handleClick={handleSelect} />
            </div>
        )
    );
}
