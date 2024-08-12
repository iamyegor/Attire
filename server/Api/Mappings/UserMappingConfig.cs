using Application.Users.Commands.AddItemToTheCart;
using Application.Users.Commands.CreateOrder;
using Application.Users.Commands.UpdatePersonalData;
using Application.Users.Commands.UpdateUserAddress;
using Contracts.Users.Addresses;
using Contracts.Users.Carts;
using Contracts.Users.Orders;
using Contracts.Users.PersonalData;
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

        config
            .NewConfig<(Guid UserId, AddressForUpdate AddressForUpdate), UpdateUserAddressCommand>()
            .Map(d => d.UserId, s => s.UserId)
            .Map(d => d, s => s.AddressForUpdate);

        config
            .NewConfig<
                (Guid UserId, UserPersonalDataForUpdate AddressForUpdate),
                UpdatePersonalDataCommand
            >()
            .Map(d => d.UserId, s => s.UserId)
            .Map(d => d, s => s.AddressForUpdate);

        config
            .NewConfig<(Guid UserId, OrderForCreate OrderForCreate), CreateOrderCommand>()
            .Map(d => d.UserId, s => s.UserId)
            .Map(d => d, s => s.OrderForCreate);
    }
}
