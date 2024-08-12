namespace Application.Users.Queries.GetOrders;

public record GetOrdersPaginationResult(IEnumerable<OrderDto> Orders, int? NextPageNumber);

public class OrderDto
{
    public Guid Id { get; set; }
    public DateTime CreationDate { get; set; }
    public int Cost { get; set; }
    public DateTime DeliveryDate { get; set; }
}
