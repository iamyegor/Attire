import EMAIL_REGEX from "@/utils/EMAIL_REGEX.ts";
import ErrorMessage from "@/types/errors/ErrorMessage.ts";
import throwOnIncorrectError from "@/utils/throwOnIncorrectError.ts";
import fetchAddNameAndEmail from "@/utils/services/auth/fetchAddNameAndEmail.ts";
import { redirect } from "react-router-dom";
import extractAddNameAndEmailError from "@/pages/AddNameAndEmailPage/utils/extractAddNameAndEmailError.ts";

export default async function addNameAndEmailPageAction({ request }: any) {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;

    if (!EMAIL_REGEX.test(email)) {
        return ErrorMessage.create("Некорректный формат почты");
    }

    try {
        await fetchAddNameAndEmail({ email, name });
        return redirect("/confirm-email");
    } catch (err) {
        const error = throwOnIncorrectError(err);

        return extractAddNameAndEmailError(error);
    }
}
