import validatePassword from "@/pages/SignUpPage/utils/validatePassword.ts";
import { SuccessOr } from "@/types/results/SuccessOr.ts";

export default function validatePasswordResetData({
    password,
    confirmPassword,
}: {
    password: string;
    confirmPassword: string;
}) {
    const passwordValidation = validatePassword(password);
    if (passwordValidation.isFailure) {
        return SuccessOr.Fail(passwordValidation.error!);
    }

    if (password !== confirmPassword) {
        return SuccessOr.Fail("Пароли не совпадают");
    }

    return SuccessOr.Ok<string>();
}
