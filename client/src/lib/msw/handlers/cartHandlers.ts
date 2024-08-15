import { http, HttpResponse } from "msw";
import ProductImage from "@/assets/product.webp";
import CartItem from "@/pages/CartPage/types/CartItem.ts";

const cartItems: CartItem[] = [
    {
        id: "item1",
        productId: "item1",
        name: "T-Shirt",
        image: ProductImage,
        productPrice: 1999, // was 19.99
        size: "M",
        color: {
            name: "Blue",
            hex: "#0000FF",
        },
        sku: "TSHIRT-BLUE-M",
        quantity: 2,
    },
    {
        id: "item2",
        productId: "item2",
        name: "Jeans",
        image: ProductImage,
        productPrice: 4999, // was 49.99
        size: "32",
        color: {
            name: "Black",
            hex: "#000000",
        },
        sku: "JEANS-BLACK-32",
        quantity: 1,
    },
    {
        id: "item3",
        productId: "item3",
        name: "Sneakers",
        image: ProductImage,
        productPrice: 7999, // was 79.99
        size: "9",
        color: {
            name: "White",
            hex: "#FFFFFF",
        },
        sku: "SNEAKERS-WHITE-9",
        quantity: 1,
    },
    {
        id: "item4",
        productId: "item4",
        name: "Hat",
        image: ProductImage,
        productPrice: 1499, // was 14.99
        size: "One Size",
        color: {
            name: "Red",
            hex: "#FF0000",
        },
        sku: "HAT-RED-OS",
        quantity: 3,
    },
    {
        id: "item5",
        productId: "item5",
        name: "Jacket",
        image: ProductImage,
        productPrice: 9999, // was 99.99
        size: "L",
        color: {
            name: "Green",
            hex: "#008000",
        },
        sku: "JACKET-GREEN-L",
        quantity: 1,
    },
    {
        id: "item6",
        productId: "item6",
        name: "Socks",
        image: ProductImage,
        productPrice: 599, // was 5.99
        size: "M",
        color: {
            name: "Black",
            hex: "#000000",
        },
        sku: "SOCKS-BLACK-M",
        quantity: 5,
    },
    {
        id: "item7",
        productId: "item7",
        name: "Backpack",
        image: ProductImage,
        productPrice: 5999, // was 59.99
        size: "One Size",
        color: {
            name: "Gray",
            hex: "#808080",
        },
        sku: "BACKPACK-GRAY-OS",
        quantity: 1,
    },
    {
        id: "item8",
        productId: "item8",
        name: "Watch",
        image: ProductImage,
        productPrice: 19999, // was 199.99
        size: "Standard",
        color: {
            name: "Silver",
            hex: "#C0C0C0",
        },
        sku: "WATCH-SILVER-ST",
        quantity: 1,
    },
    {
        id: "item9",
        productId: "item9",
        name: "Belt",
        image: ProductImage,
        productPrice: 2999, // was 29.99
        size: "M",
        color: {
            name: "Brown",
            hex: "#A52A2A",
        },
        sku: "BELT-BROWN-M",
        quantity: 1,
    },
    {
        id: "item10",
        productId: "item10",
        name: "Scarf",
        image: ProductImage,
        productPrice: 2499, // was 24.99
        size: "One Size",
        color: {
            name: "Purple",
            hex: "#800080",
        },
        sku: "SCARF-PURPLE-OS",
        quantity: 2,
    },
];

export const cartHandlers = [
    http.get("*/cart", async () => {
        return HttpResponse.json(cartItems);
    }),
];
