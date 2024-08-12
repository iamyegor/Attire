import EmptyHeartIcon from "@/assets/heart.svg?react";
import RedHeartIcon from "@/assets/heart-red.svg?react";
import React from "react";

interface LikeButtonProps {
    className?: string;
    isLiked: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function LikeButton({ className, isLiked, onClick }: LikeButtonProps) {
    return (
        <button
            className={`hover:cursor-pointer hover:scale-110 transition ${className}`}
            onClick={onClick}
        >
            {isLiked ? (
                <RedHeartIcon className="w-[90%] h-[90%]" />
            ) : (
                <EmptyHeartIcon className="w-[90%] h-[90%]" />
            )}
        </button>
    );
}
