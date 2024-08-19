import { useEffect } from "react";
import * as vk from "@vkid/sdk";
import { ConfigAuthMode } from "@vkid/sdk";
import VkSvg from "@/assets/vk.svg?react";

export default function VkLoginButton() {
    useEffect(() => {
        const loginButton = document.getElementById("vkSignInButton");
        if (loginButton) {
            loginButton.onclick = () => vk.Auth.login();
        }

        vk.Config.init({
            app: 52158113,
            redirectUrl: import.meta.env.VITE_VK_AUTH_REDIRECT_URL,
            state: "just_a_random_state_united_state",
            codeVerifier: "super_random_code_verifier",
            mode: ConfigAuthMode.Redirect,
        });
    }, []);

    return (
        <button
            id="vkSignInButton"
            type="button"
            className="flex w-full items-center justify-center space-x-2 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition"
        >
            <VkSvg className="w-6 h-6" />
            <span className="font-medium text-gray-900">Войти с помощью VK</span>
        </button>
    );
}
