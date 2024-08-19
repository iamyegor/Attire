import api from "@/lib/api.ts";
import { redirect } from "react-router-dom";

export default async function isAuthenticatedLoader() {
    try {
        await api.get("is-authenticated");
        redirect("/");
    } catch {
        return null;
    }
}
