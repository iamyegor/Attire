import { useMemo } from "react";

const passwordResetTranslations = [
    {
        locale: "en",
        title: "Reset your password",
        description:
            "Enter the email address associated with your account and we'll send you instructions to reset your password.",
        emailLabel: "Email",
        emailPlaceholder: "For example: myemail@example.com",
        submitButton: "Send",
    },
    {
        locale: "ru",
        title: "Восстановите пароль",
        description: "Укажите почту на которую мы отправим инструкцию по восстановлению пароля",
        emailLabel: "Почта",
        emailPlaceholder: "Например: myemail@example.com",
        submitButton: "Отправить",
    },
];

export type PasswordResetTranslation = (typeof passwordResetTranslations)[0];

export default function usePasswordResetTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            passwordResetTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? passwordResetTranslations[0]
        );
    }, [currentLanguage]);
}
