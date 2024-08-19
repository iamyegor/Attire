import ErrorMessageComponent from "@/components/ui/ErrorMessageComponent.tsx";
import ErrorMessage from "@/types/errors/ErrorMessage.ts";
import FeedbackMessage from "@/utils/FeedbackMessage.ts";
import GreenCheckSvg from "@/assets/green-check.svg?react";

interface SuccessOrErrorMessageProps {
    feedback: FeedbackMessage | null;
}

export default function FeedbackMessageComponent({ feedback }: SuccessOrErrorMessageProps) {
    if (!feedback) {
        return;
    }

    return (
        <>
            {feedback!.isSuccess ? (
                <div className="flex space-x-1.5">
                    <GreenCheckSvg className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <p className="text-green-500">{feedback!.message}</p>
                </div>
            ) : (
                <ErrorMessageComponent
                    errorMessage={ErrorMessage.create(feedback!.message).value}
                />
            )}
        </>
    );
}
