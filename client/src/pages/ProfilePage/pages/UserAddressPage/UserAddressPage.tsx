import { useLoadAddress } from "./hooks/useLoadAddress";
import { useState } from "react";
import { CurrentAddressPage } from "./types/CurrentAddressPage";
import ReadUserAddressPage from "./pages/ReadUserAddressPage";
import ChangeUserAddressForm from "./pages/ChangeUserAddressFormPage";
import { Address } from "./types/Address";

function UserAddressPage() {
    const [currentPage, setCurrentPage] = useState<CurrentAddressPage>("readPage");
    const { address, setAddress, isPending } = useLoadAddress();

    return (
        <div className="pb-[30px] pt-[30px] lg:pt-0 lg:pl-[50px] w-full">
            {isPending ? (
                <>Загрузка данных...</>
            ) : currentPage == "readPage" ? (
                <ReadUserAddressPage address={address!} setCurrentPage={setCurrentPage} />
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
