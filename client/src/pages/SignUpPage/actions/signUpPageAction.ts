import { SuccessOr } from "@/types/results/SuccessOr.ts";
import FieldError from "@/pages/SigninPage/types/FieldError.ts";
import { redirect } from "react-router-dom";
import throwOnIncorrectError from "@/utils/throwOnIncorrectError.ts";
import extractSignupError from "@/pages/SignUpPage/utils/extractSignupError.ts";
import validateSignUpData from "@/pages/SignUpPage/utils/validateSignUpData.ts";
import SignUpData from "@/pages/SignUpPage/types/SignUpData.ts";
import fetchSignUp from "@/utils/services/auth/fetchSignUp.ts";

export default async function signUpPageAction({ request }: any) {
    const formData = await request.formData();

    const name: string = formData.get("name");
    const email: string = formData.get("email");
    const password: string = formData.get("password");
    const passwordConfirmation: string = formData.get("passwordConfirmation");

    const signupData: SignUpData = { name, email, password, passwordConfirmation };
    const validationResult: SuccessOr<FieldError> = validateSignUpData(signupData);
    if (validationResult.isFailure) {
        return validationResult.error;
    }
    
    try {
        await fetchSignUp(signupData);
        localStorage.setItem("email", email);
        
        return redirect("/confirm-email");
    } catch (e) {
        const error = throwOnIncorrectError(e);

        return extractSignupError(error);
    }
}
