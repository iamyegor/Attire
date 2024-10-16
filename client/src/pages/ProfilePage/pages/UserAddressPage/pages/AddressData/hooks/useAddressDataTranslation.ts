// useAddressDataTranslation.ts
import { useMemo } from "react";

const addressDataTranslations = [
    {
        locale: "en",
        deliveryAddress: "Delivery Address",
        city: "City",
        postIndex: "Postal Code",
        street: "Street",
        house: "House",
        flat: "Apartment",
        changeAddress: "Change delivery address",
        addAddress: "Add address",
    },
    {
        locale: "ru",
        deliveryAddress: "Адрес доставки",
        city: "Населенный пункт",
        postIndex: "Почтовый индекс",
        street: "Улица",
        house: "Дом",
        flat: "Квартира",
        changeAddress: "Изменить адрес доставки",
        addAddress: "Добавить адрес",
    },
];

export type AddressDataTranslation = (typeof addressDataTranslations)[0];

export default function useAddressDataTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            addressDataTranslations.find((translation) => translation.locale === currentLanguage) ??
            addressDataTranslations[0]
        );
    }, [currentLanguage]);
}
