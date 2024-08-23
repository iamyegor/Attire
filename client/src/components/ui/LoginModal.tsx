import React from "react";
import CustomDialog from "@/components/ui/CustomDialog.tsx";
import UserSvg from "@/assets/user.svg?react";

interface LoginModalInterface {
    isLoginModalShown: boolean;
    hideLoginModal: () => void;
    type: "cart" | "like";
}

export default function LoginModal({
    isLoginModalShown,
    hideLoginModal,
    type,
}: LoginModalInterface) {
    const texts = {
        cart: "Чтобы добавить товар в корзину, пожалуйста, войдите в систему. Это позволит вам сохранить ваши товары и легко их найти позже.",
        like: "Чтобы добавить товар в избранное, пожалуйста, войдите в систему. Это позволит вам сохранить ваши любимые товары и легко их найти позже.",
    };

    return (
        <CustomDialog
            isOpen={isLoginModalShown}
            onClose={hideLoginModal}
            auxiliaryButton={<SignInButton />}
        >
            <div className="flex flex-col items-center py-2 p-6 space-y-3">
                <UserSvg className="w-6 h-6" />
                <h2 className="text-xl font-semibold">Требуется Авторизация</h2>
                <p className="text-center text-gray-700">{texts[type]}</p>
            </div>
        </CustomDialog>
    );
}

function SignInButton() {
    return (
        <a
            href="/sign-in"
            target="_blank"
            className="bg-green-500 text-white rounded-xl px-6 py-2 font-medium hover:bg-green-600 focus:outline-none transition"
        >
            Войти
        </a>
    );
}
