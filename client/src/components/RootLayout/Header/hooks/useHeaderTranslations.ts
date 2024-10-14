export const headerTranslations = [
    {
        locale: "en",
        new: "New",
        men: "Men",
        women: "Women",
        search: "Search",
    },
    {
        locale: "ru",
        new: "Новинки",
        men: "Мужчинам",
        women: "Женщинам",
        search: "Искать",
    },
];

export type HeaderTranslation = (typeof headerTranslations)[0];
export default function useHeaderTranslations() {
    const currentLanguage = window.uiLanguage;
    return headerTranslations.find((translation) => translation.locale === currentLanguage) ?? null;
}
