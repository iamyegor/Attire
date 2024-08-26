import { useState } from "react";
import Checkbox from "@/pages/CartPage/components/Checkbox.tsx";
import AuthPasswordInput from "@/pages/SigninPage/components/AuthPasswordInput.tsx";
import { Form, Link, useActionData } from "react-router-dom";
import SignUpPageInput from "@/pages/SignUpPage/components/SignUpPageInput.tsx";
import FieldError from "@/pages/SigninPage/types/FieldError.ts";
import ErrorMessageComponent from "@/components/ui/ErrorMessageComponent.tsx";
import SubmittingButton from "@/components/ui/SubmittingButton.tsx";

export default function SignUpPage() {
    const [agree, setAgree] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    const fieldError = useActionData() as FieldError | null;

    return (
        <div className="relative mx-auto px-6 pb-8 max-w-md bg-white rounded-2xl space-y-6">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-semibold text-gray-900">Зарегистрироваться</h1>
                <p className="text-base text-gray-500 mt-1">Создайте свой новый аккаунт</p>
            </div>
            <Form method="post" className="space-y-6">
                <div className="space-y-5">
                    <div className="space-y-2">
                        <SignUpPageInput
                            id="name"
                            name="name"
                            label="Ваше настоящее имя"
                            placeholder="Иван"
                        />
                        <ErrorMessageComponent errorMessage={fieldError?.forField("name")} />
                    </div>
                    <div className="space-y-2">
                        <SignUpPageInput
                            id="email"
                            name="email"
                            type="email"
                            label="Почта"
                            placeholder="email@example.com"
                        />
                        <ErrorMessageComponent errorMessage={fieldError?.forField("email")} />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block font-medium text-gray-700">
                            Пароль
                        </label>
                        <AuthPasswordInput id="password" />
                        <ErrorMessageComponent errorMessage={fieldError?.forField("password")} />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="passwordConfirmation"
                            className="block font-medium text-gray-700"
                        >
                            Подтвердите пароль
                        </label>
                        <AuthPasswordInput id="passwordConfirmation" />
                        <ErrorMessageComponent
                            errorMessage={fieldError?.forField("passwordConfirmation")}
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <Checkbox isChecked={agree} onClick={() => setAgree(!agree)} />
                        <label htmlFor="agree" className="text-gray-700">
                            Согласие на обработку персональных данных
                        </label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Checkbox isChecked={subscribe} onClick={() => setSubscribe(!subscribe)} />
                        <label htmlFor="subscribe" className="text-gray-700">
                            Получать уведомления об акциях и скидках
                        </label>
                    </div>
                </div>

                <SubmittingButton text="Создать аккаунт" />
            </Form>
            <div className="text-center space-y-2">
                <p className="text-sm text-gray-700">
                    Уже зарегистрированы?{" "}
                    <Link to="/sign-in" className="text-blue-500 hover:underline">
                        Войдите в аккаунт
                    </Link>
                </p>
            </div>
        </div>
    );
}
