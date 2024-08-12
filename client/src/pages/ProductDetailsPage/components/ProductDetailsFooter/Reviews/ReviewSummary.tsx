import Stars from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/Stars.tsx";
import StarRating from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/StarRating.tsx";
import ReviewsInfo from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/types/ReviewsInfo.ts";

interface ReviewSummaryProps {
    reviewsInfo: ReviewsInfo | null;
}

export default function ReviewSummary({ reviewsInfo }: ReviewSummaryProps) {
    return (
        <div className="flex flex-col w-full lg:flex-1 max-w-full lg:max-w-[350px] space-y-5 order-1 lg:order-2 mb-5 lg:mb-0">
            <button className="bg-blue-500 text-white p-3 rounded-lg">Оставить отзыв</button>
            <div>
                {reviewsInfo?.averageRating ? (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Stars stars={reviewsInfo.averageRating} starClass="w-8 h-8" />
                            <p className="text-gray-800 text-xl font-medium">
                                {reviewsInfo.averageRating.toFixed(1)} / 5
                            </p>
                        </div>
                        <StarRating
                            label="5 звезд"
                            count={reviewsInfo.numberOf5Stars}
                            totalStars={reviewsInfo.allStarsNumber}
                        />
                        <StarRating
                            label="4 звезды"
                            count={reviewsInfo.numberOf4Stars}
                            totalStars={reviewsInfo.allStarsNumber}
                        />
                        <StarRating
                            label="3 звезды"
                            count={reviewsInfo.numberOf3Stars}
                            totalStars={reviewsInfo.allStarsNumber}
                        />
                        <StarRating
                            label="2 звезды"
                            count={reviewsInfo.numberOf2Stars}
                            totalStars={reviewsInfo.allStarsNumber}
                        />
                        <StarRating
                            label="1 звездa"
                            count={reviewsInfo.numberOf1Stars}
                            totalStars={reviewsInfo.allStarsNumber}
                        />
                    </div>
                ) : (
                    <div>No reviews yet</div>
                )}
            </div>
        </div>
    );
}
