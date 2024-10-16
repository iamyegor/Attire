import { useMemo } from "react";

const resendCodeTranslations = [
    {
        locale: "en",
        successMessage: "Confirmation code sent successfully!",
    },
    {
        locale: "ru",
        successMessage: "Код подтверждения отправлен успешно!",
    },
];

export type ResendCodeTranslation = (typeof resendCodeTranslations)[0];

export default function useResendCodeTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            resendCodeTranslations.find((translation) => translation.locale === currentLanguage) ??
            resendCodeTranslations[0]
        );
    }, [currentLanguage]);
}
