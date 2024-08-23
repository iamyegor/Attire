import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import api from "@/lib/api.ts";
import ReviewsResponse from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/types/ReviewsResponse.ts";
import ReviewsInfo from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/types/ReviewsInfo.ts";

export default function useLoadReviews(productId: string) {
    const { data: reviewsInfo = null } = useQuery({
        queryKey: ["average-rating", productId],
        queryFn: fetchAverageRating,
    });

    async function fetchAverageRating() {
        const { data } = await api.get<ReviewsInfo>(`products/${productId}/reviews/info`);
        return data;
    }

    const { data: reviewsResponse } = useInfiniteQuery({
        queryKey: ["reviews", productId],
        initialPageParam: 1,
        queryFn: fetchReviews,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });

    async function fetchReviews({ pageParam }: { pageParam: number }) {
        const { data } = await api.get<ReviewsResponse>(
            `products/${productId}/reviews?page=${pageParam}`,
        );
        return data;
    }

    const reviews = reviewsResponse?.pages.flatMap((page) => page.reviews) || [];

    return { reviews, reviewsInfo };
}
