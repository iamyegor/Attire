import NoOrdersImage from "@/assets/no-orders.png";
import useNoOrdersTranslation from "./hooks/useNoOrdersTranslation";

function NoOrderPage() {
    const t = useNoOrdersTranslation();

    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-col items-center">
                <div className="w-[280px]">
                    <img className="w-full" src={NoOrdersImage} alt={t.altText} />
                </div>
                <div className="text-[24px] font-medium pb-[30px]">{t.message}</div>
            </div>
        </div>
    );
}

export default NoOrderPage;
