interface FeaturedImageProps {
    imageSrc: string;
    text: string;
}

export default function FeaturedImage({ imageSrc, text }: FeaturedImageProps) {
    return (
        <div className="relative w-full h-[200px] xs:h-[270px] sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[740px]">
            <img className="w-full h-full object-cover rounded-md" src={imageSrc} alt={text} />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl md:text-6xl font-thin text-center text-white bg-purple-400/50 backdrop-blur px-4 py-2 rounded-lg">
                    {text}
                </span>
            </div>
        </div>
    );
}
