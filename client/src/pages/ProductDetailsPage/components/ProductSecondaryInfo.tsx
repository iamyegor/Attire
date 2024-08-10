import TruckSvg from "@/assets/truck.svg?react";

interface ProductDetailsInfoProps {
    deliveryText: string;
    description: string;
}

export default function ProductSecondaryInfo({
    deliveryText,
    description,
}: ProductDetailsInfoProps) {
    return (
        <div className="space-y-5">
            <div className="flex space-x-3">
                <TruckSvg className="w-6 h-6" />
                <p>{deliveryText}</p>
            </div>
            <p className="p-2 bg-neutral-200 rounded-lg">{description}</p>
        </div>
    );
}
