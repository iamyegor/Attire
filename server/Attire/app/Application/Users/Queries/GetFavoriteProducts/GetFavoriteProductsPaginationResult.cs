namespace Application.Users.Queries.GetFavoriteProducts;

public record GetFavoriteProductsPaginationResult(
    IEnumerable<FavoriteProductDto> FavoriteProducts,
    int? NextPageNumber
);

public class FavoriteProductDto
{
    public Guid Id { get; set; }
    public string ImagePath { get; set; }
    public int Price { get; set; }
    public string Title { get; set; }
    public string TitleEn { get; set; }
    public bool Liked { get; set; }
    public bool IsInCart { get; set; }
    public bool IsNew { get; set; }
}
