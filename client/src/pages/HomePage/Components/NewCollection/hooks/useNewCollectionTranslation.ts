const newCollectionTranslation = [
    {
        locale: "en",
        new: "New",
        newCollection: "New Collection",
    },
    {
        locale: "ru",
        newCollection: "Новая коллекция",
    },
];

export type NewCollectionTranslation = (typeof newCollectionTranslation)[0];

export default function useNewCollectionTranslation() {
    const currentLanguage = window.uiLanguage;
    return (
        newCollectionTranslation.find((translation) => translation.locale === currentLanguage) ??
        null
    );
}
