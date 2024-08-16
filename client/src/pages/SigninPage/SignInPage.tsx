import VkSvg from "@/assets/vk.svg?react";
import { useState } from "react";
import SignInPasswordInput from "@/pages/SigninPage/components/SignInPasswordInput.tsx";
import { Link } from "react-router-dom";
import Checkbox from "@/pages/CartPage/components/Checkbox.tsx";

export default function SignInPage() {
    const [rememberMe, setRememberMe] = useState(false);
    
    return (
        <div className="relative mx-auto p-6 max-w-md bg-white rounded-2xl space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-900">Войти</h1>
                <p className="text-base text-gray-500 mt-1">Добро пожаловать обратно! 👋</p>
            </div>

            <button className="flex w-full items-center justify-center space-x-2 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition">
                <VkSvg className="w-6 h-6" />
                <span className="font-medium text-gray-900">Войти с помощью VK</span>
            </button>

            <div className="relative flex items-center justify-center">
                <div className="flex-1 h-px bg-gray-300" />
                <span className="px-4 text-gray-400">Или войдите с почтой</span>
                <div className="flex-1 h-px bg-gray-300" />
            </div>

            <div className="space-y-6">
                <div className="space-y-4">
                    <label htmlFor="email" className="block font-medium text-gray-700">
                        Почта или логин
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Например: myemail@example.com"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="space-y-4">
                    <label htmlFor="password" className="block font-medium text-gray-700">
                        Пароль
                    </label>
                    <SignInPasswordInput id="password" />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            isChecked={rememberMe}
                            onClick={() => setRememberMe(!rememberMe)}
                        />
                        <label htmlFor="rememberMe" className="text-gray-700">
                            Запомнить меня
                        </label>
                    </div>
                    <Link to="/forgot-password" className="text-blue-500 hover:underline">
                        Не помню пароль
                    </Link>
                </div>

                <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    Войти
                </button>
            </div>

            <div className="text-center space-y-2">
                <p className="text-sm text-gray-700">
                    Еще не зарегистрированы?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Создайте аккаунт
                    </Link>
                </p>
            </div>
        </div>
    );
}
