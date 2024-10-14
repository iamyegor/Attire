using Domain.DomainErrors;
using XResults;

namespace Domain.Product.ValueObject;

public class ProductDetails : Common.ValueObject
{
    public string Brand { get; }
    public string SKU { get; }
    public string Composition { get; }
    public string CompositionEn { get; }

    private ProductDetails(string brand, string sku, string composition, string compositionEn)
    {
        Brand = brand;
        SKU = sku;
        Composition = composition;
        CompositionEn = compositionEn;
    }

    protected ProductDetails() { }

    public static Result<ProductDetails, Error> Create(
        string brand,
        string sku,
        string composition,
        string compositionEn
    )
    {
        if (string.IsNullOrWhiteSpace(brand))
        {
            return Errors.Errors.ProductDetails.BrandIsRequired();
        }

        if (string.IsNullOrWhiteSpace(sku))
        {
            return Errors.Errors.ProductDetails.SKUIsRequired();
        }

        if (string.IsNullOrWhiteSpace(composition))
        {
            return Errors.Errors.ProductDetails.CompositionIsRequired();
        }

        if (string.IsNullOrWhiteSpace(compositionEn))
        {
            return Errors.Errors.ProductDetails.CompositionIsRequired();
        }

        brand = brand.Trim();
        sku = sku.Trim();
        composition = composition.Trim();
        compositionEn = compositionEn.Trim();

        return new ProductDetails(brand, sku, composition, compositionEn);
    }

    protected override IEnumerable<object?> GetEqualityComponents()
    {
        return new object?[] { Brand, SKU, Composition };
    }
}
