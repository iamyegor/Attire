const homePageTranslations = [
    {
        locale: "en",
        new: "New",
        recommended: "Recommended for you",
    },
    {
        locale: "ru",
        new: "Новинки",
        recommended: "Вам может понравиться",
    },
];

export type HomePageTranslation = (typeof homePageTranslations)[0];

export default function useHomePageTranslation() {
    const currentLanguage = window.uiLanguage;
    return (
        homePageTranslations.find((translation) => translation.locale === currentLanguage) ?? null
    );
}
