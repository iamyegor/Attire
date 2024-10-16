import { useMemo } from "react";

const signInTranslations = [
    {
        locale: "en",
        title: "Sign In",
        welcome: "Welcome back! 👋",
        orSignInWithEmail: "Or sign in with email",
        email: "Email",
        emailPlaceholder: "For example: myemail@example.com",
        password: "Password",
        rememberMe: "Remember me",
        forgotPassword: "Forgot password",
        signIn: "Sign In",
        notRegistered: "Not registered yet?",
        createAccount: "Create an account",
    },
    {
        locale: "ru",
        title: "Войти",
        welcome: "Добро пожаловать обратно! 👋",
        orSignInWithEmail: "Или войдите с почтой",
        email: "Почта",
        emailPlaceholder: "Например: myemail@example.com",
        password: "Пароль",
        rememberMe: "Запомнить меня",
        forgotPassword: "Не помню пароль",
        signIn: "Войти",
        notRegistered: "Еще не зарегистрированы?",
        createAccount: "Создайте аккаунт",
    },
];

export type SignInTranslation = (typeof signInTranslations)[0];

export default function useSignInTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            signInTranslations.find((translation) => translation.locale === currentLanguage) ??
            signInTranslations[0]
        );
    }, [currentLanguage]);
}
