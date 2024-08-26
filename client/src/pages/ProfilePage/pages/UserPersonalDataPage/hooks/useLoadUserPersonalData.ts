import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { PersonalData } from "../types/PersonalData";
import { useEffect, useState } from "react";

export function useLoadUserPersonalData() {
    const [personalData, setPersonalData] = useState<PersonalData | null>(null);
    const { data = null, isLoading } = useQuery({
        queryKey: ["user-personal-data"],
        queryFn: () => fetchPersonalData(),
    });

    async function fetchPersonalData() {
        const { data } = await api.get<PersonalData>("users/personalData");
        return data;
    }

    useEffect(() => {
        setPersonalData(data);
    }, [data]);

    return { personalData, setPersonalData, isLoading };
}
