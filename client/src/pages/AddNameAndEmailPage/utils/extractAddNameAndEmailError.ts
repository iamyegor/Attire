import ErrorMessage from "@/types/errors/ErrorMessage.ts";
import { AxiosError } from "axios";
import ServerError from "@/types/errors/ServerError.ts";

const errorsDictionary: Record<string, ErrorMessage> = {
    "name.must.be.at.least.two.characters.long": ErrorMessage.create(
        "Имя должно быть не менее двух символов",
    ),
    "name.must.contain.only.letters": ErrorMessage.create("Имя должно содержать только буквы"),

    "user.email.exists": ErrorMessage.create("Почта уже зарегистрирована"),
};

export default function extractAddNameAndEmailError(error: AxiosError<ServerError>) {
    const errorCode = error.response!.data.errorCode;
    if (errorsDictionary[errorCode]) {
        return errorsDictionary[errorCode];
    }

    return ErrorMessage.create("Ошибка при добавлении почты, попробуйте снова");
}
