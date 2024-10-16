using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class add_american_localization : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_products_title",
                table: "products");

            migrationBuilder.AddColumn<string>(
                name: "color_name_en",
                table: "user_order_items",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "color_name_en",
                table: "user_cart_items",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "composition_en",
                table: "products",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "description_en",
                table: "products",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "title_en",
                table: "products",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "name_en",
                table: "product_colors",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "color_name_en",
                table: "user_order_items");

            migrationBuilder.DropColumn(
                name: "color_name_en",
                table: "user_cart_items");

            migrationBuilder.DropColumn(
                name: "composition_en",
                table: "products");

            migrationBuilder.DropColumn(
                name: "description_en",
                table: "products");

            migrationBuilder.DropColumn(
                name: "title_en",
                table: "products");

            migrationBuilder.DropColumn(
                name: "name_en",
                table: "product_colors");

            migrationBuilder.CreateIndex(
                name: "IX_products_title",
                table: "products",
                column: "title",
                unique: true);
        }
    }
}
