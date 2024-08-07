using Domain.Common;
using Domain.DomainErrors;
using XResults;

namespace Domain.Product.Entities;

public class Image : Entity<Guid>
{
    private static readonly string[] _allowedExtensions = { ".jpg", ".jpeg", ".png" };
    public string Path { get; }
    public int OrderIndex { get; }

    private Image(Guid imageId, string path, int orderIndex)
        : base(imageId)
    {
        Path = path;
        OrderIndex = orderIndex;
    }

    public static Result<Image, Error> Create(string path, int orderIndex)
    {
        if (orderIndex <= 0)
        {
            return Errors.Errors.Image.OrderIndexMustBeGreaterThanZero(orderIndex);
        }

        string extension = System.IO.Path.GetExtension(path).ToLowerInvariant();

        if (Array.Exists(_allowedExtensions, ext => ext.Equals(extension)))
        {
            return Errors.Errors.Image.ExtensionIsInvalid(extension);
        }

        Guid imageId = Guid.NewGuid();
        string imagePath = imageId + extension;

        return new Image(imageId, imagePath, orderIndex);
    }

    protected Image()
        : base(Guid.NewGuid()) { }
}
