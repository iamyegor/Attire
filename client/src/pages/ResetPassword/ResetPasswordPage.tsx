import ErrorMessageComponent from "@/components/ui/ErrorMessageComponent.tsx";
import SubmittingButton from "@/components/ui/SubmittingButton.tsx";
import useAttireContext from "@/context/useAttireContext";
import AuthPasswordInput from "@/pages/SigninPage/components/AuthPasswordInput/AuthPasswordInput";
import { Form, useActionData } from "react-router-dom";

const translations = [
    {
        locale: "en",
        title: "Reset password",
        description: "Enter a new password for your account",
        passwordLabel: "Password",
        confirmPasswordLabel: "Confirm password",
        submitButtonText: "Change password",
    },
    {
        locale: "ru",
        title: "Восстановите пароль",
        description: "Введите новый пароль для вашего аккаунта",
        passwordLabel: "Пароль",
        confirmPasswordLabel: "Повторите пароль",
        submitButtonText: "Изменить пароль",
    },
];

export default function ResetPasswordPage() {
    const errorMessage = useActionData() as string | null;
    const { uiLanguage } = useAttireContext();
    const t = translations.find((t) => t.locale === (uiLanguage ?? "en"))!;

    return (
        <Form
            method="post"
            className="h-full flex flex-col justify-center mx-auto p-6 max-w-md space-y-6"
        >
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-semibold text-gray-900">{t.title}</h1>
                <p className="text-base text-gray-500">{t.description}</p>
            </div>
            <AuthPasswordInput id="password" />
            <AuthPasswordInput id="confirmPassword" placeholder={t.confirmPasswordLabel} />
            <ErrorMessageComponent errorMessage={errorMessage} />
            <SubmittingButton text={t.submitButtonText} />
        </Form>
    );
}
