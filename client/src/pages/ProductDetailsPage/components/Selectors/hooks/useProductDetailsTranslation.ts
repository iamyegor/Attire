import { useMemo } from "react";

const productDetailsTranslations = [
    {
        locale: "en",
        addToCart: "Add to Cart",
        goToCart: "Go to Cart",
        loading: "Loading...",
    },
    {
        locale: "ru",
        addToCart: "Добавить в корзину",
        goToCart: "В корзину",
        loading: "Загрузка...",
    },
];

export type ProductDetailsTranslation = (typeof productDetailsTranslations)[0];

export default function useProductDetailsTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            productDetailsTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? productDetailsTranslations[0]
        );
    }, [currentLanguage]);
}
