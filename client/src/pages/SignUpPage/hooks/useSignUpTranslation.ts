import { useMemo } from "react";

const signUpTranslations = [
    {
        locale: "en",
        title: "Sign Up",
        subtitle: "Create your new account",
        name: "Your real name",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm password",
        agree: "I agree to the processing of personal data",
        subscribe: "Receive notifications about promotions and discounts",
        createAccount: "Create account",
        alreadyRegistered: "Already registered?",
        signIn: "Sign in to your account",
        namePlaceholder: "John",
    },
    {
        locale: "ru",
        title: "Зарегистрироваться",
        subtitle: "Создайте свой новый аккаунт",
        name: "Ваше настоящее имя",
        email: "Почта",
        password: "Пароль",
        confirmPassword: "Подтвердите пароль",
        agree: "Согласие на обработку персональных данных",
        subscribe: "Получать уведомления об акциях и скидках",
        createAccount: "Создать аккаунт",
        alreadyRegistered: "Уже зарегистрированы?",
        signIn: "Войдите в аккаунт",
        namePlaceholder: "Иван",
    },
];

export type SignUpTranslation = (typeof signUpTranslations)[0];

export default function useSignUpTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            signUpTranslations.find((translation) => translation.locale === currentLanguage) ??
            signUpTranslations[0]
        );
    }, [currentLanguage]);
}
