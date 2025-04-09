import { useRouteError } from "react-router-dom";
import { useState } from "react";
import AppError from "@/types/errors/AppError.ts";

export default function ErrorPage() {
    const error = useRouteError() as AppError;
    const [message, _setMessage] = useState<string>(error.message);
    const [title, _setTitle] = useState<string>(error.title);

    function reloadPage() {
        window.location.reload();
    }

    return (
        <div className="h-full flex flex-col md:flex-row items-center justify-center p-6">
            <div className="flex flex-col items-center md:items-start">
                <h1 className="text-8xl font-medium italic mb-8" data-testid="ErrorPage.Title">
                    {title}
                </h1>
                <div
                    className="text-lg max-w-[500px] mb-10 text-center md:text-left mx-4 
                    md:mx-0"
                    data-testid="ErrorMessage.Message"
                >
                    {message}
                </div>
                <div className="flex space-x-4 w-full">
                    <button
                        onClick={reloadPage}
                        data-testid="ErrorPage.ReloadButton"
                        className="bg-blue-500 w-full sm:w-min whitespace-nowrap hover:bg-blue-600 text-white font-medium py-3 px-2 sm:px-6 rounded-xl"
                    >
                        {window.uiLanguage === "en" ? "Reload page" : "Перезагрузить страницу"}
                    </button>
                </div>
            </div>
        </div>
    );
}
