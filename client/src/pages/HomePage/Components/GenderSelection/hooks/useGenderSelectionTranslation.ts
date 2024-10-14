
const genderSelectionTranslations = [
    {
        locale: "en",
        menLabel: "Men",
        menAlt: "Men's Collection",
        womenLabel: "Women",
        womenAlt: "Women's Collection",
    },
    {
        locale: "ru",
        menLabel: "Мужчинам",
        menAlt: "Мужская коллекция",
        womenLabel: "Женщинам",
        womenAlt: "Женская коллекция",
    },
];

export type GenderSelectionTranslation = (typeof genderSelectionTranslations)[0];

export default function useGenderSelectionTranslation() {
    const currentLanguage = window.uiLanguage;
    return (
        genderSelectionTranslations.find((translation) => translation.locale === currentLanguage) ??
        null
    );
}
