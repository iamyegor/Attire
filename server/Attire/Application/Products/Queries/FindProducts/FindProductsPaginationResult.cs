using Application.Common.Models;

namespace Application.Products.Queries.FindProducts;

public record FindProductsPaginationResult(
    IEnumerable<ProductShortDto> Products,
    int? NextPageNumber
);
