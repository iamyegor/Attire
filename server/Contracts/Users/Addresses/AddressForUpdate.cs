namespace Contracts.Users.Addresses;

public record AddressForUpdate(
    string City,
    string PostIndex,
    string Street,
    string House,
    string Flat
);
