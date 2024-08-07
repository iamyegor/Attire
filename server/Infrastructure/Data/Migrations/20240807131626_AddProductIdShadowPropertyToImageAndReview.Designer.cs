﻿// <auto-generated />
using System;
using System.Collections.Generic;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Infrastructure.Data.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20240807131626_AddProductIdShadowPropertyToImageAndReview")]
    partial class AddProductIdShadowPropertyToImageAndReview
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.7")
                .HasAnnotation("Proxies:ChangeTracking", false)
                .HasAnnotation("Proxies:CheckEquality", false)
                .HasAnnotation("Proxies:LazyLoading", true)
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Domain.Category.Category", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid")
                        .HasColumnName("category_id");

                    b.Property<int>("Gender")
                        .HasColumnType("integer")
                        .HasColumnName("gender");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("name");

                    b.HasKey("Id");

                    b.ToTable("categories", (string)null);
                });

            modelBuilder.Entity("Domain.Product.Product", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid")
                        .HasColumnName("product_id");

                    b.Property<Guid>("CategoryId")
                        .HasColumnType("uuid")
                        .HasColumnName("category_id");

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("timestamp with time zone")
                        .HasColumnName("creation_date");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("description");

                    b.Property<bool>("IsNew")
                        .HasColumnType("boolean")
                        .HasColumnName("is_new");

                    b.Property<int>("Price")
                        .HasColumnType("integer")
                        .HasColumnName("price");

                    b.Property<double>("Stars")
                        .HasColumnType("double precision")
                        .HasColumnName("stars");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("title");

                    b.ComplexProperty<Dictionary<string, object>>("Details", "Domain.Product.Product.Details#ProductDetails", b1 =>
                        {
                            b1.IsRequired();

                            b1.Property<string>("Brand")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("brand");

                            b1.Property<string>("Composition")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("composition");

                            b1.Property<string>("SKU")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("sku");
                        });

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.HasIndex("Title")
                        .IsUnique();

                    b.ToTable("products", (string)null);
                });

            modelBuilder.Entity("Domain.User.User", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid")
                        .HasColumnName("user_id");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("email");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("first_name");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("last_name");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("phone");

                    b.ComplexProperty<Dictionary<string, object>>("Address", "Domain.User.User.Address#Address", b1 =>
                        {
                            b1.IsRequired();

                            b1.Property<string>("City")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("city");

                            b1.Property<string>("Flat")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("flat");

                            b1.Property<string>("House")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("house");

                            b1.Property<string>("PostIndex")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("post_index");

                            b1.Property<string>("Street")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("street");
                        });

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("Phone")
                        .IsUnique();

                    b.ToTable("users", (string)null);
                });

            modelBuilder.Entity("Domain.Product.Product", b =>
                {
                    b.HasOne("Domain.Category.Category", null)
                        .WithMany("Products")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.OwnsMany("Domain.Product.Entities.Image", "Images", b1 =>
                        {
                            b1.Property<Guid>("Id")
                                .HasColumnType("uuid")
                                .HasColumnName("image_id");

                            b1.Property<int>("OrderIndex")
                                .HasColumnType("integer")
                                .HasColumnName("order_index");

                            b1.Property<string>("Path")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("path");

                            b1.Property<Guid>("product_id")
                                .HasColumnType("uuid");

                            b1.HasKey("Id");

                            b1.HasIndex("product_id");

                            b1.ToTable("product_images", (string)null);

                            b1.WithOwner()
                                .HasForeignKey("product_id");
                        });

                    b.OwnsMany("Domain.Product.Entities.Review", "Reviews", b1 =>
                        {
                            b1.Property<Guid>("Id")
                                .HasColumnType("uuid")
                                .HasColumnName("review_id");

                            b1.Property<string>("Advantages")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("advantages");

                            b1.Property<string>("Content")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("content");

                            b1.Property<DateTime>("CreationDate")
                                .HasColumnType("timestamp with time zone")
                                .HasColumnName("creation_date");

                            b1.Property<string>("Disadvantages")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("disadvantages");

                            b1.Property<int>("ShelfLife")
                                .HasColumnType("integer")
                                .HasColumnName("shelf_life");

                            b1.Property<bool>("SizeMatches")
                                .HasColumnType("boolean")
                                .HasColumnName("size_matches");

                            b1.Property<int>("Stars")
                                .HasColumnType("integer")
                                .HasColumnName("stars");

                            b1.Property<Guid>("UserId")
                                .HasColumnType("uuid")
                                .HasColumnName("user_id");

                            b1.Property<Guid>("product_id")
                                .HasColumnType("uuid");

                            b1.HasKey("Id");

                            b1.HasIndex("product_id");

                            b1.ToTable("product_reviews", (string)null);

                            b1.WithOwner()
                                .HasForeignKey("product_id");
                        });

                    b.OwnsMany("Domain.Product.ValueObject.Color", "Colors", b1 =>
                        {
                            b1.Property<Guid>("id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("uuid");

                            b1.Property<string>("Hex")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("hex");

                            b1.Property<string>("Name")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("name");

                            b1.Property<Guid>("product_id")
                                .HasColumnType("uuid");

                            b1.HasKey("id");

                            b1.HasIndex("product_id");

                            b1.ToTable("product_colors", (string)null);

                            b1.WithOwner()
                                .HasForeignKey("product_id");
                        });

                    b.OwnsMany("Domain.Product.ValueObject.Size", "Sizes", b1 =>
                        {
                            b1.Property<Guid>("id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("uuid");

                            b1.Property<string>("Value")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("value");

                            b1.Property<Guid>("product_id")
                                .HasColumnType("uuid");

                            b1.HasKey("id");

                            b1.HasIndex("product_id");

                            b1.ToTable("product_sizes", (string)null);

                            b1.WithOwner()
                                .HasForeignKey("product_id");
                        });

                    b.Navigation("Colors");

                    b.Navigation("Images");

                    b.Navigation("Reviews");

                    b.Navigation("Sizes");
                });

            modelBuilder.Entity("Domain.User.User", b =>
                {
                    b.OwnsMany("Domain.User.Entities.CartItem", "Cart", b1 =>
                        {
                            b1.Property<Guid>("Id")
                                .HasColumnType("uuid")
                                .HasColumnName("cart_item_id");

                            b1.Property<Guid>("ProductId")
                                .HasColumnType("uuid")
                                .HasColumnName("product_id");

                            b1.Property<int>("Quantity")
                                .HasColumnType("integer")
                                .HasColumnName("quantity");

                            b1.Property<string>("Size")
                                .IsRequired()
                                .HasColumnType("text")
                                .HasColumnName("size");

                            b1.Property<Guid>("user_id")
                                .HasColumnType("uuid");

                            b1.HasKey("Id");

                            b1.HasIndex("user_id");

                            b1.ToTable("user_cart_items", (string)null);

                            b1.WithOwner()
                                .HasForeignKey("user_id");

                            b1.OwnsOne("Domain.Product.ValueObject.Color", "Color", b2 =>
                                {
                                    b2.Property<Guid>("CartItemId")
                                        .HasColumnType("uuid");

                                    b2.Property<string>("Hex")
                                        .IsRequired()
                                        .HasColumnType("text")
                                        .HasColumnName("color_hex");

                                    b2.Property<string>("Name")
                                        .IsRequired()
                                        .HasColumnType("text")
                                        .HasColumnName("color_name");

                                    b2.HasKey("CartItemId");

                                    b2.ToTable("user_cart_items");

                                    b2.WithOwner()
                                        .HasForeignKey("CartItemId");
                                });

                            b1.Navigation("Color")
                                .IsRequired();
                        });

                    b.OwnsMany("Domain.User.Entities.Order", "Orders", b1 =>
                        {
                            b1.Property<Guid>("Id")
                                .HasColumnType("uuid")
                                .HasColumnName("order_id");

                            b1.Property<int>("Cost")
                                .HasColumnType("integer")
                                .HasColumnName("cost");

                            b1.Property<DateTime>("DeliveryDate")
                                .HasColumnType("timestamp with time zone")
                                .HasColumnName("delivery_date");

                            b1.Property<Guid>("user_id")
                                .HasColumnType("uuid");

                            b1.HasKey("Id");

                            b1.HasIndex("user_id");

                            b1.ToTable("user_orders", (string)null);

                            b1.WithOwner()
                                .HasForeignKey("user_id");

                            b1.OwnsMany("Domain.User.Entities.OrderItem", "Items", b2 =>
                                {
                                    b2.Property<Guid>("Id")
                                        .HasColumnType("uuid")
                                        .HasColumnName("order_item_id");

                                    b2.Property<Guid>("ProductId")
                                        .HasColumnType("uuid")
                                        .HasColumnName("product_id");

                                    b2.Property<int>("Quantity")
                                        .HasColumnType("integer")
                                        .HasColumnName("quantity");

                                    b2.Property<string>("Size")
                                        .IsRequired()
                                        .HasColumnType("text")
                                        .HasColumnName("size");

                                    b2.Property<Guid>("order_id")
                                        .HasColumnType("uuid");

                                    b2.HasKey("Id");

                                    b2.HasIndex("order_id");

                                    b2.ToTable("user_order_items", (string)null);

                                    b2.WithOwner()
                                        .HasForeignKey("order_id");

                                    b2.OwnsOne("Domain.Product.ValueObject.Color", "Color", b3 =>
                                        {
                                            b3.Property<Guid>("OrderItemId")
                                                .HasColumnType("uuid");

                                            b3.Property<string>("Hex")
                                                .IsRequired()
                                                .HasColumnType("text")
                                                .HasColumnName("color_hex");

                                            b3.Property<string>("Name")
                                                .IsRequired()
                                                .HasColumnType("text")
                                                .HasColumnName("color_name");

                                            b3.HasKey("OrderItemId");

                                            b3.ToTable("user_order_items");

                                            b3.WithOwner()
                                                .HasForeignKey("OrderItemId");
                                        });

                                    b2.Navigation("Color")
                                        .IsRequired();
                                });

                            b1.Navigation("Items");
                        });

                    b.OwnsMany("Domain.User.ValueObject.FavoriteProductId", "FavoriteProductIds", b1 =>
                        {
                            b1.Property<Guid>("id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("uuid");

                            b1.Property<Guid>("Value")
                                .HasColumnType("uuid")
                                .HasColumnName("product_id");

                            b1.Property<Guid>("user_id")
                                .HasColumnType("uuid");

                            b1.HasKey("id");

                            b1.HasIndex("user_id");

                            b1.ToTable("user_favorite_product_ids", (string)null);

                            b1.WithOwner()
                                .HasForeignKey("user_id");
                        });

                    b.Navigation("Cart");

                    b.Navigation("FavoriteProductIds");

                    b.Navigation("Orders");
                });

            modelBuilder.Entity("Domain.Category.Category", b =>
                {
                    b.Navigation("Products");
                });
#pragma warning restore 612, 618
        }
    }
}
