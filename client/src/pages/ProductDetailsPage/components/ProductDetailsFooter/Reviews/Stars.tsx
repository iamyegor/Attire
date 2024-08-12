import YellowStarSvg from "@/assets/yellow-star.svg?react";
import GrayStarSvg from "@/assets/gray-star.svg?react";
import HalfStarSvg from "@/assets/half-star.svg?react";

interface StarsProps {
    stars: number;
    starClass: string;
}

export default function Stars({ stars, starClass }: StarsProps) {
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 !== 0;
    const grayStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex space-x-1">
            {Array.from({ length: fullStars }).map((_, index) => (
                <YellowStarSvg className={starClass} key={`yellow-${index}`} />
            ))}
            {hasHalfStar && <HalfStarSvg className={starClass} />}
            {Array.from({ length: grayStars }).map((_, index) => (
                <GrayStarSvg className={starClass} key={`gray-${index}`} />
            ))}
        </div>
    );
}
