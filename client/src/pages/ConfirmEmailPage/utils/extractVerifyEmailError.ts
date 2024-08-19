import { AxiosError } from "axios";
import ServerErrorResponse from "@/types/networking/ServerErrorResponse.ts";

interface EmailVerificationErrorDictionary {
    [key: string]: string;
}

const emailVerificationErrors: EmailVerificationErrorDictionary = {
    "email.verification.code.has.invalid.length":
        "Код подтверждения электронной почты должен содержать 5 символов.",
    "email.verification.code.is.invalid": "Код подтверждения электронной почты недействителен.",
    "email.verification.code.is.expired": "Код подтверждения электронной почты истек.",
};

export default function extractVerifyEmailError(error: AxiosError<ServerErrorResponse>): string {
    return emailVerificationErrors[error.response!.data.errorCode];
}
