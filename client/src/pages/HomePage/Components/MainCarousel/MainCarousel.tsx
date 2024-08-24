import carouselImage1 from "@/assets/main-carousel-1.webp";
import carouselImage2 from "@/assets/main-carousel-2.webp";
import { Carousel } from "react-responsive-carousel";
import CustomPrevArrow from "@/pages/HomePage/Components/MainCarousel/CustomPrevButton.tsx";
import CustomNextArrow from "@/pages/HomePage/Components/MainCarousel/CustomNextArrow.tsx";
import CustomIndicator from "@/pages/HomePage/Components/MainCarousel/CustomIndicator.tsx";

export default function MainCarousel() {
    const elements = [
        { image: carouselImage1, text: "Мужская дизайнерская одежда" },
        { image: carouselImage2, text: "Женская дизайнерская одежда" },
    ];

    return (
        <Carousel
            className="relative"
            showStatus={false}
            showThumbs={false}
            renderArrowPrev={CustomPrevArrow}
            renderArrowNext={CustomNextArrow}
            renderIndicator={CustomIndicator}
        >
            {elements.map((e, index) => (
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center px-16">
                        <h1 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl text-white font-medium">{e.text}</h1>
                    </div>
                    <img
                        key={index}
                        className="h-[280px] sm:h-[330px] md:h-[500px] lg:h-[600px] object-cover lg:object-cover rounded-xl"
                        src={e.image}
                        alt="Carousel item"
                        style={{ userSelect: "none" }}
                        draggable={false}
                    />
                </div>
            ))}
        </Carousel>
    );
}
