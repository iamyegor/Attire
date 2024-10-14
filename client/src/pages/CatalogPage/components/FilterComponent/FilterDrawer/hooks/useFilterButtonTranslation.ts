import { useMemo } from "react";

const filterButtonTranslations = [
    {
        locale: "en",
        filters: "Filters",
    },
    {
        locale: "ru",
        filters: "Фильтры",
    },
];

export type FilterButtonTranslation = (typeof filterButtonTranslations)[0];

export default function useFilterButtonTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            filterButtonTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? filterButtonTranslations[0]
        );
    }, [currentLanguage]);
}
