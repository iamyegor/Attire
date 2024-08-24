import ArrowIcon from "@/pages/HomePage/Components/MainCarousel/ArrowIcon.tsx";

export default function CustomPrevArrow(clickHandler: () => void, hasPrev: boolean, label: string) {
    if (!hasPrev) return null;
    return (
        <button
            type="button"
            onClick={clickHandler}
            title={label}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-black p-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-300 z-10"
        >
            <ArrowIcon direction="left" />
        </button>
    );
}
