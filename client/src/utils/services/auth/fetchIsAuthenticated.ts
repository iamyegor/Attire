import api from "@/lib/api.ts";

export default async function fetchIsAuthenticated() {
    await api.get("auth/is-authenticated");
}
