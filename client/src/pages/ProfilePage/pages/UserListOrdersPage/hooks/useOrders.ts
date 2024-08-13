import api from "@/lib/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { OrdersResponse } from "../types/OrdersResponse";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function useOrders(queryKey: string[]) {
    const { data, fetchNextPage } = useInfiniteQuery({
        queryKey,
        queryFn: fetchOrders,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPageNumber,
    });

    async function fetchOrders({ pageParam }: { pageParam: number }) {
        const { data } = await api.get<OrdersResponse>(`orders?page=${pageParam}`);
        return data;
    }

    const { inView, ref } = useInView();

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [JSON.stringify(data), inView]);

    const orders = data?.pages.flatMap((page) => page.orders) || [];

    return { orders, ref };
}
