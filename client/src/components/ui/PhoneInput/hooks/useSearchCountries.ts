import { useEffect } from "react";
import { Country } from "@/components/ui/PhoneInput/types/Country.ts";

export default function useSearchCountries(
    search: string,
    countries: Country[],
    setCountries: (countries: Country[]) => void,
) {
    useEffect(() => {
        setCountries(countries.filter((c) => c.name.toLowerCase().includes(search.toLowerCase())));
    }, [search]);
}
