import { http, HttpResponse } from "msw";
import Review from "@/pages/ProductDetailsPage/types/Review.ts";
import ReviewsInfo from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/types/ReviewsInfo.ts";

const reviews: Review[] = [
    {
        id: "1",
        date: "2024-08-05",
        rating: 4,
        usagePeriod: "6 months",
        size: "Medium",
        content:
            "I've been using this product for six months now, and it has exceeded my expectations. The quality is impressive, and it fits perfectly into my routine.",
        advantages: "Durable, easy to use, great value for money.",
        disadvantages: "The color options are limited.",
    },
    {
        id: "2",
        date: "2024-07-20",
        rating: 5,
        usagePeriod: "1 year",
        size: "Large",
        content:
            "After a year of use, I can confidently say this is one of the best purchases I've made. The performance is consistent, and the design is sleek.",
        advantages: "Excellent performance, stylish design, long-lasting.",
        disadvantages: "A bit expensive, but worth it.",
    },
    {
        id: "3",
        date: "2024-08-10",
        rating: 3,
        usagePeriod: "3 months",
        size: "Small",
        content:
            "The product is decent for the price, but there are a few issues that prevent it from being perfect. It works well, but could be improved.",
        advantages: "Affordable, compact, efficient.",
        disadvantages: "Build quality could be better, not very user-friendly.",
    },
];

const reviewsResponse = {
    reviews,
    nextPage: null,
};

const reviewsInfo: ReviewsInfo = {
    averageRating: 4.1,
    allStarsNumber: 3,
    numberOf5Stars: 1,
    numberOf4Stars: 1,
    numberOf3Stars: 1,
    numberOf2Stars: 0,
    numberOf1Stars: 0,
};

export const reviewsHandlers = [
    http.get("*/products/*/reviews?page=*", () => {
        return HttpResponse.json(reviewsResponse);
    }),
    http.get("*/products/*/reviews/info", () => {
        return HttpResponse.json(reviewsInfo);
    }),
];
