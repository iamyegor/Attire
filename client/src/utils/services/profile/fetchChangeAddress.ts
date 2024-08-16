import api from "@/lib/api";
import { Address } from "@/pages/ProfilePage/pages/UserAddressPage/types/Address";
import ErrorMessage from "@/types/errors/ErrorMessage";
import { SuccessOr } from "@/types/results/SuccessOr";

export default async function fetchChangeAddress(
    changedAddress: Address,
): Promise<SuccessOr<ErrorMessage>> {
    if (
        changedAddress.city.trim() === "" ||
        changedAddress.postIndex.trim() === "" ||
        !/^\d{6}$/.test(changedAddress.postIndex.trim()) ||
        changedAddress.street.trim() === "" ||
        changedAddress.house.trim() === "" ||
        changedAddress.flat.trim() === ""
    ) {
        return SuccessOr.Fail(new ErrorMessage("Не все поля были заполнены корректно."));
    }

    await api.put("users/address", changedAddress);

    return SuccessOr.Ok();
}
