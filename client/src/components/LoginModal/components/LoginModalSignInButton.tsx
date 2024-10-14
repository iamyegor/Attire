import useLoginModalTranslation from "../hooks/useLoginModalTranslation";

export default function LoginModalSignInButton() {
    const t = useLoginModalTranslation();

    return (
        <a
            href="/sign-in"
            target="_blank"
            className="bg-green-500 text-white rounded-xl px-6 py-2 font-medium hover:bg-green-600 focus:outline-none transition"
        >
            {t.signIn}
        </a>
    );
}
