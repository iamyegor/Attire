using Application.Common.Models;

namespace Application.Categories.Queries.GetProductsFromCategory;

public record GetProductFromCategoryPaginationResultDto(
    IEnumerable<ProductShortDto> Products,
    int? NextPageNumber
);
