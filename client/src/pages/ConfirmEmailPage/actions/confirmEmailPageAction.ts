import getCodeFromForm from "@/pages/ConfirmEmailPage/utils/getCodeFromForm.ts";
import FeedbackMessage from "@/utils/FeedbackMessage.ts";
import extractVerifyEmailError from "@/pages/ConfirmEmailPage/utils/extractVerifyEmailError.ts";
import { redirect } from "react-router-dom";
import throwOnIncorrectError from "@/utils/throwOnIncorrectError.ts";
import authApi from "@/lib/authApi.ts";

export default async function confirmEmailPageAction({ request }: any) {
    const code: string = await getCodeFromForm(request, 5);

    if (code.length != 5) {
        return FeedbackMessage.createError("Код должен быть длиной 5 символов");
    }

    try {
        await authApi.post("confirm-email", { code });
        return redirect("/");
    } catch (err) {
        const error = throwOnIncorrectError(err);

        const errorMessage: string = extractVerifyEmailError(error);
        return FeedbackMessage.createError(errorMessage);
    }
}
