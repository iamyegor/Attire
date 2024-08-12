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
        <div className="flex flex-col lg:flex-row items-start justify-between lg:space-x-6 text-gray-600">
            <div className="flex flex-col flex-1 max-w-full lg:max-w-[800px] space-y-6 order-2 lg:order-1">
                {reviews.map((review) => (
                    <ReviewItem key={review.id} review={review} /> // Use the new component
                ))}
            </div>
            <ReviewSummary reviewsInfo={reviewsInfo} />
        </div>
    );
}
