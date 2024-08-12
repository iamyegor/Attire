import { useState } from "react";
import ImageLightBoxNextArrow from "@/pages/ProductDetailsPage/components/ImageGallery/ImageLightbox/ImageLightBoxNextArrow.tsx";
import ImageLightBoxPrevArrow from "@/pages/ProductDetailsPage/components/ImageGallery/ImageLightbox/ImageLightBoxPrevArrow.tsx";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Lightbox from "yet-another-react-lightbox";

interface ImagesLightboxProps {
    images: string[];
}

export default function ImageLightbox({ images }: ImagesLightboxProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="visible md:hidden">
            <button onClick={() => setIsOpen(true)} className="w-full">
                <img
                    src={images[0]}
                    alt="Product image"
                    className="w-full object-cover"
                    style={{ aspectRatio: "10/16" }}
                />
            </button>
            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={images.map((image) => ({ src: image }))}
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
                render={{
                    iconPrev: () => <ImageLightBoxPrevArrow />,
                    iconNext: () => <ImageLightBoxNextArrow />,
                }}
                plugins={[Zoom]}
            />
        </div>
    );
}
