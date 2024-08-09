import React, { useCallback } from "react";
import useDrag from "@/components/HorizontalScroll/hooks/useDrag.ts";

interface HorizontalScrollProps {
    children: React.ReactNode;
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
    const { scrollContainerRef, hasDragged, startDrag, moveDrag, endDrag } = useDrag();

    const handleMouseDown = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            startDrag(event.pageX);
        },
        [startDrag],
    );

    const handleMouseMove = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            moveDrag(event.pageX);
        },
        [moveDrag],
    );

    const handleTouchStart = useCallback(
        (event: React.TouchEvent<HTMLDivElement>) => {
            if (event.touches.length === 1) {
                startDrag(event.touches[0].pageX);
            }
        },
        [startDrag],
    );

    const handleTouchMove = useCallback(
        (event: React.TouchEvent<HTMLDivElement>) => {
            moveDrag(event.touches[0].pageX);
        },
        [moveDrag],
    );

    const preventClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (hasDragged) {
                event.preventDefault();
                event.stopPropagation();
            }
        },
        [hasDragged],
    );

    return (
        <div
            className="overflow-x-hidden whitespace-nowrap active:cursor-grabbing flex hide-scrollbar"
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={endDrag}
            onClickCapture={preventClick}
        >
            {children}
        </div>
    );
}
