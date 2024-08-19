import authApi from "@/lib/authApi.ts";

export default async function fetchResetPassword(resetPasswordData: {
    newPassword: string;
    token: string;
}) {
    await authApi.post("auth/reset-password", resetPasswordData);
}
