import EMAIL_REGEX from "@/utils/EMAIL_REGEX.ts";
import throwOnIncorrectError from "@/utils/throwOnIncorrectError.ts";
import FeedbackMessage from "@/utils/FeedbackMessage.ts";
import authApi from "@/lib/authApi.ts";
import { getPasswordResetActionMessages } from "../utils/getPasswordResetActionMessages";

export default async function requestPasswordResetAction({ request }: any) {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const locale = window.uiLanguage || "en";
    const messages = getPasswordResetActionMessages(locale);

    if (!EMAIL_REGEX.test(email)) {
        return FeedbackMessage.createError(messages.invalidEmailFormat);
    }

    try {
        await authApi.post("auth/request-password-reset", { email });
        return FeedbackMessage.createSuccess(messages.successMessage);
    } catch (err) {
        const error = throwOnIncorrectError(err);

        if (error.response!.data.errorCode === "password.reset.is.already.requested") {
            return FeedbackMessage.createError(messages.alreadyRequestedError);
        }

        return FeedbackMessage.createError(messages.generalError);
    }
}
