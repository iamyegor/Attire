namespace Contracts.Products;

public record FilterParametersDto(
    string? Sizes,
    string? Colors,
    string? Compositions,
    int? MinPrice,
    int? MaxPrice
);
