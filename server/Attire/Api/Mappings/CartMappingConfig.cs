using Application.Users.Queries.GetCartItems;
using Contracts.Users.Carts;
using Mapster;
using ColorDto = Application.Products.Queries.GetProductDetails.ColorDto;

namespace Api.Mappings;

public class CartMappingConfig : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config
            .NewConfig<CartItemModel, CartItemDto>()
            .Map(
                dest => dest.Color,
                src => new ColorDto { Hex = src.ColorHex, Name = src.ColorName }
            );
    }
}
