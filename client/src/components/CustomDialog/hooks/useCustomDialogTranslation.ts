import { useMemo } from "react";

const dialogTranslations = [
    {
        locale: "en",
        close: "Close",
    },
    {
        locale: "ru",
        close: "Закрыть",
    },
];

export type DialogTranslation = (typeof dialogTranslations)[0];

export default function useCustomDialogTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            dialogTranslations.find((translation) => translation.locale === currentLanguage) ??
            dialogTranslations[0]
        );
    }, [currentLanguage]);
}
