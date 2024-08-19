import { useActionData } from "react-router-dom";
import FeedbackMessage from "@/utils/FeedbackMessage.ts";
import { useEffect, useState } from "react";

export default function useEmailConfirmationMessage() {
    const actionError = useActionData() as FeedbackMessage | null;
    const [message, setMessage] = useState<FeedbackMessage | null>(null);

    useEffect(() => {
        if (!actionError) {
            return;
        }

        if (message === null || actionError.generatedAt > message.generatedAt) {
            setMessage(actionError);
        }
    }, [actionError?.generatedAt]);

    return { message, setMessage };
}
