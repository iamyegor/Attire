import EMAIL_REGEX from "@/utils/EMAIL_REGEX.ts";
import throwOnIncorrectError from "@/utils/throwOnIncorrectError.ts";
import FeedbackMessage from "@/utils/FeedbackMessage.ts";
import authApi from "@/lib/authApi.ts";

export default async function requestPasswordResetAction({ request }: any) {
    const formData = await request.formData();
    const email = formData.get("email") as string;

    if (!EMAIL_REGEX.test(email)) {
        return FeedbackMessage.createError("Некорректный формат почты");
    }

    try {
        await authApi.post("auth/request-password-reset", { email });
        return FeedbackMessage.createSuccess(
            "Если пользователь с такой почтой существует, на нее было отправлено письмо с инструкциями по сбросу пароля",
        );
    } catch (err) {
        const error = throwOnIncorrectError(err);

        if (error.response!.data.errorCode === "password.reset.is.already.requested") {
            return FeedbackMessage.createError(
                "Сброс пароля уже запрошен, проверьте вашу почту и папку спам",
            );
        }

        return FeedbackMessage.createError(
            "Ошибка при запросе сброса пароля, проверьте, что пользователь с такой почтой существует и попробуйте снова",
        );
    }
}
