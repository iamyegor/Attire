import { useMemo } from "react";

const categorySectionTranslations = [
    {
        locale: "en",
        men: "Men",
        women: "Women",
        new: "New",
    },
    {
        locale: "ru",
        men: "Мужчинам",
        women: "Женщинам",
        new: "Новинки",
    },
];

export type CategorySectionTranslation = (typeof categorySectionTranslations)[0];

export default function useCategorySectionTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            categorySectionTranslations.find((translation) => translation.locale === currentLanguage) ??
            categorySectionTranslations[0]
        );
    }, [currentLanguage]);
}
