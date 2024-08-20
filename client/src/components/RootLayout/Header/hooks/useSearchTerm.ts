import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function useSearchTerm() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const searchTerm = searchParams.get("searchTerm");
        setSearchTerm(searchTerm ?? "");
    }, [searchParams.toString()]);

    return { searchTerm, setSearchTerm };
}
