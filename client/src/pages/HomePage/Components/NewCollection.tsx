import newCollectionImage from "@/assets/new-collection.webp";
import { NavLink } from "react-router-dom";

export default function NewCollection() {
    return (
        <NavLink
            to="catalog/new"
            className="relative w-full max-h-[620px] 2xl:max-h-[800px] aspect-square sm:aspect-video"
        >
            <img
                className="w-full h-full object-cover rounded-md"
                src={newCollectionImage}
                alt={"Новая коллекция"}
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-medium text-3xl xs:text-4xl sm:text-6xl text-center text-white px-4 py-2 rounded-lg">
                    Новая коллекция
                </span>
            </div>
        </NavLink>
    );
}
