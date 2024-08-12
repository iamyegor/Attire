import Review from "@/pages/ProductDetailsPage/types/Review.ts";

export default interface ReviewsResponse {
    reviews: Review[];
    nextPage: number;
}
