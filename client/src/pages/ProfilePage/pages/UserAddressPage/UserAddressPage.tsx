import { useLoadAddress } from "./hooks/useLoadAddress";
import { useState } from "react";
import { CurrentAddressPage } from "./types/CurrentAddressPage";
import ChangeUserAddressForm from "./pages/ChangeUserAddressFormPage";
import AddressData from "@/pages/ProfilePage/pages/UserAddressPage/pages/AddressData.tsx";

function UserAddressPage() {
    const [currentPage, setCurrentPage] = useState<CurrentAddressPage>("readPage");
    const { address, setAddress, isLoading } = useLoadAddress();

    return (
        <div className="pb-[30px] pt-[30px] lg:pt-0 lg:pl-[50px] w-full">
            {isLoading ? (
                <p>Загрузка данных...</p>
            ) : currentPage == "readPage" ? (
                <AddressData address={address!} setCurrentPage={setCurrentPage} />
            ) : (
                <ChangeUserAddressForm
                    initialAddress={address!}
                    setInitialAddress={setAddress}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </div>
    );
}

export default UserAddressPage;
