import { SuccessOr } from "@/types/results/SuccessOr.ts";
import { redirect } from "react-router-dom";
import ErrorMessage from "@/types/errors/ErrorMessage.ts";
import throwOnIncorrectError from "@/utils/throwOnIncorrectError.ts";
import { AxiosError } from "axios";
import ServerError from "@/types/errors/ServerError.ts";
import fetchSignIn from "@/utils/services/auth/fetchSignIn.ts";
import validateSignInData from "@/pages/SigninPage/utils/validateSignInData.ts";

export default async function signInPageAction({ request }: any) {
    const formData = await request.formData();
    const email: string = formData.get("email");
    const password: string = formData.get("password");

    const result: SuccessOr<ErrorMessage> = validateSignInData({ email, password });
    if (result.isFailure) {
        return result.error;
    }

    try {
        await fetchSignIn({ email, password });
        return redirect("/profile");
    } catch (e) {
        const error: AxiosError<ServerError> = throwOnIncorrectError(e);

        if (error.response!.data.errorCode === "user.invalid.login.or.password") {
            return ErrorMessage.create("Неверный данные для входа.");
        }
    }
}
