import BlueBackButton from "@/assets/blue-arrow-circle-left.png";
import CurrentPersonalDataPage from "../../types/CurrentPersonalDataPage";
import PasswordInput from "@/components/ui/PasswordInput";
import { useState } from "react";
import ChangedPasswordForm from "./types/ChangedPasswordForm";
import { EmptyResult } from "@/types/results/EmptyResult";
import { SuccessOr } from "@/types/results/SuccessOr";
import ErrorMessage from "@/types/errors/ErrorMessage";
import fetchChangePassword from "@/utils/services/profile/fetchChangePassword.ts";

const cleanChangedPasswordForm: ChangedPasswordForm = {
    oldPassword: "",
    newPassword: "",
    newPasswordRepeat: "",
};

function ChangeUserPasswordFormPage({
    setCurrentPage,
}: {
    setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPersonalDataPage>>;
}) {
    const [changedPasswordForm, setChangedPasswordForm] =
        useState<ChangedPasswordForm>(cleanChangedPasswordForm);
    const [error, setError] = useState<string>("");

    return (
        <div>
            <div className="flex justify-between items-center mb-[30px]">
                <h3 className="text-[24px] font-semibold">Смена пароля</h3>
                <button
                    className="w-[30px] h-[30px] rounded-full"
                    onClick={() => setCurrentPage("readPage")}
                >
                    <img className="w-full" src={BlueBackButton} alt="Назад" />
                </button>
            </div>

            <div className="mb-[30px]">
                <h3 className="mb-[12px]">Старый пароль</h3>
                <PasswordInput
                    value={changedPasswordForm.oldPassword}
                    onChange={(e) =>
                        setChangedPasswordForm((prev) => ({ ...prev, oldPassword: e.target.value }))
                    }
                    validate={(e) => {
                        if (e.target.value.trim() === "") {
                            return EmptyResult.Fail("Вы не ввели старый пароль");
                        }
                        return EmptyResult.Ok();
                    }}
                />
            </div>

            <div className="mb-[50px]">
                <div className="mb-[12px]">
                    <h3 className="mb-[12px]">Новый пароль</h3>
                    <PasswordInput
                        value={changedPasswordForm.newPassword}
                        onChange={(e) =>
                            setChangedPasswordForm((prev) => ({
                                ...prev,
                                newPassword: e.target.value,
                            }))
                        }
                        validate={(e) => {
                            if (e.target.value.trim() === "") {
                                return EmptyResult.Fail("Вы не ввели новый пароль");
                            }
                            return EmptyResult.Ok();
                        }}
                    />
                </div>

                <div>
                    <h3 className="mb-[12px]">Повторите пароль</h3>
                    <PasswordInput
                        value={changedPasswordForm.newPasswordRepeat}
                        onChange={(e) =>
                            setChangedPasswordForm((prev) => ({
                                ...prev,
                                newPasswordRepeat: e.target.value,
                            }))
                        }
                        validate={(e) => {
                            if (e.target.value.trim() === "") {
                                return EmptyResult.Fail("Вы не ввели повторно пароль");
                            }
                            if (e.target.value !== changedPasswordForm.newPassword) {
                                return EmptyResult.Fail("Вы неправильно ввели повторно пароль");
                            }
                            return EmptyResult.Ok();
                        }}
                    />
                </div>
            </div>

            <div className="error-message mb-2">{error}</div>

            <button
                onClick={async () => {
                    const result: SuccessOr<ErrorMessage> =
                        await fetchChangePassword(changedPasswordForm);

                    if (result.isFailure) {
                        setError(result.error!.value);
                        return;
                    }

                    setError("");

                    setCurrentPage("readPage");
                }}
                className="blue-btn"
            >
                Сохранить изменения
            </button>
        </div>
    );
}

export default ChangeUserPasswordFormPage;
