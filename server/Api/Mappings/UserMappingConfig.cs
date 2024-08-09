using Application.Users.Commands.AddItemToTheCart;
using Contracts.Users.Carts;
using Mapster;

namespace Api.Mappings;

public class UserMappingConfig : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config
            .NewConfig<
                (Guid UserId, CartItemForCreate CartItemForCreate),
                AddItemToTheCartCommand
            >()
            .Map(d => d.UserId, s => s.UserId)
            .Map(d => d, s => s.CartItemForCreate);
    }
}
