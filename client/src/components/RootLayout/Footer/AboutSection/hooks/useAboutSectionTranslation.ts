import { useMemo } from "react";

const aboutSectionTranslations = [
    {
        locale: "en",
        title: "We are Attire",
        description:
            "Attire is a convenient online store offering clothing for any occasion and weather condition. Our products help customers express their individuality and create unique looks. We strive to make your shopping experience comfortable and enjoyable.",
        phoneNumber: "8 800 777-4-999",
        workingHours: "7:00 AM – 10:00 PM MSK",
        developedBy: "Developed by",
        developer: { name: "Denis", link: "https://upwork.com" },
    },
    {
        locale: "ru",
        title: "Мы - Attire",
        description:
            "Attire — это удобный интернет-магазин, предлагающий одежду для любых случаев жизни и погодных условий. Наша продукция помогает покупателям выразить свою индивидуальность и создавать уникальные образы. Мы стремимся сделать ваш шопинг комфортным и приятным.",
        phoneNumber: "8 800 777-4-999",
        workingHours: "7:00 – 22:00 МСК",
        developedBy: "Разработано",
        developer: { name: "GDigital", link: "https://kwork.ru/user/gd1g1tal" },
    },
];

export type AboutSectionTranslation = (typeof aboutSectionTranslations)[0];

export default function useAboutSectionTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            aboutSectionTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? aboutSectionTranslations[0]
        );
    }, [currentLanguage]);
}
