using Application.Products.Commands.CreateProductReview;
using Contracts.Products.Reviews;
using Mapster;

namespace Api.Mappings;

public class ProductMappingConfig : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config
            .NewConfig<
                (Guid ProductId, Guid UserId, ReviewForCreate ReviewForCreate),
                CreateProductReviewCommand
            >()
            .Map(d => d.ProductId, s => s.ProductId)
            .Map(d => d.UserId, s => s.UserId)
            .Map(d => d, s => s.ReviewForCreate);
    }
}
