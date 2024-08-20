import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function useValidatedSearchTerm() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState<string | null>(null);

    useEffect(() => {
        const newSearchTerm = searchParams.get("searchTerm");
        if (!newSearchTerm) {
            navigate("/");
        } else {
            setSearchTerm(newSearchTerm);
        }
    }, [searchParams.toString()]);

    return searchTerm;
}
