using Domain.DomainErrors;
using Domain.Product;
using Domain.User;
using Domain.User.Entities;
using Infrastructure.Data;
using MediatR;
using XResults;
using Errors = Domain.User.Errors.Errors;

namespace Application.Users.Commands.CreateOrder;

public record CreateOrderCommand(Guid UserId, List<Guid> CartItemIds)
    : IRequest<Result<Guid, Error>>;

public class CreateOrderCommandHandler : IRequestHandler<CreateOrderCommand, Result<Guid, Error>>
{
    private readonly ApplicationContext _context;

    public CreateOrderCommandHandler(ApplicationContext context)
    {
        _context = context;
    }

    public async Task<Result<Guid, Error>> Handle(
        CreateOrderCommand request,
        CancellationToken cancellationToken
    )
    {
        User? user = await _context.Users.FindAsync([request.UserId], cancellationToken);

        if (user == null)
        {
            return Errors.User.WithIdNotFound(request.UserId);
        }

        List<CartItem> createdOrderCartItems = user
            .Cart.Where(x => request.CartItemIds.Contains(x.Id))
            .ToList();

        if (createdOrderCartItems.Count != request.CartItemIds.Count)
        {
            return Errors.CartItem.NotFound();
        }

        IEnumerable<Guid> productIdsInOrder = createdOrderCartItems.Select(x => x.ProductId);

        IEnumerable<Product> products = _context.Products.Where(x =>
            productIdsInOrder.Contains(x.Id)
        );

        if (products.Any(x => !productIdsInOrder.Contains(x.Id)))
        {
            return Domain.Product.Errors.Errors.Product.NotFound();
        }

        List<OrderItem> orderItems = createdOrderCartItems
            .Select(x =>
                OrderItem
                    .Create(products.First(p => p.Id == x.ProductId), x.Quantity, x.Size, x.Color)
                    .Value
            )
            .ToList();

        Order order = Order.Create(orderItems);

        user.AddOrder(order, createdOrderCartItems);

        await _context.SaveChangesAsync(cancellationToken);

        return order.Id;
    }
}
