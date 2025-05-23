import { SuccessOr } from "@/types/results/SuccessOr.ts";
import { redirect } from "react-router-dom";
import throwOnIncorrectError from "@/utils/throwOnIncorrectError.ts";
import validatePasswordResetData from "@/pages/ResetPassword/utils/validatePasswordResetData.ts";
import fetchResetPassword from "@/utils/services/auth/fetchResetPassword.ts";
import getSearchParam from "@/utils/getQueryParams.ts";

const translations = [
    {
        locale: "en",
        errorMessage: "Something went wrong. Please try again later",
        incorrectLink: "Invalid link",
        newPasswordSameAsCurrent: "New password is the same as the current password",
    },
    {
        locale: "ru",
        errorMessage: "Что-то пошло не так. Попробуйте позже",
        incorrectLink: "Некорректная ссылка",
        newPasswordSameAsCurrent: "Новый пароль совпадает со старым",
    },
];

export default async function resetPasswordPageAction({
    request,
}: any): Promise<string | Response> {
    const formData = await request.formData();
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const t = translations.find((t) => t.locale === (window.uiLanguage ?? "en"))!;

    const validationResult: SuccessOr<string> = validatePasswordResetData({
        password,
        confirmPassword,
    });
    if (validationResult.isFailure) {
        return validationResult.error!;
    }

    const token: string | null = getSearchParam(request.url, "token");

    if (!token) {
        return t.incorrectLink;
    }

    try {
        await fetchResetPassword({ newPassword: password, token });
        return redirect("/");
    } catch (err) {
        const error = throwOnIncorrectError(err);

        const { errorCode } = error.response!.data;
        if (errorCode == "password.reset.is.same.as.current") {
            return t.newPasswordSameAsCurrent;
        }

        if (errorCode == "password.reset.token.is.invalid") {
            return t.incorrectLink;
        }

        return t.errorMessage;
    }
}
