using Domain.Common;
using Domain.DomainErrors;
using XResults;

namespace Domain.Product.Entities;

public class Image : Entity<Guid>
{
    private static readonly string[] _allowedExtensions = { ".jpg", ".jpeg", ".png" };
    public string Path { get; }

    private Image(Guid imageId, string path)
        : base(imageId)
    {
        Path = path;
    }

    public static Result<Image, Error> Create(string path)
    {
        string extension = System.IO.Path.GetExtension(path).ToLowerInvariant();

        if (Array.Exists(_allowedExtensions, ext => ext.Equals(extension)))
        {
            return Errors.Errors.Image.ExtensionIsInvalid(extension);
        }

        Guid imageId = Guid.NewGuid();
        string imagePath = imageId + extension;

        return new Image(imageId, imagePath);
    }

    protected Image()
        : base(Guid.NewGuid()) { }
}
