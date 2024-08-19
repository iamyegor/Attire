import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import signInWithVk from "@/pages/VkAuthRedirectPage/utils/signInWithVk.ts";
import { useMutation } from "@tanstack/react-query";
import ErrorMessageComponent from "@/components/ui/ErrorMessageComponent.tsx";
import ErrorMessage from "@/types/errors/ErrorMessage.ts";
import LoadingSpinner from "@/components/ui/LoadingSpinner.tsx";
import VkSvg from "@/assets/vk.svg?react";

export default function VkAuthRedirectPage() {
    const [errorMessage, setErrorMessage] = useState<ErrorMessage | null>(null);

    const handleVkSignInMutation = useMutation({
        mutationFn: handleVkSignIn,
        onSuccess: (errorMsg) => {
            if (errorMsg) {
                setErrorMessage(errorMsg);
            }
        },
    });
    const navigate = useNavigate();

    async function handleVkSignIn() {
        const searchParams = new URLSearchParams(window.location.search);
        const code: string | null = searchParams.get("code");
        const deviceId: string | null = searchParams.get("device_id");
        const state: string | null = searchParams.get("state");

        if (!code || !deviceId || state !== "just_a_random_state_united_state") {
            navigate("/");
            return null;
        }

        return await signInWithVk(code, deviceId, navigate);
    }

    useEffect(() => {
        handleVkSignInMutation.mutate();
    }, []);

    return (
        <div className="flex h-full w-full justify-center items-center flex-col">
            {handleVkSignInMutation.isPending ? (
                <div className="relative flex justify-center items-center">
                    <LoadingSpinner
                        color="#2787f5"
                        secondaryColor="#83bcfc"
                        width={90}
                        height={90}
                    />
                    <VkSvg className="absolute w-11 h-11" />
                </div>
            ) : (
                <ErrorMessageComponent errorMessage={errorMessage?.value} />
            )}
        </div>
    );
}
