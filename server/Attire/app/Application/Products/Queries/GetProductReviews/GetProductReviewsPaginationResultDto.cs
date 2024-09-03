namespace Application.Products.Queries.GetProductReviews;

public record GetProductReviewsPaginationResultDto(
    IEnumerable<ReviewDto> Reviews,
    int? NextPageNumber
);

public class ReviewDto
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string UserName { get; set; }
    public DateTime CreationDate { get; set; }
    public int Stars { get; set; }
    public int ShelfLife { get; set; }
    public bool SizeMatches { get; set; }
    public string Content { get; set; }
    public string Advantages { get; set; }
    public string Disadvantages { get; set; }
}
