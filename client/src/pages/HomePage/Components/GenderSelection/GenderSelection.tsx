import men from "@/assets/men.webp";
import women from "@/assets/women.webp";
import GenderCard from "@/pages/HomePage/Components/GenderSelection/GenderCard.tsx";

export default function GenderSelection() {
    return (
        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5 mt-5">
            <GenderCard imageSrc={men} altText="Мужская коллекция" label="Мужчинам" route="men" />
            <GenderCard imageSrc={women} altText="Женская коллекция" label="Женщинам" route="women"/>
        </div>
    );
}
