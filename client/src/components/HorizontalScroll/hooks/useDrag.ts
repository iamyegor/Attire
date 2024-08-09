import { useState, useRef, useCallback } from "react";

export default function useDrag() {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [hasDragged, setHasDragged] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const DRAG_THRESHOLD = 15;

    const startDrag = useCallback((clientX: number) => {
        setIsDragging(true);
        setHasDragged(false);
        if (scrollContainerRef.current) {
            setStartX(clientX - scrollContainerRef.current.offsetLeft);
            setScrollLeft(scrollContainerRef.current.scrollLeft);
        }
    }, []);

    const moveDrag = useCallback(
        (clientX: number) => {
            if (!isDragging || !scrollContainerRef.current) return;
            const x = clientX - scrollContainerRef.current.offsetLeft;
            const walk = x - startX;
            scrollContainerRef.current.scrollLeft = scrollLeft - walk;

            if (Math.abs(walk) > DRAG_THRESHOLD) {
                setHasDragged(true);
            }
        },
        [isDragging, startX, scrollLeft],
    );

    const endDrag = useCallback(() => {
        setIsDragging(false);
    }, []);

    return {
        scrollContainerRef,
        isDragging,
        hasDragged,
        startDrag,
        moveDrag,
        endDrag,
    };
}
