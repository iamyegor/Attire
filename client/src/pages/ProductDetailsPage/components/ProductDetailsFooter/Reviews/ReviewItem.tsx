import Review from "@/pages/ProductDetailsPage/types/Review.ts";
import Stars from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/Stars.tsx";

interface ReviewItemProps {
    review: Review;
}

export default function ReviewItem({ review }: ReviewItemProps) {
    return (
        <div
            key={review.id}
            className="bg-white border border-neutral-200 p-6 rounded-3xl shadow-sm"
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Review by {review.id}</h3>
                <div className="flex items-center space-x-1">
                    <Stars stars={review.rating} starClass="w-7 h-7" />
                </div>
            </div>
            <p className="text-gray-700 mb-4">{review.content}</p>
            <hr className="border-neutral-300" />
            <div className="mt-4">
                <strong className="text-gray-800">Advantages:</strong> {review.advantages || "None"}
            </div>
            <div className="mt-2">
                <strong className="text-gray-800">Disadvantages:</strong>{" "}
                {review.disadvantages || "None"}
            </div>
        </div>
    );
}
