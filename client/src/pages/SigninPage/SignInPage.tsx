import { useState } from "react";
import AuthPasswordInput from "@/pages/SigninPage/components/AuthPasswordInput.tsx";
import { Form, Link, useActionData } from "react-router-dom";
import Checkbox from "@/pages/CartPage/components/Checkbox.tsx";
import ErrorMessage from "@/types/errors/ErrorMessage.ts";
import ErrorMessageComponent from "@/components/ui/ErrorMessageComponent.tsx";
import VkLoginButton from "@/pages/SigninPage/components/VkSignInButton.tsx";
import SubmittingButton from "@/components/ui/SubmittingButton.tsx";

export default function SignInPage() {
    const [rememberMe, setRememberMe] = useState(false);
    const errorMessage = useActionData() as ErrorMessage | null;

    return (
        <Form
            method="post"
            className="relative mx-auto p-6 max-w-md bg-white rounded-2xl space-y-8"
        >
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-900">Войти</h1>
                <p className="text-base text-gray-500 mt-1">Добро пожаловать обратно! 👋</p>
            </div>

            <VkLoginButton />

            <div className="relative flex items-center justify-center">
                <div className="flex-1 h-px bg-gray-300" />
                <span className="px-4 text-gray-400">Или войдите с почтой</span>
                <div className="flex-1 h-px bg-gray-300" />
            </div>

            <div className="space-y-6">
                <div className="space-y-4">
                    <label htmlFor="email" className="block font-medium text-gray-700">
                        Почта
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Например: myemail@example.com"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="space-y-4">
                    <label htmlFor="password" className="block font-medium text-gray-700">
                        Пароль
                    </label>
                    <AuthPasswordInput id="password" />
                </div>

                <ErrorMessageComponent errorMessage={errorMessage?.value} />

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="remember-me"
                            isChecked={rememberMe}
                            onClick={() => setRememberMe(!rememberMe)}
                        />
                        <label htmlFor="remember-me" className="text-gray-700">
                            Запомнить меня
                        </label>
                    </div>
                    <Link to="/request-password-reset" className="text-blue-500 hover:underline">
                        Не помню пароль
                    </Link>
                </div>

                <SubmittingButton text="Войти" />
            </div>

            <div className="text-center space-y-2">
                <p className="text-sm text-gray-700">
                    Еще не зарегистрированы?{" "}
                    <Link to="/sign-up" className="text-blue-500 hover:underline">
                        Создайте аккаунт
                    </Link>
                </p>
            </div>
        </Form>
    );
}
