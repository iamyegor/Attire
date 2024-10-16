import { useOrders } from "./hooks/useOrders";
import useOrdersTranslation from "./hooks/useOrdersTranslation";
import OrderCard from "./components/OrderCard";
import NoOrderPage from "./components/NoOrderPage/NoOrderPage";

function UserListOrdersPage() {
    const queryKey = ["orders"];
    const { orders, ref } = useOrders(queryKey);
    const t = useOrdersTranslation();

    return (
        <div className="pt-[30px] lg:pt-0 lg:pl-[50px] w-full">
            <h3 className="text-[24px] font-semibold mb-[30px]">{t.orderHistory}</h3>
            {orders.length === 0 ? (
                <NoOrderPage />
            ) : (
                orders.map((order) => <OrderCard key={order.id} order={order} />)
            )}
            <div ref={ref}></div>
        </div>
    );
}

export default UserListOrdersPage;
