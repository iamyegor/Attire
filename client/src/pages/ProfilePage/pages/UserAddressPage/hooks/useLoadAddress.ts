import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Address } from "../types/Address";
import { useEffect, useState } from "react";

export function useLoadAddress() {
    const { data = null, isPending } = useQuery({
        queryKey: ["user-address"],
        queryFn: () => fetchAddress(),
    });

    async function fetchAddress() {
        const { data } = await api.get<Address>("users/address");
        return data;
    }

    const [address, setAddress] = useState<Address | null>(data);

    useEffect(() => {
        if (!isPending) {
            setAddress(data);
        }
    }, [isPending]);

    return { address, setAddress, isPending };
}
