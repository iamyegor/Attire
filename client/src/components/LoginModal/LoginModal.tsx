import UserSvg from "@/assets/user.svg?react";
import CustomDialog from "@/components/ui/CustomDialog.tsx";
import LoginModalSignInButton from "./components/LoginModalSignInButton";
import useLoginModalTranslation from "./hooks/useLoginModalTranslation";

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
    const t = useLoginModalTranslation();

    return (
        <CustomDialog
            isOpen={isLoginModalShown}
            onClose={hideLoginModal}
            auxiliaryButton={<LoginModalSignInButton />}
        >
            <div className="flex flex-col items-center py-2 p-6 space-y-3">
                <UserSvg className="w-6 h-6" />
                <h2 className="text-xl font-semibold">{t.title}</h2>
                <p className="text-center text-gray-700">{t[type]}</p>
            </div>
        </CustomDialog>
    );
}
