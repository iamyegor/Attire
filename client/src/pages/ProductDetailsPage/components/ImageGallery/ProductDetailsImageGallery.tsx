import ImageLightbox from "@/pages/ProductDetailsPage/components/ImageGallery/ImageLightbox/ImageLightbox.tsx";
import productImageFullPath from "@/utils/productImageFullPath.ts";

interface ImageGalleryProps {
    images: string[];
}

export default function ProductDetailsImageGallery({ images }: ImageGalleryProps) {
    return (
        <div className="w-full md:flex-1">
            <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                {images.map((image) => (
                    <div key={image} className="overflow-hidden rounded-xl">
                        <img
                            src={productImageFullPath(image)}
                            style={{ aspectRatio: "10/16" }}
                            alt="Product image"
                            className="w-full h-full object-cover transition-transform transform hover:scale-105"
                        />
                    </div>
                ))}
            </div>
            <ImageLightbox images={images} />
        </div>
    );
}
