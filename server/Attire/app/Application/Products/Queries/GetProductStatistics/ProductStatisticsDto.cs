namespace Application.Products.Queries.GetProductStatistics;

public record ProductStatisticsDto(
    double ProductStars,
    int NumberOf5Stars,
    int NumberOf4Stars,
    int NumberOf3Stars,
    int NumberOf2Stars,
    int NumberOf1Stars,
    int AllStarsNumber
);
