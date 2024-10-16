import CustomDialog from "@/components/CustomDialog/CustomDialog";
import PurchaseSvg from "./assets/purchase.svg?react";
import useReviewErrorTranslation from "./hooks/useReviewErrorTranslation";

interface ReviewErrorDialogProps {
    reviewErrorDialogOpen: boolean;
    setReviewErrorDialogOpen: (value: boolean) => void;
}

export default function ReviewErrorDialog({
    reviewErrorDialogOpen,
    setReviewErrorDialogOpen,
}: ReviewErrorDialogProps) {
    const t = useReviewErrorTranslation();

    return (
        <CustomDialog
            isOpen={reviewErrorDialogOpen}
            onClose={() => setReviewErrorDialogOpen(false)}
        >
            <div className="pt-6 text-center space-y-5">
                <div className="flex justify-center space-x-2">
                    <PurchaseSvg className="w-12 h-12 fill-neutral-950"/>
                </div>
                <p>{t.message}</p>
            </div>
        </CustomDialog>
    );
}
