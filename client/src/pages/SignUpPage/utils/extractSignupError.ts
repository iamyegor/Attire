import FieldErrorDictionary from "@/types/FieldErrorDictionary.ts";
import FieldError from "@/pages/SigninPage/types/FieldError.ts";
import { AxiosError } from "axios";
import ServerErrorResponse from "@/types/networking/ServerErrorResponse.ts";
import AppError from "@/types/errors/AppError.ts";

const errorsDictionary: FieldErrorDictionary = {
    "name.must.be.at.least.two.characters.long": FieldError.create(
        "name",
        "Имя должно быть не менее двух символов",
    ),
    "name.must.contain.only.letters": FieldError.create(
        "name",
        "Имя должно содержать только буквы",
    ),

    "password.invalid.signature": FieldError.create("password", "Пароль содержит неверную подпись"),
    "password.invalid.length": FieldError.create("password", "Недопустимая длина пароля"),

    "email.invalid.signature": FieldError.create(
        "email",
        "Электронная почта содержит неверную подпись",
    ),
    "email.too.long": FieldError.create("email", "Электронная почта слишком длинная"),
    "email.is.already.taken": FieldError.create("email", "Электронная почта уже занята"),
};

export default function extractSignupError(error: AxiosError<ServerErrorResponse>): FieldError {
    const errorCode = error.response!.data.errorCode;
    if (errorsDictionary[errorCode] === undefined) {
        throw AppError.unexpected();
    }

    return errorsDictionary[errorCode];
}
