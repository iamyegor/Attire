namespace Contracts.Products;

public record FilterParameters(
    string[]? Sizes,
    string[]? Colors,
    string[]? Compositions,
    int? MinPrice,
    int? MaxPrice
);
