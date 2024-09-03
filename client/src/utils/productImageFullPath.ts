import { useMemo } from "react";

export default function productImageFullPath(imagePath: string) {
    const path =
        import.meta.env.MODE === "production" ? "/images/" : "/products/images/";

    return useMemo(
        () => "https://" + import.meta.env.VITE_BACKEND_ADDRESS + path + imagePath,
        [imagePath],
    );
}
