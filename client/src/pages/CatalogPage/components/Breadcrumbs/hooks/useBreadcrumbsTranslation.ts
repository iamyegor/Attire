import { useMemo } from "react";

const breadcrumbsTranslations = [
    {
        locale: "en",
        home: "Home",
        men: "Men",
        women: "Women",
        new: "New",
    },
    {
        locale: "ru",
        home: "Главная",
        men: "Мужчинам",
        women: "Женщинам",
        new: "Новинки",
    },
];

export type BreadcrumbsTranslation = (typeof breadcrumbsTranslations)[0];

export default function useBreadcrumbsTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            breadcrumbsTranslations.find((translation) => translation.locale === currentLanguage) ??
            breadcrumbsTranslations[0]
        );
    }, [currentLanguage]);
}
