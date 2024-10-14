import { useMemo } from "react";

const categorySectionTranslations = [
    {
        locale: "en",
        categoryEmpty: "This category is empty",
    },
    {
        locale: "ru",
        categoryEmpty: "В этой категории пока нет товаров",
    },
];

export type CategorySectionTranslation = (typeof categorySectionTranslations)[0];

export default function useCategorySectionTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            categorySectionTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? categorySectionTranslations[0]
        );
    }, [currentLanguage]);
}
