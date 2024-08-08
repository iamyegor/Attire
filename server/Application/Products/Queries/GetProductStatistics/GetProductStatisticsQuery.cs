using Dapper;
using Domain.DomainErrors;
using Infrastructure.Data;
using MediatR;
using Npgsql;
using XResults;
using Errors = Domain.Product.Errors.Errors;

namespace Application.Products.Queries.GetProductStatistics;

public record GetProductStatisticsQuery(Guid ProductId)
    : IRequest<Result<ProductStatisticsDto, Error>>;

public class GetProductStatisticsQueryHandler
    : IRequestHandler<GetProductStatisticsQuery, Result<ProductStatisticsDto, Error>>
{
    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetProductStatisticsQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<Result<ProductStatisticsDto, Error>> Handle(
        GetProductStatisticsQuery request,
        CancellationToken cancellationToken
    )
    {
        NpgsqlConnection connection = _dapperConnectionFactory.Create();

        string sqlQuery =
            @"
            SELECT stars
            FROM products
            WHERE product_id = @ProductId
            LIMIT 1;
            
            SELECT COUNT(1)
            FROM product_reviews
            WHERE stars = 5 AND product_id = @ProductId;

            SELECT COUNT(1)
            FROM product_reviews
            WHERE stars = 4 AND product_id = @ProductId;

            SELECT COUNT(1)
            FROM product_reviews
            WHERE stars = 3 AND product_id = @ProductId;

            SELECT COUNT(1)
            FROM product_reviews
            WHERE stars = 2 AND product_id = @ProductId;

            SELECT COUNT(1)
            FROM product_reviews
            WHERE stars = 1 AND product_id = @ProductId;";

        SqlMapper.GridReader reader = await connection.QueryMultipleAsync(
            sqlQuery,
            new { request.ProductId }
        );

        double? productStars = await reader.ReadSingleOrDefaultAsync<double?>();

        if (productStars == null)
        {
            return Errors.Product.WithIdNotFound(request.ProductId);
        }

        int quantityOf5Stars = await reader.ReadSingleAsync<int>();
        int quantityOf4Stars = await reader.ReadSingleAsync<int>();
        int quantityOf3Stars = await reader.ReadSingleAsync<int>();
        int quantityOf2Stars = await reader.ReadSingleAsync<int>();
        int quantityOf1Stars = await reader.ReadSingleAsync<int>();

        return new ProductStatisticsDto(
            (double)productStars,
            quantityOf5Stars,
            quantityOf4Stars,
            quantityOf3Stars,
            quantityOf2Stars,
            quantityOf1Stars
        );
    }
}
