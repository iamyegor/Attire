﻿namespace Application.Users.Queries.GetCartItems;

public class CartItemModel
{
    public Guid Id { get; set; }
    public string ImagePath { get; set; }
    public Guid ProductId { get; set; }
    public string ProductTitle { get; set; }
    public string ProductTitleEn { get; set; }
    public int ProductPrice { get; set; }
    public string SKU { get; set; }
    public string Size { get; set; }
    public string ColorName { get; set; }
    public string ColorNameEn { get; set; }
    public string ColorHex { get; set; }
    public int Quantity { get; set; }
    public DateTime CreatedAt { get; set; }
}
