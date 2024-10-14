const mainCarouselTranslations = [
    {
        locale: "en",
        menElement: "Men's Designer Clothing",
        womenElement: "Women's Designer Clothing",
    },
    {
        locale: "ru",
        menElement: "Мужская Дизайнерская Одежда",
        womenElement: "Женская Дизайнерская Одежда",
    },
];

export type MainCarouselTranslation = (typeof mainCarouselTranslations)[0];

export default function useMainCarouselTranslation() {
    const currentLanguage = window.uiLanguage;
    return (
        mainCarouselTranslations.find((translation) => translation.locale === currentLanguage) ??
        null
    );
}
