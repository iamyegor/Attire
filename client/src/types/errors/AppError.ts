export default class AppError extends Error {
    title: string;

    private constructor(title: string, message: string) {
        super(message);
        this.title = title;
    }

    static unexpected(): AppError {
        return new AppError("Какая-то Ошибка", "Что-то пошло не так. Пожалуйста, попробуйте еще раз.");
    }

    static serverError(): AppError {
        return new AppError("500! Ошибка сервера", "Ошибка на нашей стороне. Пожалуйста, попробуйте позже.");
    }
}
