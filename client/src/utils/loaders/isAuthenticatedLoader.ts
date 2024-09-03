import api from "@/lib/api.ts";
import { redirect } from "react-router-dom";
import fetchIsAuthenticated from "@/utils/services/auth/fetchIsAuthenticated.ts";

export default async function isAuthenticatedLoader() {
    try {
        await fetchIsAuthenticated();
        redirect("/");
    } catch {
        return null;
    }
}
