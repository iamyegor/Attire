import ReviewItem from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/ReviewItem.tsx";
import useLoadReviews from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/hooks/useLoadReviews.tsx";
import ReviewSummary from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/ReviewSummary.tsx";

interface ReviewProps {
    productId: string;
}

export default function Reviews({ productId }: ReviewProps) {
    const { reviews, reviewsInfo } = useLoadReviews(productId);

    if (!reviews) return <p>Loading...</p>;

    return (
        <div className="space-y-4">
            <div className="flex items-start space-x-5">
                <ReviewSummary reviewsInfo={reviewsInfo} />
                <div className="flex flex-col max-w-[800px] space-y-6">
                    {reviews.map((review) => (
                        <ReviewItem key={review.id} review={review} /> // Use the new component
                    ))}
                </div>
            </div>
        </div>
    );
}
