import fetchIsAuthenticated from "@/utils/services/auth/fetchIsAuthenticated.ts";
import { redirect } from "react-router-dom";
import throwOnIncorrectError from "@/utils/throwOnIncorrectError.ts";

export default async function authRedirectLoader() {
    try {
        await fetchIsAuthenticated();
        return null;
    } catch (e) {
        throwOnIncorrectError(e);
        return redirect("/sign-in");
    }
}
