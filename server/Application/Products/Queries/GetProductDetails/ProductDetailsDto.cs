namespace Application.Products.Queries.GetProductDetails;

public class ColorDto
{
    public string Name { get; set; }
    public string Hex { get; set; }
}

public class ProductDetailsDto
{
    public string Title { get; set; }
    public int Price { get; set; }
    public bool Liked { get; set; }
    public string Description { get; set; }
    public string Brand { get; set; }
    public string SKU { get; set; }
    public string Composition { get; set; }

    public List<string> ImagePaths { get; set; }
    public List<ColorDto> Colors { get; set; }
    public List<string> Sizes { get; set; }
}
