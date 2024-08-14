import api from "@/lib/api";
import { Address } from "@/pages/ProfilePage/pages/UserAddressPage/types/Address";
import ErrorMessage from "@/types/errors/ErrorMessage";
import { SuccessOr } from "@/types/results/SuccessOr";

export default async function fetchChangeAddress(
    changedAddress: Address,
): Promise<SuccessOr<ErrorMessage>> {
    if (changedAddress.city.trim() === "") {
        return SuccessOr.Fail(new ErrorMessage("Вы не заполнили населенный пункт"));
    }
    if (changedAddress.postIndex.trim() === "") {
        return SuccessOr.Fail(new ErrorMessage("Вы не заполнили почтовый индекс"));
    }
    if (!/^\d{6}$/.test(changedAddress.postIndex.trim())) {
        return SuccessOr.Fail(new ErrorMessage("Вы некорректно заполнили почтовый индекс"));
    }
    if (changedAddress.street.trim() === "") {
        return SuccessOr.Fail(new ErrorMessage("Вы не заполнили улицу"));
    }
    if (changedAddress.house.trim() === "") {
        return SuccessOr.Fail(new ErrorMessage("Вы не заполнили дом"));
    }
    if (changedAddress.flat.trim() === "") {
        return SuccessOr.Fail(new ErrorMessage("Вы не заполнили квартиру"));
    }

    await api.put("users/address", changedAddress);

    return SuccessOr.Ok();
}
