import { useMemo } from "react";

const addressFormTranslations = [
    {
        locale: "en",
        title: "Delivery Address",
        city: "City",
        cityPlaceholder: "Enter city",
        postIndex: "Postal Code",
        postIndexPlaceholder: "Enter postal code",
        street: "Street",
        streetPlaceholder: "Enter street",
        house: "House",
        housePlaceholder: "Enter house number",
        flat: "Apartment",
        flatPlaceholder: "Enter apartment number",
        saveChanges: "Save Changes",
        back: "Back",
        errors: {
            emptyCity: "You haven't filled in the city",
            emptyPostIndex: "You haven't filled in the postal code",
            invalidPostIndex: "You've entered an invalid postal code",
            emptyStreet: "You haven't filled in the street",
            emptyHouse: "You haven't filled in the house number",
            emptyFlat: "You haven't filled in the apartment number",
        },
    },
    {
        locale: "ru",
        title: "Адрес доставки",
        city: "Населенный пункт",
        cityPlaceholder: "Введите населенный пункт",
        postIndex: "Почтовый индекс",
        postIndexPlaceholder: "Введите почтовый индекс",
        street: "Улица",
        streetPlaceholder: "Введите улицу",
        house: "Дом",
        housePlaceholder: "Введите дом",
        flat: "Квартира",
        flatPlaceholder: "Введите квартиру",
        saveChanges: "Сохранить изменения",
        back: "Назад",
        errors: {
            emptyCity: "Вы не заполнили населенный пункт",
            emptyPostIndex: "Вы не заполнили почтовый индекс",
            invalidPostIndex: "Вы некорректно заполнили почтовый индекс",
            emptyStreet: "Вы не заполнили улицу",
            emptyHouse: "Вы не заполнили дом",
            emptyFlat: "Вы не заполнили квартиру",
        },
    },
];

export type AddressFormTranslation = (typeof addressFormTranslations)[0];

export default function useAddressFormTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            addressFormTranslations.find((translation) => translation.locale === currentLanguage) ??
            addressFormTranslations[0]
        );
    }, [currentLanguage]);
}
