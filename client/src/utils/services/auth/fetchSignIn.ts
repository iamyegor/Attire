import authApi from "@/lib/authApi.ts";

export default async function fetchSignIn({
    email,
    password,
}: {
    email: string;
    password: string;
}) {
    await authApi.post("auth/sign-in", { email, password });
}
