import { useMemo } from "react";

const filterDrawerTranslations = [
    {
        locale: "en",
        sizes: "Sizes",
        colors: "Colors",
        materials: "Materials",
        apply: "Apply",
    },
    {
        locale: "ru",
        sizes: "Размеры",
        colors: "Цвета",
        materials: "Материалы",
        apply: "Применить",
    },
];

export type FilterDrawerTranslation = (typeof filterDrawerTranslations)[0];

export default function useFilterDrawerTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            filterDrawerTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? filterDrawerTranslations[0]
        );
    }, [currentLanguage]);
}
