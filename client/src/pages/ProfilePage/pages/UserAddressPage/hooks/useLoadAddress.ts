import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Address } from "../types/Address";

export function useLoadAddress() {
    const { data = null, isPending } = useQuery({
        queryKey: ["user-address"],
        queryFn: () => fetchAddress(),
    });

    async function fetchAddress() {
        const { data } = await api.get<Address>("users/address");
        return data;
    }

    return { address: data, isPending };
}
