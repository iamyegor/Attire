import classNames from "classnames";
import api from "@/lib/api.ts";
import { useEffect, useState } from "react";
import SendSvg from "@/assets/send.svg?react";
import AppError from "@/types/errors/AppError.ts";
import LoadingSpinner from "@/components/ui/LoadingSpinner.tsx";
import FeedbackMessage from "@/utils/FeedbackMessage.ts";
import DisabledSendSvg from "@/assets/disabled-send.svg?react";
import authApi from "@/lib/authApi.ts";
import useResendCodeTranslation from "./hooks/useResendCodeTranslation";

interface ResendCodeButtonProps {
    setSecondsLeft: (seconds: number) => void;
    secondsLeft: number;
    maxSeconds: number;
    setMessage: (value: FeedbackMessage) => void;
    text: string;
}

export default function ResendCodeButton({
    setSecondsLeft,
    secondsLeft,
    maxSeconds,
    setMessage,
    text,
}: ResendCodeButtonProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [unexpectedError, setUnexpectedError] = useState<boolean>(false);
    const t = useResendCodeTranslation();

    useEffect(() => {
        if (unexpectedError) {
            throw AppError.unexpected();
        }
    }, [unexpectedError]);

    async function resendCode() {
        if (isDisabled()) {
            return;
        }

        setIsLoading(true);

        try {
            await authApi.post("resend-email-code");
            setMessage(FeedbackMessage.createSuccess(t.successMessage));
            setSecondsLeft(maxSeconds);
        } catch (err) {
            setUnexpectedError(true);
        }

        setIsLoading(false);
    }

    function isDisabled() {
        return secondsLeft > 0 || isLoading;
    }

    return (
        <button
            type="button"
            className={classNames(
                "flex justify-center items-center space-x-2 rounded-lg transition text-white sm:flex-1 h-[50px]",
                isLoading
                    ? "bg-neutral-500 rounded-lg transition"
                    : "bg-blue-500 disabled:bg-neutral-500/70 disabled:shadow-none shadow hover:shadow-lg disabled:text-neutral-300",
            )}
            disabled={isDisabled()}
            onClick={resendCode}
        >
            {isLoading ? (
                <LoadingSpinner width={28} height={28} />
            ) : (
                <>
                    {isDisabled() ? (
                        <DisabledSendSvg className="w-5 h-5" />
                    ) : (
                        <SendSvg className="w-5 h-5" />
                    )}
                    <span>{text}</span>
                </>
            )}
        </button>
    );
}
