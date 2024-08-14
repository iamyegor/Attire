interface InputProps {
    value: string | number | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

function Input({ value, onChange, placeholder = "", className = "" }: InputProps) {
    return (
        <input
            className={
                "border-[#ccc] border-2 outline-none px-[8px] py-[10px] w-full rounded-[10px] text-[16px] " +
                className
            }
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e)}
        />
    );
}

export default Input;
