using Application.Common.Models;

namespace Application.Products.Queries.GetNewProductsWithGender;

public record GetNewProductsWithGenderPaginationResult(
    IEnumerable<ProductShortDto> Products,
    int? NextPageNumber
);
