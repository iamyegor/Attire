import { useMemo } from "react";

const footerTranslations = [
    {
        locale: "en",
        company: "COMPANY",
        about: "About the brand",
        career: "Career",
        blog: "Blog",
        contacts: "Contacts",
        rules: "RULES",
        privacyPolicy: "Privacy Policy",
        publicOffer: "Public Offer",
        forBuyer: "FOR BUYERS",
        delivery: "Delivery",
        payment: "Payment",
        returns: "Returns",
        sizeChart: "Size Chart",
        rights: "© Attire 2024. All rights reserved.",
    },
    {
        locale: "ru",
        company: "КОМПАНИЯ",
        about: "О бренде",
        career: "Карьера",
        blog: "Блог",
        contacts: "Контакты",
        rules: "ПРАВИЛА",
        privacyPolicy: "Политика конфиденциальности",
        publicOffer: "Публичная оферта",
        forBuyer: "ПОКУПАТЕЛЮ",
        delivery: "Доставка",
        payment: "Оплата",
        returns: "Возврат",
        sizeChart: "Таблица размеров",
        rights: "© Attire 2024. Все права защищены.",
    },
];

export type FooterTranslation = (typeof footerTranslations)[0];

export default function useFooterTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            footerTranslations.find((translation) => translation.locale === currentLanguage) ??
            footerTranslations[0]
        );
    }, [currentLanguage]);
}
