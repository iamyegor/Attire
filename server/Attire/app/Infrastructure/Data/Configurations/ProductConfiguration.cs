using Domain.Category;
using Domain.Product;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations;

public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        builder.ToTable("products");

        builder.HasKey(p => p.Id);
        builder.Property(p => p.Id).ValueGeneratedNever().HasColumnName("product_id");

        builder.Property(p => p.Price).HasColumnName("price");

        builder.Property(p => p.Title).HasColumnName("title");
        builder.HasIndex(p => p.Title).IsUnique();

        builder.Property(p => p.TitleEn).HasColumnName("title_en");
        builder.HasIndex(p => p.TitleEn).IsUnique();

        builder.Property(p => p.Description).HasColumnName("description");
        builder.Property(p => p.DescriptionEn).HasColumnName("description_en");

        builder.Property(p => p.Stars).HasColumnName("stars");

        builder.Property(p => p.CreationDate).HasColumnName("creation_date");

        builder.Property(p => p.IsNew).HasColumnName("is_new");

        builder
            .HasOne<Category>()
            .WithMany(x => x.Products)
            .HasForeignKey(p => p.CategoryId)
            .OnDelete(DeleteBehavior.Cascade);
        builder.Property(x => x.CategoryId).HasColumnName("category_id");

        builder.OwnsMany(
            p => p.Colors,
            builder =>
            {
                builder.ToTable("product_colors");

                builder.Property<Guid>("id");
                builder.HasKey("id");

                builder.Property(c => c.Hex).HasColumnName("hex");
                builder.Property(c => c.Name).HasColumnName("name");

                builder.WithOwner().HasForeignKey("product_id");
                builder.Property("product_id").IsRequired();
            }
        );

        builder.OwnsMany(
            p => p.Sizes,
            builder =>
            {
                builder.ToTable("product_sizes");

                builder.Property<Guid>("id");
                builder.HasKey("id");

                builder.Property(x => x.Value).HasColumnName("value");

                builder.WithOwner().HasForeignKey("product_id");
                builder.Property("product_id").IsRequired();
            }
        );

        builder.ComplexProperty(
            p => p.Details,
            details =>
            {
                details.Property(d => d.Brand).HasColumnName("brand");
                details.Property(d => d.SKU).HasColumnName("sku");
                details.Property(d => d.Composition).HasColumnName("composition");
                details.Property(d => d.CompositionEn).HasColumnName("composition_en");
            }
        );

        builder.OwnsMany(
            p => p.Reviews,
            builder =>
            {
                builder.ToTable("product_reviews");

                builder.HasKey(r => r.Id);
                builder.Property(r => r.Id).ValueGeneratedNever().HasColumnName("review_id");

                builder.Property(r => r.UserId).ValueGeneratedNever().HasColumnName("user_id");

                builder.Property(r => r.ShelfLife).HasColumnName("shelf_life");

                builder.Property(r => r.SizeMatches).HasColumnName("size_matches");

                builder.Property(r => r.Content).HasColumnName("content");

                builder.Property(r => r.Advantages).HasColumnName("advantages");

                builder.Property(r => r.Disadvantages).HasColumnName("disadvantages");

                builder.Property(r => r.CreationDate).HasColumnName("creation_date");

                builder.Property(r => r.Stars).HasColumnName("stars");

                builder.WithOwner().HasForeignKey("product_id");
                builder.Property("product_id").IsRequired();
            }
        );

        builder.OwnsMany(
            p => p.Images,
            builder =>
            {
                builder.ToTable("product_images");

                builder.HasKey(i => i.Id);
                builder.Property(i => i.Id).ValueGeneratedNever().HasColumnName("image_id");

                builder.Property(i => i.Path).HasColumnName("path");

                builder.Property(i => i.OrderIndex).HasColumnName("order_index");

                builder.WithOwner().HasForeignKey("product_id");
                builder.Property("product_id").IsRequired();
            }
        );
    }
}
