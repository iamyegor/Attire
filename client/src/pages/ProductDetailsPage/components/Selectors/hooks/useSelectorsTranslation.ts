import { useMemo } from "react";

const selectorsTranslations = [
    {
        locale: "en",
        size: "Size",
    },
    {
        locale: "ru",
        size: "Размер",
    },
];

export type SelectorsTranslation = (typeof selectorsTranslations)[0];

export default function useSelectorsTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            selectorsTranslations.find((translation) => translation.locale === currentLanguage) ??
            selectorsTranslations[0]
        );
    }, [currentLanguage]);
}
