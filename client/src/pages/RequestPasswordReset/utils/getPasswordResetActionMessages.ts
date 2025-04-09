type ActionMessages = {
    invalidEmailFormat: string;
    successMessage: string;
    alreadyRequestedError: string;
    generalError: string;
};

const actionMessages = [
    {
        locale: "en",
        invalidEmailFormat: "Invalid email format",
        successMessage:
            "If there's an account with this email, we've sent password reset instructions to it.",
        alreadyRequestedError:
            "Password reset has already been requested. Please check your email and spam folder",
        generalError: "Please check if the user with this email exists and try again",
    },
    {
        locale: "ru",
        invalidEmailFormat: "Некорректный формат почты",
        successMessage:
            "Если пользователь с такой почтой существует, на нее было отправлено письмо с инструкциями по сбросу пароля",
        alreadyRequestedError: "Сброс пароля уже запрошен, проверьте вашу почту и папку спам",
        generalError:
            "Ошибка при запросе сброса пароля, проверьте, что пользователь с такой почтой существует и попробуйте снова",
    },
];

export function getPasswordResetActionMessages(locale: string): ActionMessages {
    return actionMessages.find((messages) => messages.locale === locale) || actionMessages[0];
}
