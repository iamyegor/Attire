using Dapper;
using Domain.Category.ValueObject;
using Domain.DomainErrors;
using Infrastructure.Data;
using MediatR;
using Npgsql;
using XResults;
using Errors = Domain.Product.Errors.Errors;

namespace Application.Products.Queries.GetProductDetails;

public record GetProductDetailsQuery(Guid ProductId, string? UserId)
    : IRequest<Result<ProductDetailsDto, Error>>;

public class GetProductDetailsQueryHandler
    : IRequestHandler<GetProductDetailsQuery, Result<ProductDetailsDto, Error>>
{
    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetProductDetailsQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<Result<ProductDetailsDto, Error>> Handle(
        GetProductDetailsQuery request,
        CancellationToken cancellationToken
    )
    {
        NpgsqlConnection connection = _dapperConnectionFactory.Create();

        string sqlQuery =
            @"
            SELECT 
                p.title,
                p.price,
                p.description,
                p.brand,
                p.sku as s_k_u,
                p.composition,
                c.category_id,
                c.name as category_name,
                CASE 
                    WHEN c.gender = @MaleGender THEN 'male'
                    ELSE 'female'
                END as gender
            FROM products p
            LEFT JOIN categories c
                ON p.category_id = c.category_id
            WHERE product_id = @ProductId
            LIMIT 1;
            
            SELECT 1
            FROM user_favorite_product_ids
            WHERE product_id = @ProductId AND user_id = @UserId
            LIMIT 1;
            
            SELECT path
            FROM product_images
            WHERE product_id = @ProductId;
            
            SELECT name, hex
            FROM product_colors
            WHERE product_id = @ProductId;

            SELECT value
            FROM product_sizes
            WHERE product_id = @ProductId;
        
            SELECT COUNT(1)
            FROM product_reviews
            WHERE product_id = @ProductId;";

        Guid? userId = request.UserId == null ? null : Guid.Parse(request.UserId);

        SqlMapper.GridReader reader = await connection.QueryMultipleAsync(
            sqlQuery,
            new
            {
                request.ProductId,
                UserId = userId,
                MaleGender = Gender.Male
            }
        );

        ProductDetailsDto? productDetails =
            await reader.ReadSingleOrDefaultAsync<ProductDetailsDto>();

        if (productDetails == null)
        {
            return Errors.Product.WithIdNotFound(request.ProductId);
        }

        productDetails.Liked = await reader.ReadSingleOrDefaultAsync() != null;

        List<string> productImagePaths = (await reader.ReadAsync<string>()).ToList();

        List<ColorDto> productColors = (await reader.ReadAsync<ColorDto>()).ToList();

        List<string> productSizes = (await reader.ReadAsync<string>()).ToList();

        productDetails.CountOfReviews = await reader.ReadSingleAsync<int>();

        productDetails.ImagePaths = productImagePaths;
        productDetails.Colors = productColors;
        productDetails.Sizes = productSizes;

        return productDetails;
    }
}
