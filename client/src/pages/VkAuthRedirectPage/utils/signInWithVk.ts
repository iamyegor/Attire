import { NavigateFunction } from "react-router-dom";
import ErrorMessage from "@/types/errors/ErrorMessage.ts";
import api from "@/lib/api.ts";
import { AxiosResponse } from "axios";
import VkSignInResponse from "@/pages/VkAuthRedirectPage/types/VkSignInResponse.ts";
import throwOnIncorrectError from "@/utils/throwOnIncorrectError.ts";
import AppError from "@/types/errors/AppError.ts";
import authApi from "@/lib/authApi.ts";

export default async function signInWithVk(
    code: string,
    vkDeviceId: string,
    navigate: NavigateFunction,
): Promise<ErrorMessage | undefined> {
    try {
        const response = (await authApi.post("vk/sign-in", {
            code,
            vkDeviceId,
        })) as AxiosResponse<VkSignInResponse>;

        if (response.data.authStatus === "NewUser") {
            navigate("/add-name-and-email");
        } else {
            navigate("/profile");
        }
    } catch (err) {
        const error = throwOnIncorrectError(err);

        if (error.response!.data.errorCode === "vk.auth.failed") {
            return ErrorMessage.create("Ошибка авторизации через ВКонтакте. Попробуйте снова");
        }

        throw AppError.unexpected();
    }
}
