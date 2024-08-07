using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddProductIdShadowPropertyToImageAndReview : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_product_images_products_ProductId",
                table: "product_images");

            migrationBuilder.DropForeignKey(
                name: "FK_product_reviews_products_ProductId",
                table: "product_reviews");

            migrationBuilder.RenameColumn(
                name: "ProductId",
                table: "product_reviews",
                newName: "product_id");

            migrationBuilder.RenameIndex(
                name: "IX_product_reviews_ProductId",
                table: "product_reviews",
                newName: "IX_product_reviews_product_id");

            migrationBuilder.RenameColumn(
                name: "ProductId",
                table: "product_images",
                newName: "product_id");

            migrationBuilder.RenameIndex(
                name: "IX_product_images_ProductId",
                table: "product_images",
                newName: "IX_product_images_product_id");

            migrationBuilder.AddForeignKey(
                name: "FK_product_images_products_product_id",
                table: "product_images",
                column: "product_id",
                principalTable: "products",
                principalColumn: "product_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_product_reviews_products_product_id",
                table: "product_reviews",
                column: "product_id",
                principalTable: "products",
                principalColumn: "product_id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_product_images_products_product_id",
                table: "product_images");

            migrationBuilder.DropForeignKey(
                name: "FK_product_reviews_products_product_id",
                table: "product_reviews");

            migrationBuilder.RenameColumn(
                name: "product_id",
                table: "product_reviews",
                newName: "ProductId");

            migrationBuilder.RenameIndex(
                name: "IX_product_reviews_product_id",
                table: "product_reviews",
                newName: "IX_product_reviews_ProductId");

            migrationBuilder.RenameColumn(
                name: "product_id",
                table: "product_images",
                newName: "ProductId");

            migrationBuilder.RenameIndex(
                name: "IX_product_images_product_id",
                table: "product_images",
                newName: "IX_product_images_ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_product_images_products_ProductId",
                table: "product_images",
                column: "ProductId",
                principalTable: "products",
                principalColumn: "product_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_product_reviews_products_ProductId",
                table: "product_reviews",
                column: "ProductId",
                principalTable: "products",
                principalColumn: "product_id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
