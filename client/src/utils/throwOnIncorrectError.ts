import { isAxiosError } from "axios";
import ServerError from "@/types/errors/ServerError.ts";
import AppError from "@/types/errors/AppError.ts";

export default function throwOnIncorrectError(e: any) {
    if (!isAxiosError<ServerError>(e) || !e.response) {
        throw AppError.unexpected();
    }

    if (e.response?.status == 500) {
        throw AppError.serverError();
    }

    return e;
}
