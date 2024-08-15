import api from "@/lib/api";
import { PersonalData } from "@/pages/ProfilePage/pages/UserPersonalDataPage/types/PersonalData";
import ErrorMessage from "@/types/errors/ErrorMessage";
import ServerError from "@/types/errors/ServerError";
import { SuccessOr } from "@/types/results/SuccessOr";
import { isAxiosError } from "axios";

const errors: { [errorCode: string]: string } = {
    "phone.number.is.taken":
        "Введенный номер телефона уже зарегестрирован на другого пользователя.",
    "email.is.taken": "Введенная почта уже зарегестрирована на другого пользователя.",
};

export default async function fetchChangePersonalData(
    changedPersonalData: PersonalData,
): Promise<SuccessOr<ErrorMessage>> {
    if (
        changedPersonalData.firstName.trim() === "" ||
        changedPersonalData.lastName.trim() === "" ||
        changedPersonalData.phone.trim() === "" ||
        changedPersonalData.phone.trim().length !== 12 ||
        changedPersonalData.email.trim() === "" ||
        !/^[^@]+@[^@]+\.[^@]+$/.test(changedPersonalData.email.trim())
    ) {
        return SuccessOr.Fail(new ErrorMessage("Не все поля были заполнены корректно."));
    }

    try {
        await api.put("users/personalData", changedPersonalData);

        return SuccessOr.Ok();
    } catch (e) {
        if (isAxiosError(e)) {
            const error: ServerError = e.response?.data as ServerError;

            return SuccessOr.Fail(new ErrorMessage(errors[error.errorCode]));
        }

        throw e;
    }
}
