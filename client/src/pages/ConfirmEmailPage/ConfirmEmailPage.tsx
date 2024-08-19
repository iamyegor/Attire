import { useState } from "react";
import VerificationCodeInput from "@/pages/ConfirmEmailPage/components/VerificationCodeInput/VerificationCodeInput.tsx";
import useEmail from "@/pages/ConfirmEmailPage/hooks/useEmail.ts";
import { Form } from "react-router-dom";
import ResendCodeButton from "@/pages/ConfirmEmailPage/components/ResendCodeButton.tsx";
import GoBackButton from "@/pages/ConfirmEmailPage/components/GoBackButton.tsx";
import useSecondsLeft from "@/pages/ConfirmEmailPage/hooks/useSecondsLeft.ts";
import CountdownDisplay from "@/pages/ConfirmEmailPage/components/VerificationCodeInput/CountdownDisplay.tsx";
import useEmailConfirmationMessage from "@/pages/ConfirmEmailPage/hooks/useEmailConfirmationMessage.ts";
import SubmittingButton from "@/components/ui/SubmittingButton.tsx";

export default function ConfirmEmailPage() {
    const [inputs, setInputs] = useState<string[]>(Array(5).fill(""));
    const { secondsLeft, setSecondsLeft } = useSecondsLeft(2);
    const { message, setMessage } = useEmailConfirmationMessage();
    const email = useEmail();

    return (
        <Form
            method="post"
            className="h-full flex flex-col justify-center items-center mx-auto px-6 max-w-lg bg-white rounded-2xl space-y-8"
        >
            <div className="space-y-4 text-center">
                <h1 className="text-3xl font-semibold text-gray-900">Подтвердите почту</h1>
                <p className="text-base text-gray-500">
                    Введите код который мы прислали на <span className="underline">{email}</span>
                </p>
            </div>
            <VerificationCodeInput inputs={inputs} setInputs={setInputs} message={message} />
            <SubmittingButton text="Подтвердить" />
            <div className="flex flex-col sm:flex-row w-full sm:space-x-5 space-y-4 sm:space-y-0">
                <GoBackButton route="/sign-up" text="Назад" />
                <ResendCodeButton
                    setSecondsLeft={setSecondsLeft}
                    secondsLeft={secondsLeft}
                    maxSeconds={60}
                    setMessage={setMessage}
                />
            </div>
            <CountdownDisplay secondsLeft={secondsLeft} />
        </Form>
    );
}
