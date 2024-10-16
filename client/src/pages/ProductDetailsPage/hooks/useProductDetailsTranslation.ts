import { useMemo } from "react";

const productDetailsTranslations = [
    {
        locale: "en",
        freeDelivery: "Free delivery from $0",
        loading: "Loading...",
        failedToLoad: "Failed to load product",
    },
    {
        locale: "ru",
        freeDelivery: "Бесплатная доставка от 0 ₽",
        loading: "Загрузка...",
        failedToLoad: "Не удалось загрузить товар",
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
