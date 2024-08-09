import manInSuit from "@/assets/man_in_suit.webp";
import manInSuit2 from "@/assets/man_in_suit_2.webp";
import { Carousel } from "react-responsive-carousel";
import CustomPrevArrow from "@/pages/HomePage/Components/MainCarousel/CustomPrevButton.tsx";
import CustomNextArrow from "@/pages/HomePage/Components/MainCarousel/CustomNextArrow.tsx";
import CustomIndicator from "@/pages/HomePage/Components/MainCarousel/CustomIndicator.tsx";

export default function MainCarousel() {
    const images = [manInSuit, manInSuit2];
    return (
        <Carousel
            className="relative"
            showStatus={false}
            showThumbs={false}
            renderArrowPrev={CustomPrevArrow}
            renderArrowNext={CustomNextArrow}
            renderIndicator={CustomIndicator}
        >
            {images.map((src, index) => (
                <img
                    key={index}
                    className="h-[280px] sm:h-[330px] md:h-[500px] lg:h-[600px] object-fit lg:object-cover rounded-xl"
                    src={src}
                    alt="Carousel item"
                    style={{ userSelect: "none" }}
                    draggable={false}
                />
            ))}
        </Carousel>
    );
}
