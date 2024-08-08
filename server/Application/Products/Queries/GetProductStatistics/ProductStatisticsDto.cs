namespace Application.Products.Queries.GetProductStatistics;

public record ProductStatisticsDto(
    double ProductStars,
    int QuantityOf5Stars,
    int QuantityOf4Stars,
    int QuantityOf3Stars,
    int QuantityOf2Stars,
    int QuantityOf1Stars
);
