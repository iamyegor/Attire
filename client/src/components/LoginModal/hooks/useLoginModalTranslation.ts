import { useMemo } from "react";

const loginModalTranslations = [
    {
        locale: "en",
        title: "Authorization Required",
        cart: "To add an item to your cart, please log in. This will allow you to save your items and easily find them later.",
        like: "To add an item to your favorites, please log in. This will allow you to save your favorite items and easily find them later.",
        signIn: "Sign In",
    },
    {
        locale: "ru",
        title: "Требуется Авторизация",
        cart: "Чтобы добавить товар в корзину, пожалуйста, войдите в систему. Это позволит вам сохранить ваши товары и легко их найти позже.",
        like: "Чтобы добавить товар в избранное, пожалуйста, войдите в систему. Это позволит вам сохранить ваши любимые товары и легко их найти позже.",
        signIn: "Войти",
    },
];

export type LoginModalTranslation = (typeof loginModalTranslations)[0];

export default function useLoginModalTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            loginModalTranslations.find((translation) => translation.locale === currentLanguage) ??
            loginModalTranslations[0]
        );
    }, [currentLanguage]);
}
