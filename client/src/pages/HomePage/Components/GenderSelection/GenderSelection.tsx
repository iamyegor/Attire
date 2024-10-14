import men from "@/assets/men.webp";
import women from "@/assets/women.webp";
import GenderCard from "@/pages/HomePage/Components/GenderSelection/GenderCard.tsx";
import useGenderSelectionTranslation from "./hooks/useGenderSelectionTranslation";

export default function GenderSelection() {
    const t = useGenderSelectionTranslation();

    return (
        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5 mt-5">
            <GenderCard
                imageSrc={men}
                altText={t?.menAlt ?? ""}
                label={t?.menLabel ?? ""}
                route="/catalog/men"
            />
            <GenderCard
                imageSrc={women}
                altText={t?.womenAlt ?? ""}
                label={t?.womenLabel ?? ""}
                route="/catalog/women"
            />
        </div>
    );
}
