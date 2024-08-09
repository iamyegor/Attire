using Application.Common.Models;

namespace Application.Products.Queries.GetProductsByGender;

public record GetProductsByGenderPaginationResult(
    IEnumerable<ProductShortDto> Products,
    int? NextPageNumber
);