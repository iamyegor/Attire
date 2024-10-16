import { useMemo } from "react";

const confirmEmailTranslations = [
    {
        locale: "en",
        title: "Confirm your email",
        description: "Enter the code we sent to",
        confirmButton: "Confirm",
        backButton: "Back",
        resendCode: "Resend code",
        countdownText: "You can resend the code in",
    },
    {
        locale: "ru",
        title: "Подтвердите почту",
        description: "Введите код который мы прислали на",
        confirmButton: "Подтвердить",
        backButton: "Назад",
        resendCode: "Отправить код повторно",
        countdownText: "Вы сможете отправить код повторно через",
    },
];

export type ConfirmEmailTranslation = (typeof confirmEmailTranslations)[0];

export default function useConfirmEmailTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            confirmEmailTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? confirmEmailTranslations[0]
        );
    }, [currentLanguage]);
}
