import newCollectionImage from "@/assets/new-collection.webp";
import { NavLink } from "react-router-dom";

export default function NewCollection() {
    return (
        <NavLink to="catalog/new" className="relative w-full h-[200px] xs:h-[270px] sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[740px]">
            <img
                className="w-full h-full object-cover rounded-md"
                src={newCollectionImage}
                alt={"Новая коллекция"}
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl md:text-6xl text-center text-white px-4 py-2 rounded-lg">
                    Новая коллекция
                </span>
            </div>
        </NavLink>
    );
}
