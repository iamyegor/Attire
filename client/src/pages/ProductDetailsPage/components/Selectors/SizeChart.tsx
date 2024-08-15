import { useState } from "react";
import SizeChartTable from "@/pages/ProductDetailsPage/components/Selectors/SizeChartTable.tsx";
import CustomDialog from "@/components/ui/CustomDialog.tsx";

const columns = ["INT", "RU", "Обхват груди", "Обхват талии", "Обхват бедер", "Рост"];
const womenData = [
    { INT: "XS", RU: 42, "Обхват груди": "82-86", "Обхват талии": "64-66", "Обхват бедер": "90-92", "Рост": 170 },
    { INT: "S", RU: 44, "Обхват груди": "86-90", "Обхват талии": "68-70", "Обхват бедер": "94-96", "Рост": 170 },
    { INT: "M", RU: 46, "Обхват груди": "90-94", "Обхват талии": "72-74", "Обхват бедер": "98-100", "Рост": 170 },
    { INT: "L", RU: 48, "Обхват груди": "94-98", "Обхват талии": "72-74", "Обхват бедер": "102-104", "Рост": 170 },
];
const menData = [
    { INT: "S", RU: 46, "Обхват груди": "94-96", "Обхват талии": "80-82", "Обхват бедер": "96-98", "Рост": 180 },
    { INT: "M", RU: 48, "Обхват груди": "96-98", "Обхват талии": "82-84", "Обхват бедер": "98-199", "Рост": 182 },
    { INT: "L", RU: 50, "Обхват груди": "98-100", "Обхват талии": "84-86", "Обхват бедер": "100-102", "Рост": 182 },
    { INT: "XL", RU: 52, "Обхват груди": "100-102", "Обхват талии": "86-88", "Обхват бедер": "102-104", "Рост": 184 },
    { INT: "XXL", RU: 54, "Обхват груди": "102-104", "Обхват талии": "88-100", "Обхват бедер": "104-106", "Рост": 184 },
];


export default function SizeChart() {
    const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

    return (
        <>
            <button className="underline" onClick={() => setIsSizeChartOpen(true)}>
                Таблица размеров
            </button>
            <CustomDialog isOpen={isSizeChartOpen} onClose={() => setIsSizeChartOpen(false)}>
                <h2 className="font-semibold text-lg">Женская размерная сетка</h2>
                <SizeChartTable columns={columns} data={womenData} />
                <h2 className="font-semibold text-lg">Мужская размерная сетка</h2>
                <SizeChartTable columns={columns} data={menData} />
            </CustomDialog>
        </>
    );
}
