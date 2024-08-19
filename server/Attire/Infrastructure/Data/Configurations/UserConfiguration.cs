using Domain.Product.ValueObject;
using Domain.User;
using Domain.User.ValueObject;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("users");

        builder.HasKey(u => u.Id);
        builder.Property(u => u.Id).ValueGeneratedNever().HasColumnName("user_id");

        builder.Property(u => u.FirstName).HasColumnName("first_name");

        builder
            .Property(u => u.Email)
            .HasConversion(x => x.Value, value => Email.Create(value))
            .HasColumnName("email");
        builder.HasIndex(u => u.Email).IsUnique();

        builder.OwnsOne(
            u => u.Address,
            address =>
            {
                address.Property(a => a.City).HasColumnName("city");
                address.Property(a => a.PostIndex).HasColumnName("post_index");
                address.Property(a => a.Street).HasColumnName("street");
                address.Property(a => a.House).HasColumnName("house");
                address.Property(a => a.Flat).HasColumnName("flat");
            }
        );

        builder.OwnsMany(
            u => u.Cart,
            builder =>
            {
                builder.ToTable("user_cart_items");

                builder.HasKey(c => c.Id);
                builder.Property(c => c.Id).ValueGeneratedNever().HasColumnName("cart_item_id");

                builder
                    .Property(c => c.ProductId)
                    .ValueGeneratedNever()
                    .HasColumnName("product_id");
                builder.Property(c => c.Quantity).HasColumnName("quantity");

                builder
                    .Property(c => c.Size)
                    .HasConversion(x => x.Value, value => Size.Create(value))
                    .HasColumnName("size");

                builder.OwnsOne(
                    c => c.Color,
                    color =>
                    {
                        color.Property(c => c.Hex).HasColumnName("color_hex");
                        color.Property(c => c.Name).HasColumnName("color_name");
                    }
                );

                builder.WithOwner().HasForeignKey("user_id");
                builder.Property("user_id").IsRequired();
            }
        );

        builder.OwnsMany(
            u => u.Orders,
            builder =>
            {
                builder.ToTable("user_orders");

                builder.HasKey(o => o.Id);
                builder.Property(o => o.Id).ValueGeneratedNever().HasColumnName("order_id");

                builder.Property(o => o.Cost).HasColumnName("cost");
                builder.Property(o => o.DeliveryDate).HasColumnName("delivery_date");

                builder.OwnsMany(
                    x => x.Items,
                    builder =>
                    {
                        builder.ToTable("user_order_items");

                        builder.HasKey(o => o.Id);
                        builder
                            .Property(o => o.Id)
                            .ValueGeneratedNever()
                            .HasColumnName("order_item_id");

                        builder
                            .Property(o => o.ProductId)
                            .ValueGeneratedNever()
                            .HasColumnName("product_id");
                        builder.Property(o => o.Quantity).HasColumnName("quantity");

                        builder
                            .Property(c => c.Size)
                            .HasConversion(x => x.ToString(), value => Size.Create(value))
                            .HasColumnName("size");

                        builder.OwnsOne(
                            o => o.Color,
                            color =>
                            {
                                color.Property(c => c.Hex).HasColumnName("color_hex");
                                color.Property(c => c.Name).HasColumnName("color_name");
                            }
                        );

                        builder.WithOwner().HasForeignKey("order_id");
                        builder.Property("order_id").IsRequired();
                    }
                );

                builder.WithOwner().HasForeignKey("user_id");
                builder.Property("user_id").IsRequired();
            }
        );

        builder.OwnsMany(
            u => u.FavoriteProductIds,
            builder =>
            {
                builder.ToTable("user_favorite_product_ids");

                builder.Property<Guid>("id");
                builder.HasKey("id");

                builder.Property(f => f.Value).ValueGeneratedNever().HasColumnName("product_id");

                builder.WithOwner().HasForeignKey("user_id");
                builder.Property("user_id").IsRequired();
            }
        );
    }
}
