import FlexibleSkeleton from "@/components/ui/FlexibleSkeleton.tsx";

export default function CartPageSkeleton() {
    return (
        <>
            <div className="w-full flex-1 lg:flex-1 lg:h-full">
                <FlexibleSkeleton />
            </div>
            <div className="w-full flex-1 lg:flex-none lg:w-[400px] lg:h-[400px]">
                <FlexibleSkeleton />
            </div>
        </>
    );
}
