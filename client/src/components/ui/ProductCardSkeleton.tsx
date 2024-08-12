import BaseSkeleton from "@/components/ui/BaseSkeleton.tsx";

export default function ProductCardSkeleton() {
    return (
        <div className="w-full flex-shrink-0 p-4">
            <BaseSkeleton style={{ width: "100%", aspectRatio: "10/16" }}></BaseSkeleton>
        </div>
    );
}
