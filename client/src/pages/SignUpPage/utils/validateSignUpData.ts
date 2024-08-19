import { SuccessOr } from "@/types/results/SuccessOr.ts";
import FieldError from "@/pages/SigninPage/types/FieldError.ts";
import SignUpData from "@/pages/SignUpPage/types/SignUpData.ts";
import validatePassword from "@/pages/SignUpPage/utils/validatePassword.ts";
import EMAIL_REGEX from "@/utils/EMAIL_REGEX.ts";

const NAME_REGEX = /^[a-zA-Zа-яА-ЯёЁ]+$/;

export default function validateSignUpData(signupData: SignUpData): SuccessOr<FieldError> {
    if (!NAME_REGEX.test(signupData.name)) {
        return SuccessOr.Fail(FieldError.create("name", "Имя должно содержать только буквы"));
    }

    const passwordValidation = validatePassword(signupData.password);
    if (passwordValidation.isFailure) {
        return SuccessOr.Fail(FieldError.create("password", passwordValidation.error!));
    }

    if (!signupData.email) {
        return SuccessOr.Fail(FieldError.create("email", "Почта не должен быть пустым"));
    }

    if (!EMAIL_REGEX.test(signupData.email)) {
        return SuccessOr.Fail(FieldError.create("email", "Некорректный формат почты"));
    }

    if (signupData.password !== signupData.passwordConfirmation) {
        return SuccessOr.Fail(FieldError.create("passwordConfirmation", "Пароли не совпадают"));
    }

    return SuccessOr.Ok();
}
