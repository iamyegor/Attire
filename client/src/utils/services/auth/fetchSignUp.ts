import SignUpData from "@/pages/SignUpPage/types/SignUpData.ts";
import authApi from "@/lib/authApi.ts";

export default async function fetchSignUp(signUpData: SignUpData) {
    await authApi.post("auth/sign-up", signUpData);
}
