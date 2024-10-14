export const typesListTranslations = [
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

export type TypesListTranslation = (typeof typesListTranslations)[0];

export default function useTypesListTranslations() {
    const currentLanguage = window.uiLanguage;
    return (
        typesListTranslations.find((translation) => translation.locale === currentLanguage) ?? null
    );
}
