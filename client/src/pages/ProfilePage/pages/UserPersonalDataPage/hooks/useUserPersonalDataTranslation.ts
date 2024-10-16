import { useMemo } from "react";

const userPersonalDataTranslations = [
    {
        locale: "en",
        personalData: "Personal Data",
        loading: "Loading data...",
        dataNotLoaded: "Data not loaded",
        name: "Name",
        email: "Email",
        changePersonalData: "Change personal data",
        changePassword: "Change password",
    },
    {
        locale: "ru",
        personalData: "Личные данные",
        loading: "Загрузка данных...",
        dataNotLoaded: "Данные не загружены",
        name: "Имя",
        email: "Почта",
        changePersonalData: "Изменить личные данные",
        changePassword: "Изменить пароль",
    },
];

export type UserPersonalDataTranslation = (typeof userPersonalDataTranslations)[0];

export default function useUserPersonalDataTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            userPersonalDataTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? userPersonalDataTranslations[0]
        );
    }, [currentLanguage]);
}
