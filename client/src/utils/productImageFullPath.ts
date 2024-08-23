import { useMemo } from "react";

export default function productImageFullPath(imagePath: string) {
    return useMemo(
        () => "https://" + import.meta.env.VITE_BACKEND_ADDRESS + "/products/images/" + imagePath,
        [imagePath],
    );
}
