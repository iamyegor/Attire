import ImageLightbox from "@/pages/ProductDetailsPage/components/ImageGallery/ImageLightbox/ImageLightbox.tsx";

interface ImageGalleryProps {
    images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    return (
        <div className="w-full md:flex-1">
            <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                {images.map((image) => (
                    <div key={image} className="overflow-hidden rounded-xl">
                        <img
                            src={image}
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
