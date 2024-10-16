import { useMemo } from "react";

const passwordInputTranslations = [
    {
        locale: "en",
        placeholder: "Enter password",
    },
    {
        locale: "ru",
        placeholder: "Введите пароль",
    },
];

export type PasswordInputTranslation = (typeof passwordInputTranslations)[0];

export default function usePasswordInputTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            passwordInputTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? passwordInputTranslations[0]
        );
    }, [currentLanguage]);
}
