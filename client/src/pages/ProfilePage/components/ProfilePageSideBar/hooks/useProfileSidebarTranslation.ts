import { useMemo } from "react";

const profileSidebarTranslations = [
    {
        locale: "en",
        orderHistory: "Order History",
        deliveryAddress: "Delivery Address",
        personalData: "Personal Data",
        logout: "Logout",
    },
    {
        locale: "ru",
        orderHistory: "История заказов",
        deliveryAddress: "Адрес доставки",
        personalData: "Личные данные",
        logout: "Выход",
    },
];

export type ProfileSidebarTranslation = (typeof profileSidebarTranslations)[0];

export default function useProfileSidebarTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            profileSidebarTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? profileSidebarTranslations[0]
        );
    }, [currentLanguage]);
}
