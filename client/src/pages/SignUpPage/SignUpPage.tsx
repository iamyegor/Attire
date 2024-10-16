import ErrorMessageComponent from "@/components/ui/ErrorMessageComponent.tsx";
import SubmittingButton from "@/components/ui/SubmittingButton.tsx";
import Checkbox from "@/pages/CartPage/components/Checkbox.tsx";
import SignUpPageInput from "@/pages/SignUpPage/components/SignUpPageInput.tsx";
import AuthPasswordInput from "@/pages/SigninPage/components/AuthPasswordInput/AuthPasswordInput";
import FieldError from "@/pages/SigninPage/types/FieldError.ts";
import { useState } from "react";
import { Form, Link, useActionData } from "react-router-dom";
import useSignUpTranslation from "./hooks/useSignUpTranslation";

export default function SignUpPage() {
    const [agree, setAgree] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    const fieldError = useActionData() as FieldError | null;
    const t = useSignUpTranslation();

    return (
        <div className="relative mx-auto py-5 px-6 pb-20 max-w-md bg-white rounded-2xl space-y-6">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-semibold text-gray-900">{t.title}</h1>
                <p className="text-base text-gray-500 mt-1">{t.subtitle}</p>
            </div>
            <Form method="post" className="space-y-6">
                <div className="space-y-5">
                    <div className="space-y-2">
                        <SignUpPageInput
                            id="name"
                            name="name"
                            label={t.name}
                            placeholder={t.namePlaceholder}
                        />
                        <ErrorMessageComponent errorMessage={fieldError?.forField("name")} />
                    </div>
                    <div className="space-y-2">
                        <SignUpPageInput
                            id="email"
                            name="email"
                            type="email"
                            label={t.email}
                            placeholder="email@example.com"
                        />
                        <ErrorMessageComponent errorMessage={fieldError?.forField("email")} />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block font-medium text-gray-700">
                            {t.password}
                        </label>
                        <AuthPasswordInput id="password" />
                        <ErrorMessageComponent errorMessage={fieldError?.forField("password")} />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="passwordConfirmation"
                            className="block font-medium text-gray-700"
                        >
                            {t.confirmPassword}
                        </label>
                        <AuthPasswordInput id="passwordConfirmation" />
                        <ErrorMessageComponent
                            errorMessage={fieldError?.forField("passwordConfirmation")}
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <Checkbox id="agree" isChecked={agree} onClick={() => setAgree(!agree)} />
                        <label htmlFor="agree" className="text-gray-700">
                            {t.agree}
                        </label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Checkbox
                            id="subscribe"
                            isChecked={subscribe}
                            onClick={() => setSubscribe(!subscribe)}
                        />
                        <label htmlFor="subscribe" className="text-gray-700">
                            {t.subscribe}
                        </label>
                    </div>
                </div>

                <SubmittingButton text={t.createAccount} />
            </Form>
            <div className="text-center space-y-2">
                <p className="text-sm text-gray-700">
                    {t.alreadyRegistered}{" "}
                    <Link to="/sign-in" className="text-blue-500 hover:underline">
                        {t.signIn}
                    </Link>
                </p>
            </div>
        </div>
    );
}
