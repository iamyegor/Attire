import ArrowIcon from "@/pages/HomePage/Components/MainCarousel/ArrowIcon.tsx";

export default function ImageLightBoxNextArrow() {
    return (
        <button
            type="button"
            className="bg-white text-black p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-neutral-400 z-10"
        >
            <ArrowIcon direction="right" />
        </button>
    );
}
