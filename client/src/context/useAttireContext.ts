import { useContext } from "react";
import { AttireContext } from "@/context/AttireProvider.tsx";

export default function useAttireContext() {
    const context = useContext(AttireContext);
    if (!context) {
        throw new Error("usePricingContext must be used within a PricingProvider");
    }

    return context;
}
