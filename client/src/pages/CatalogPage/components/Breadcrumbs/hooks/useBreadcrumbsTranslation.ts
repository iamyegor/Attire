import { useMemo } from "react";

const translations = [
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

export default function useBreadcrumbsTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(
        () =>
            translations.find((translation) => translation.locale === currentLanguage) ??
            translations[0],
        [currentLanguage],
    );
}
