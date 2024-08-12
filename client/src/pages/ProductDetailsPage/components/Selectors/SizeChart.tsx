import { Dialog } from "@mui/material";
import { useState } from "react";

export default function SizeChart() {
    const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

    return (
        <>
            <button className="underline" onClick={() => setIsSizeChartOpen(true)}>
                Таблица размеров
            </button>
            <Dialog open={isSizeChartOpen} onClose={() => setIsSizeChartOpen(false)}>
                <p>Here goes the size chart</p>
            </Dialog>
        </>
    );
}
