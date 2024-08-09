namespace Application.Common.Models;

public class ProductShortDto
{
    public Guid Id { get; set; }
    public string ImagePath { get; set; }
    public DateTime CreationDate { get; set; }
    public int Price { get; set; }
    public string Title { get; set; }
    public bool Liked { get; set; }
    public bool IsInCart { get; set; }
    public bool IsNew { get; set; }
}
