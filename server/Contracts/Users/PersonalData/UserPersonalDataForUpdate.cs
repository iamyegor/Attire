namespace Contracts.Users.PersonalData;

public record UserPersonalDataForUpdate(
    string FirstName,
    string LastName,
    string Phone,
    string Email
);
