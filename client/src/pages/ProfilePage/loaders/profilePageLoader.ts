import fetchIsAuthenticated from "@/utils/services/auth/fetchIsAuthenticated.ts";
import { redirect } from "react-router-dom";
import AppError from "@/types/errors/AppError.ts";
import throwOnIncorrectError from "@/utils/throwOnIncorrectError.ts";

export default async function profilePageLoader() {
    try {
        await fetchIsAuthenticated();
    } catch (e) {
        const error = throwOnIncorrectError(e);

        if (error.response!.status == 401) {
            return redirect("/sign-in");
        }
        throw AppError.unexpected();
    }
}
