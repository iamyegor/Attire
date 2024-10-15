namespace Application.Products.Queries.GetProductDetails;

public class ColorDto
{
    public string Name { get; set; }
    public string NameEn { get; set; }
    public string Hex { get; set; }
}

public class ProductDetailsDto
{
    public string Title { get; set; }
    public string TitleEn { get; set; }
    public int Price { get; set; }
    public bool Liked { get; set; }
    public string Description { get; set; }
    public string DescriptionEn { get; set; }
    public string Brand { get; set; }
    public string SKU { get; set; }
    public string Composition { get; set; }
    public string CompositionEn { get; set; }
    public int CountOfReviews { get; set; }
    public Guid CategoryId { get; set; }
    public string CategoryName { get; set; }
    public string Gender { get; set; }

    public List<string> ImagePaths { get; set; }
    public List<ColorDto> Colors { get; set; }
    public List<string> Sizes { get; set; }
    public List<ProductDetailsCartInfo> CartItemsInfo { get; set; }
}

public class ProductDetailsCartInfo
{
    public string Size { get; set; }
    public string Color { get; set; }
    public Guid CartItemId { get; set; }
    public int QuantityInCart { get; set; }
}
