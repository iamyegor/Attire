/// example:
/// phoneNumber = "(123) 456-7890"
/// return "+71234567890"
export function toServerPhoneNumberDto(phoneNumber: string) {
    const phone = "+7" + phoneNumber.slice(1, 4) + phoneNumber.slice(6, 9) + phoneNumber.slice(10);

    return phone;
}

/// example:
/// phoneNumber = "+71234567890"
/// return "+7 (123) 456-7890"
export function toShowFormatPhoneNumber(phoneNumber: string | undefined) {
    if (!phoneNumber) {
        return;
    }

    const phone = `+7 (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 13)}`;

    return phone;
}
