interface ErrorMessageComponentProps {
    errorMessage?: string | null;
}

export default function ErrorMessageComponent({ errorMessage = null }: ErrorMessageComponentProps) {
    return <>{errorMessage && <div className="text-red-500 ">{errorMessage}</div>}</>;
}
