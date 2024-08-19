import { useNavigation } from "react-router-dom";
import classNames from "classnames";
import LoadingSpinner from "@/components/ui/LoadingSpinner.tsx";

interface SubmittingButtonProps {
    text: string;
}

export default function SubmittingButton({ text }: SubmittingButtonProps) {
    const { state } = useNavigation();

    return (
        <button
            className={classNames(
                "w-full py-3 text-white rounded-lg transition flex justify-center items-center",
                {
                    "bg-neutral-500": state === "submitting",
                    "bg-blue-500 hover:bg-blue-600": state === "idle",
                },
            )}
            disabled={state === "submitting"}
        >
            {state === "submitting" ? <LoadingSpinner width={30} height={30} /> : text}
        </button>
    );
}
