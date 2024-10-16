import { useMemo } from "react";

const aboutProductTranslations = [
    {
        locale: "en",
        composition: "Composition",
        category: "Category",
        brand: "Brand",
        sku: "SKU",
    },
    {
        locale: "ru",
        composition: "Состав",
        category: "Категория",
        brand: "Бренд",
        sku: "Артикул",
    },
];

export type AboutProductTranslation = (typeof aboutProductTranslations)[0];

export default function useAboutProductTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            aboutProductTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? aboutProductTranslations[0]
        );
    }, [currentLanguage]);
}