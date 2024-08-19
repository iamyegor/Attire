interface InputFieldProps {
    id: string;
    name: string;
    type?: string;
    label: string;
    placeholder: string;
}

export default function SignUpPageInput({
    id,
    name,
    type = "text",
    label,
    placeholder,
}: InputFieldProps) {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block font-medium text-gray-700">
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
        </div>
    );
}
