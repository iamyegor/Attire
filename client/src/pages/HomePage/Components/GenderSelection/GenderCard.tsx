import { Link } from "react-router-dom";

interface GenderCardProps {
    imageSrc: string;
    altText: string;
    label: string;
    route: string;
}

export default function GenderCard({ imageSrc, altText, label, route }: GenderCardProps) {
    return (
        <Link
            className="w-full h-[190px] xs:h-[300px] md:h-[250px] lg:h-[360px] xl:h-[430px] bg-neutral-200 rounded-lg relative"
            to={route}
        >
            <img className="w-full h-full object-cover rounded-md" src={imageSrc} alt={altText} />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl md:text-6xl xl:text-8xl text-center text-white rounded-lg">
                    {label}
                </span>
            </div>
        </Link>
    );
}
