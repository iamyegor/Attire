import { useMemo } from "react";

const cartTranslations = [
    {
        locale: "en",
        cart: "Cart",
        items: "items",
        selectAllItems: "Select all items",
        emptyCart: "Cart is empty",
    },
    {
        locale: "ru",
        cart: "Корзина",
        items: "товары",
        selectAllItems: "Выбрать все товары",
        emptyCart: "Корзина пуста",
    },
];

export type CartTranslation = (typeof cartTranslations)[0];

export default function useCartTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            cartTranslations.find((translation) => translation.locale === currentLanguage) ??
            cartTranslations[0]
        );
    }, [currentLanguage]);
}
