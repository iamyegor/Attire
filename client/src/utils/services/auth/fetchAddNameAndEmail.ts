import authApi from "@/lib/authApi.ts";

export default async function fetchAddNameAndEmail(nameAndEmail: { email: string; name: string }) {
    await authApi.post("user/name-and-email", nameAndEmail);
}
