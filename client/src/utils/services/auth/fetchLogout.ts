import api from "@/lib/api";

export default async function fetchLogout() {
    await api.post("users/logout");
}
