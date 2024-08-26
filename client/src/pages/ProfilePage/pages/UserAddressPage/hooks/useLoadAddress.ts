import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Address } from "../types/Address";
import { useEffect, useState } from "react";

export function useLoadAddress() {
    const [address, setAddress] = useState<Address | null>(null);
    const { data = null, isLoading } = useQuery({
        queryKey: ["user-address"],
        queryFn: () => fetchAddress(),
    });
    
    useEffect(() => {
        setAddress(data);
    }, [data]);
    
    async function fetchAddress() {
        const { data } = await api.get<Address>("users/address");
        return data;
    }

    return { address, setAddress, isLoading };
}
