import CountryDropdownOption from "@/components/ui/PhoneInput/components/CountryDropdownOption";
import { Country } from "@/components/ui/PhoneInput/types/Country";

interface CountriesProps {
    countries: Country[];
    handleClick: (country: Country) => void;
}

export default function CountriesComponent({ countries, handleClick }: CountriesProps) {
    return (
        <div
            className="dropdown-scrollbar h-48 border border-gray-300 rounded-md 
                    overflow-auto bg-white"
        >
            {countries.map((country, index) => (
                <div key={index}>
                    <CountryDropdownOption
                        handleClick={() => handleClick(country)}
                        country={country}
                        isLast={index === countries.length - 1}
                    />
                </div>
            ))}
        </div>
    );
}
