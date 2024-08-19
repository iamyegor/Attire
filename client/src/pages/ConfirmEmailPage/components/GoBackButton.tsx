import { NavLink } from "react-router-dom";
import GoBackSvg from "@/assets/go-back.svg?react";

interface GoBackButtonProps {
    route: string;
    text: string;
}

export default function GoBackButton({ text, route }: GoBackButtonProps) {
    return (
        <button
            className="flex sm:flex-1 justify-center items-center bg-blue-500 p-3 rounded-lg hover:cursor-pointer hover:shadow-md h-[50px]"
            type="button"
        >
            <NavLink to={route} className="flex items-center space-x-2">
                <GoBackSvg className="w-5 h-5 mx-auto" />
                <span className="text-white">{text}</span>
            </NavLink>
        </button>
    );
}
