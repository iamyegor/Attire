interface ImageGalleryProps {
    images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    return (
        <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
    );
}
