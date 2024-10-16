import { useMemo } from "react";

const productDetailsFooterTranslations = [
    {
        locale: "en",
        about: "About product",
        reviews: "Reviews",
    },
    {
        locale: "ru",
        about: "О товаре",
        reviews: "Отзывы",
    },
];

export type ProductDetailsFooterTranslation = (typeof productDetailsFooterTranslations)[0];

export default function useProductDetailsFooterTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            productDetailsFooterTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? productDetailsFooterTranslations[0]
        );
    }, [currentLanguage]);
}
