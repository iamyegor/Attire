using Application.Products.Commands.CreateProductReview;
using Contracts.Products;
using Mapster;

namespace Api.Mappings;

public class ProductMappingConfig : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config
            .NewConfig<
                FilterParameters,
                Application.Categories.Queries.GetProductsFromCategory.FilterParameters
            >()
            .Map(
                x => x.Compositions,
                x =>
                    x.Compositions == null
                        ? null
                        : x
                            .Compositions.Trim()
                            .Split(
                                ',',
                                StringSplitOptions.RemoveEmptyEntries
                                    | StringSplitOptions.TrimEntries
                            )
            )
            .Map(
                x => x.Colors,
                x =>
                    x.Colors == null
                        ? null
                        : x
                            .Colors.Trim()
                            .Split(
                                ',',
                                StringSplitOptions.RemoveEmptyEntries
                                    | StringSplitOptions.TrimEntries
                            )
            )
            .Map(
                x => x.Sizes,
                x =>
                    x.Sizes == null
                        ? null
                        : x
                            .Sizes.Trim()
                            .Split(
                                ',',
                                StringSplitOptions.RemoveEmptyEntries
                                    | StringSplitOptions.TrimEntries
                            )
            );

        config
            .NewConfig<
                (Guid ProductId, Guid UserId, Contracts.Products.Reviews.ReviewForCreate ReviewForCreate),
                CreateProductReviewCommand
            >()
            .Map(d => d.ProductId, s => s.ProductId)
            .Map(d => d.UserId, s => s.UserId)
            .Map(d => d, s => s.ReviewForCreate);
    }
}
