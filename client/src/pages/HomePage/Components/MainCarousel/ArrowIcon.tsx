export default function ArrowIcon({ direction }: { direction: "left" | "right" }) {
    return (
        <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
            ></path>
        </svg>
    );
}
