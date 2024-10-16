import Stars from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/Stars.tsx";
import StarRating from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/StarRating.tsx";
import ReviewsInfo from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/types/ReviewsInfo.ts";
import { useState } from "react";
import ReviewErrorDialog from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/ReviewErrorDialog/ReviewErrorDialog";
import useReviewTranslation from "./hooks/useReviewTranslation";

interface ReviewSummaryProps {
    reviewsInfo: ReviewsInfo | null;
}

export default function ReviewSummary({ reviewsInfo }: ReviewSummaryProps) {
    const [reviewErrorDialogOpen, setReviewErrorDialogOpen] = useState(false);
    const t = useReviewTranslation();

    return (
        <div className="flex flex-col w-full lg:flex-1 max-w-full lg:max-w-[350px] space-y-5 order-1 lg:order-2 mb-5 lg:mb-0">
            <ReviewErrorDialog
                reviewErrorDialogOpen={reviewErrorDialogOpen}
                setReviewErrorDialogOpen={setReviewErrorDialogOpen}
            />
            <button
                className="bg-blue-500 text-white p-3 rounded-lg"
                onClick={() => setReviewErrorDialogOpen(true)}
            >
                {t.leaveReview}
            </button>
            <div>
                {reviewsInfo?.averageRating && (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Stars stars={reviewsInfo.averageRating} starClass="w-8 h-8" />
                            <p className="text-gray-800 text-xl font-medium">
                                {reviewsInfo.averageRating.toFixed(1)} / 5
                            </p>
                        </div>
                        <StarRating
                            label={t.fiveStars}
                            count={reviewsInfo.numberOf5Stars}
                            totalStars={reviewsInfo.allStarsNumber}
                        />
                        <StarRating
                            label={t.fourStars}
                            count={reviewsInfo.numberOf4Stars}
                            totalStars={reviewsInfo.allStarsNumber}
                        />
                        <StarRating
                            label={t.threeStars}
                            count={reviewsInfo.numberOf3Stars}
                            totalStars={reviewsInfo.allStarsNumber}
                        />
                        <StarRating
                            label={t.twoStars}
                            count={reviewsInfo.numberOf2Stars}
                            totalStars={reviewsInfo.allStarsNumber}
                        />
                        <StarRating
                            label={t.oneStar}
                            count={reviewsInfo.numberOf1Stars}
                            totalStars={reviewsInfo.allStarsNumber}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
