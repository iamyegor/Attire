import CustomDialog from "@/components/ui/CustomDialog.tsx";
import StarSvg from "@/assets/yellow-star.svg?react";

interface ReviewErrorDialog {
    reviewErrorDialogOpen: boolean;
    setReviewErrorDialogOpen: (value: boolean) => void;
}

export default function ReviewErrorDialog({
    reviewErrorDialogOpen,
    setReviewErrorDialogOpen,
}: ReviewErrorDialog) {
    return (
        <CustomDialog
            isOpen={reviewErrorDialogOpen}
            onClose={() => setReviewErrorDialogOpen(false)}
        >
            <div className="py-6 text-center space-y-4">
                <div className="flex justify-center space-x-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <StarSvg key={index} />
                    ))}
                </div>
                <p>Чтобы оставить отзыв, пожалуйста, сначала приобретите этот товар.</p>
            </div>
        </CustomDialog>
    );
}
