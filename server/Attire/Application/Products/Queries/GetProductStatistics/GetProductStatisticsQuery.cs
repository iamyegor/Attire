using Dapper;
using Domain.DomainErrors;
using Infrastructure.Data;
using Infrastructure.Data.Dapper;
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

        int numberOf5Stars = await reader.ReadSingleAsync<int>();
        int numberOf4Stars = await reader.ReadSingleAsync<int>();
        int numberOf3Stars = await reader.ReadSingleAsync<int>();
        int numberOf2Stars = await reader.ReadSingleAsync<int>();
        int numberOf1Stars = await reader.ReadSingleAsync<int>();
        int allStarsNumber =
            numberOf5Stars + numberOf4Stars + numberOf3Stars + numberOf2Stars + numberOf1Stars;

        return new ProductStatisticsDto(
            (double)productStars,
            numberOf5Stars,
            numberOf4Stars,
            numberOf3Stars,
            numberOf2Stars,
            numberOf1Stars,
            allStarsNumber
        );
    }
}
