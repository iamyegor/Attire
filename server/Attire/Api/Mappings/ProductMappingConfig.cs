using Application.Products.Commands.CreateProductReview;
using Application.Products.Queries.GetNewProductsWithGender;
using Contracts.Products.Reviews;
using Domain.Category.ValueObject;
using Mapster;
using SortParameters = Contracts.Products.SortParameters;

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
