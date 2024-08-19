import { SuccessOr } from "@/types/results/SuccessOr.ts";
import ErrorMessage from "@/types/errors/ErrorMessage.ts";

export default function validateSignInData({
    email,
    password,
}: {
    email: string;
    password: string;
}): SuccessOr<ErrorMessage> {
    if (email.trim().length < 3) {
        return SuccessOr.Fail(ErrorMessage.create("Такого пользователя не существует"));
    }

    if (password.trim().length < 6) {
        return SuccessOr.Fail(ErrorMessage.create("Неверный пароль"));
    }

    return SuccessOr.Ok();
}
