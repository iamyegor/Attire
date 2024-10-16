import { useMemo } from "react";

const vkLoginButtonTranslations = [
    {
        locale: "en",
        signInWithVk: "Sign in with VK",
    },
    {
        locale: "ru",
        signInWithVk: "Войти с помощью VK",
    },
];

export type VkLoginButtonTranslation = (typeof vkLoginButtonTranslations)[0];

export default function useVkLoginButtonTranslation() {
    const currentLanguage = window.uiLanguage;

    return useMemo(() => {
        return (
            vkLoginButtonTranslations.find(
                (translation) => translation.locale === currentLanguage,
            ) ?? vkLoginButtonTranslations[0]
        );
    }, [currentLanguage]);
}
