import { Form, useActionData } from "react-router-dom";
import FeedbackMessage from "@/utils/FeedbackMessage.ts";
import FeedbackMessageComponent from "@/pages/ConfirmEmailPage/components/VerificationCodeInput/FeedbackMessageComponent.tsx";
import SubmittingButton from "@/components/ui/SubmittingButton.tsx";

export default function RequestPasswordResetPage() {
    const feedBack = useActionData() as FeedbackMessage | null;

    return (
        <Form
            method="post"
            className="h-full flex flex-col justify-center mx-auto p-6 max-w-lg space-y-6"
        >
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-semibold text-gray-900">Восстановите пароль</h1>
                <p className="text-base text-gray-500">
                    Укажите почту на которую мы отправим инструкцию по восстановлению пароля
                </p>
            </div>
            <div className="space-y-4">
                <label htmlFor="email" className="block font-medium text-gray-700">
                    Почта
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Например: myemail@example.com"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
                <FeedbackMessageComponent feedback={feedBack} />
            </div>
            <SubmittingButton text="Отправить" />
        </Form>
    );
}
