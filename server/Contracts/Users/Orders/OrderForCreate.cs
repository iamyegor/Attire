namespace Contracts.Users.Orders;

public record OrderForCreate(IEnumerable<Guid> CartItemIds);
