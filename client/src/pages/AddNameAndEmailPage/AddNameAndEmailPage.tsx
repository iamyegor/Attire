import { Form, useActionData } from "react-router-dom";
import ErrorMessageComponent from "@/components/ui/ErrorMessageComponent.tsx";
import ErrorMessage from "@/types/errors/ErrorMessage.ts";
import SubmittingButton from "@/components/ui/SubmittingButton.tsx";

export default function AddNameAndEmailPage() {
    const errorMessage = useActionData() as ErrorMessage;

    return (
        <Form
            method="post"
            className="h-full flex flex-col justify-center mx-auto p-6 max-w-md bg-white rounded-2xl space-y-6"
        >
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-semibold text-gray-900">Дополнитель данные</h1>
                <p className="text-base text-gray-500">
                    Добавьте следующие данные чтобы продолжить, чтобы продолжить
                </p>
            </div>
            <div className="space-y-4">
                <label htmlFor="name" className="block font-medium text-gray-700">
                    Имя
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Например: Иван"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
                <label htmlFor="email" className="block font-medium text-gray-700">
                    Почта
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Например: myemail@example.com"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
                <ErrorMessageComponent errorMessage={errorMessage?.value} />
            </div>
            <SubmittingButton text="Добавить" />
        </Form>
    );
}
