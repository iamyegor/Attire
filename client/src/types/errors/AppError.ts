export default class AppError extends Error {
    title: string;

    private constructor(title: string, message: string) {
        super(message);
        this.title = title;
    }

    static unexpected(): AppError {
        const errorTitle =
            window.uiLanguage === "en" ? "Something went wrong" : "Что-то пошло не так";
        const errorMessage =
            window.uiLanguage === "en"
                ? "Please try again later."
                : "Пожалуйста, попробуйте еще раз.";
        return new AppError(errorTitle, errorMessage);
    }

    static serverError(): AppError {
        const errorTitle = window.uiLanguage === "en" ? "500! Server error" : "500! Ошибка сервера";
        const errorMessage =
            window.uiLanguage === "en"
                ? "Error on our side. Please try again later."
                : "Ошибка на нашей стороне. Пожалуйста, попробуйте позже.";
        return new AppError(errorTitle, errorMessage);
    }
}
