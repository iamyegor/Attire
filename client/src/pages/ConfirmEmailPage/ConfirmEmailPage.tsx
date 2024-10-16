import { useState } from "react";
import VerificationCodeInput from "@/pages/ConfirmEmailPage/components/VerificationCodeInput/VerificationCodeInput.tsx";
import useEmail from "@/pages/ConfirmEmailPage/hooks/useEmail.ts";
import { Form } from "react-router-dom";
import ResendCodeButton from "@/pages/ConfirmEmailPage/components/ResendCodeButton/ResendCodeButton";
import GoBackButton from "@/pages/ConfirmEmailPage/components/GoBackButton.tsx";
import useSecondsLeft from "@/pages/ConfirmEmailPage/hooks/useSecondsLeft.ts";
import CountdownDisplay from "@/pages/ConfirmEmailPage/components/VerificationCodeInput/CountdownDisplay.tsx";
import useEmailConfirmationMessage from "@/pages/ConfirmEmailPage/hooks/useEmailConfirmationMessage.ts";
import SubmittingButton from "@/components/ui/SubmittingButton.tsx";
import useConfirmEmailTranslation from "./hooks/useConfirmEmailTranslation";

export default function ConfirmEmailPage() {
    const [inputs, setInputs] = useState<string[]>(Array(5).fill(""));
    const { secondsLeft, setSecondsLeft } = useSecondsLeft(2);
    const { message, setMessage } = useEmailConfirmationMessage();
    const email = useEmail();
    const t = useConfirmEmailTranslation();

    return (
        <Form
            method="post"
            className="h-full flex flex-col justify-center items-center mx-auto px-6 max-w-lg bg-white rounded-2xl space-y-8"
        >
            <div className="space-y-4 text-center">
                <h1 className="text-3xl font-semibold text-gray-900">{t.title}</h1>
                <p className="text-base text-gray-500">
                    {t.description} <span className="underline">{email}</span>
                </p>
            </div>
            <VerificationCodeInput inputs={inputs} setInputs={setInputs} message={message} />
            <SubmittingButton text={t.confirmButton} />
            <div className="flex flex-col sm:flex-row w-full sm:space-x-5 space-y-4 sm:space-y-0">
                <GoBackButton route="/sign-up" text={t.backButton} />
                <ResendCodeButton
                    setSecondsLeft={setSecondsLeft}
                    secondsLeft={secondsLeft}
                    maxSeconds={60}
                    setMessage={setMessage}
                    text={t.resendCode}
                />
            </div>
            <CountdownDisplay secondsLeft={secondsLeft} text={t.countdownText}/>
        </Form>
    );
}
