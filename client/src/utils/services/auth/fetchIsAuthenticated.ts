import authApi from "@/lib/authApi.ts";

export default async function fetchIsAuthenticated() {
    await authApi.get("user/is-authenticated");
}
