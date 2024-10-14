export const categoriesListTranslations = [
    {
        locale: "en",
        back: "Back",
        men: "Men",
        women: "Women",
        new: "New",
    },
    {
        locale: "ru",
        back: "Назад",
        men: "Мужчинам",
        women: "Женщинам",
        new: "Новинки",
    },
];

export type CategoriesListTranslation = (typeof categoriesListTranslations)[0];

export default function useTypesListTranslations() {
    const currentLanguage = window.uiLanguage;
    return (
        categoriesListTranslations.find((translation) => translation.locale === currentLanguage) ??
        null
    );
}
