import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { PersonalData } from "../types/PersonalData";
import { useEffect, useState } from "react";

export function useLoadUserPersonalData() {
    const { data = null, isPending } = useQuery({
        queryKey: ["user-personal-data"],
        queryFn: () => fetchPersonalData(),
    });

    async function fetchPersonalData() {
        const { data } = await api.get<PersonalData>("users/personalData");
        return data;
    }

    const [personalData, setPersonalData] = useState<PersonalData | null>(data);

    useEffect(() => {
        if (!isPending) {
            setPersonalData(data);
        }
    }, [isPending]);

    return { personalData, setPersonalData, isPending };
}
