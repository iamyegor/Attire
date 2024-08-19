import authApi from "@/lib/authApi.ts";

export default async function fetchLogout() {
    await authApi.post("auth/log-out");
}
