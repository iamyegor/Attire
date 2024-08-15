import api from "@/lib/api";
import ChangedPasswordForm from "@/pages/ProfilePage/pages/UserPersonalDataPage/pages/ChangeUserPasswordFormPage/types/ChangedPasswordForm";
import ErrorMessage from "@/types/errors/ErrorMessage";
import { SuccessOr } from "@/types/results/SuccessOr";

export default async function fetchChangePassword(
    changedPasswordForm: ChangedPasswordForm,
): Promise<SuccessOr<ErrorMessage>> {
    if (
        changedPasswordForm.oldPassword.trim() === "" ||
        changedPasswordForm.newPassword.trim() === "" ||
        changedPasswordForm.newPasswordRepeat.trim() === "" ||
        changedPasswordForm.newPassword !== changedPasswordForm.newPasswordRepeat
    ) {
        return SuccessOr.Fail(new ErrorMessage("Не все поля были заполнены корректно."));
    }

    await api.put("users/password", changedPasswordForm);

    return SuccessOr.Ok();
}
