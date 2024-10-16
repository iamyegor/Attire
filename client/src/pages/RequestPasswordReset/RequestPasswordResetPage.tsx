import { Form, useActionData } from "react-router-dom";
import FeedbackMessage from "@/utils/FeedbackMessage.ts";
import FeedbackMessageComponent from "@/pages/ConfirmEmailPage/components/VerificationCodeInput/FeedbackMessageComponent.tsx";
import SubmittingButton from "@/components/ui/SubmittingButton.tsx";
import usePasswordResetTranslation from "./hooks/usePasswordResetTranslation";

export default function RequestPasswordResetPage() {
    const feedBack = useActionData() as FeedbackMessage | null;
    const t = usePasswordResetTranslation();

    return (
        <Form
            method="post"
            className="h-full flex flex-col justify-center mx-auto p-6 max-w-lg space-y-6"
        >
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-semibold text-gray-900">{t.title}</h1>
                <p className="text-base text-gray-500">{t.description}</p>
            </div>
            <div className="space-y-4">
                <label htmlFor="email" className="block font-medium text-gray-700">
                    {t.emailLabel}
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
                <FeedbackMessageComponent feedback={feedBack} />
            </div>
            <SubmittingButton text={t.submitButton} />
        </Form>
    );
}
