import { useMemo } from "react";

const productDetailsActionsTranslations = [
    {
        locale: "en",
        addToCart: "Add to Cart",
        goToCart: "Go to Cart",
    },
    {
        locale: "ru",
        addToCart: "Добавить в корзину",
        goToCart: "В корзину",
    },
];

export type ProductDetailsActionsTranslation = (typeof productDetailsActionsTranslations)[0];

export default function useProductDetailsActionsTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            productDetailsActionsTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? productDetailsActionsTranslations[0]
        );
    }, [currentLanguage]);
}
