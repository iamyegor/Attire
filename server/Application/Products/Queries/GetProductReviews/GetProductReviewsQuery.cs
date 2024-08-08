using Dapper;
using Domain.DomainErrors;
using Infrastructure.Data;
using MediatR;
using Npgsql;
using XResults;
using Errors = Domain.Product.Errors.Errors;

namespace Application.Products.Queries.GetProductReviews;

public record GetProductReviewsQuery(Guid ProductId, int Page)
    : IRequest<Result<GetProductReviewsPaginationResultDto, Error>>;

public class GetProductReviewsQueryHandler
    : IRequestHandler<GetProductReviewsQuery, Result<GetProductReviewsPaginationResultDto, Error>>
{
    private const int PageLimit = 10;
    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetProductReviewsQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<Result<GetProductReviewsPaginationResultDto, Error>> Handle(
        GetProductReviewsQuery request,
        CancellationToken cancellationToken
    )
    {
        NpgsqlConnection connection = _dapperConnectionFactory.Create();

        if (
            await connection.QuerySingleOrDefaultAsync(
                "SELECT 1 FROM products WHERE product_id = @ProductId LIMIT 1",
                new { request.ProductId }
            ) == null
        )
        {
            return Errors.Product.WithIdNotFound(request.ProductId);
        }

        string sqlQuery =
            @"
            SELECT  
                pr.review_id as id, 
                pr.user_id, 
                u.first_name as user_name,
                pr.creation_date,
                pr.stars,
                pr.shelf_life,
                pr.size_matches,
                pr.content,
                pr.advantages,
                pr.disadvantages
            FROM product_reviews pr
            LEFT JOIN users u
                ON u.user_id = pr.user_id
            WHERE product_id = @ProductId
            ORDER BY pr.creation_date DESC
            LIMIT @PageLimit
            OFFSET @Skip";

        IEnumerable<ReviewDto> reviews = await connection.QueryAsync<ReviewDto>(
            sqlQuery,
            new
            {
                request.ProductId,
                PageLimit,
                Skip = (request.Page - 1) * PageLimit
            }
        );

        int? nextPageNumber = await GetNextPageNumberOrNull(
            connection,
            request.ProductId,
            request.Page
        );

        return new GetProductReviewsPaginationResultDto(reviews, nextPageNumber);
    }

    private async Task<int?> GetNextPageNumberOrNull(
        NpgsqlConnection connection,
        Guid productId,
        int page
    )
    {
        int reviewTotalCount = await connection.QuerySingleAsync<int>(
            "SELECT COUNT(1) FROM product_reviews WHERE product_id = @ProductId",
            new { ProductId = productId }
        );

        int? nextPage = PageLimit * page >= reviewTotalCount ? null : page + 1;

        return nextPage;
    }
}
