import ErrorMessageComponent from "@/components/ui/ErrorMessageComponent.tsx";
import SubmittingButton from "@/components/ui/SubmittingButton.tsx";
import AuthPasswordInput from "@/pages/SigninPage/components/AuthPasswordInput/AuthPasswordInput";
import { Form, useActionData } from "react-router-dom";

export default function ResetPasswordPage() {
    const errorMessage = useActionData() as string | null;

    return (
        <Form
            method="post"
            className="h-full flex flex-col justify-center mx-auto p-6 max-w-md space-y-6"
        >
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-semibold text-gray-900">Восстановите пароль</h1>
                <p className="text-base text-gray-500">Введите новый пароль для вашего аккаунта</p>
            </div>
            <AuthPasswordInput id="password" />
            <AuthPasswordInput id="confirmPassword" placeholder="Повторите пароль" />
            <ErrorMessageComponent errorMessage={errorMessage} />
            <SubmittingButton text="Изменить пароль" />
        </Form>
    );
}
