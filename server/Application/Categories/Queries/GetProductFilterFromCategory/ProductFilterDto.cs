namespace Application.Categories.Queries.GetProductFilterFromCategory;

public class ColorDto
{
    public string Name { get; set; }
    public string Hex { get; set; }
}

public record ProductFilterDto(
    string[] Sizes,
    ColorDto[] Colors,
    string[] Compositions,
    int? MinPrice,
    int? MaxPrice
);
