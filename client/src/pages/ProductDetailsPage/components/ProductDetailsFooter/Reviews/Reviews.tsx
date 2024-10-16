import ReviewItem from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/ReviewItem.tsx";
import useLoadReviews from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/hooks/useLoadReviews.tsx";
import ReviewSummary from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/ReviewSummary/ReviewSummary";
import { useMemo } from "react";
import classNames from "classnames";
import useReviewsTranslation from "./hooks/useReviewsTranslation";

interface ReviewProps {
    productId: string;
}

export default function Reviews({ productId }: ReviewProps) {
    const { reviews, reviewsInfo } = useLoadReviews(productId);
    const t = useReviewsTranslation();
    const noReviews: boolean = useMemo(() => reviews.length === 0, [reviews]);

    if (!reviews) return <p>{t.loading}</p>;

    return (
        <div
            className={classNames(
                "flex flex-col lg:flex-row items-start justify-between lg:space-x-6 text-gray-600",
                { "!items-center": noReviews },
            )}
        >
            <div className="flex flex-col flex-1 max-w-full lg:max-w-[800px] space-y-6 order-2 lg:order-1 ">
                {reviews.length > 0 ? (
                    reviews.map((review) => <ReviewItem key={review.id} review={review} />)
                ) : (
                    <div className="flex h-full justify-center items-center">
                        <p className="text-2xl">{t.noReviews}</p>
                    </div>
                )}
            </div>
            <ReviewSummary reviewsInfo={reviewsInfo} />
        </div>
    );
}
