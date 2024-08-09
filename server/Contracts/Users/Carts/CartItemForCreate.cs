namespace Contracts.Users.Carts;

public record CartItemForCreate(Guid ProductId, int Quantity, string Size, string Color);
