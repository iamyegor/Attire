namespace Contracts.Products.Reviews;

public record ReviewForCreate(
    ShelfLifeDto ShelfLife,
    bool SizeMatches,
    string Content,
    string Advantages,
    string Disadvantages,
    int Stars
);
