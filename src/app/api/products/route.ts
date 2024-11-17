import { NextResponse } from "next/server";
import type { ProductType } from "@/type/ProductType";

// Mock database - in real app, this would come from your actual database
const products: ProductType[] = [
  {
    id: "1",
    category: "clothing",
    type: "shirt",
    name: "Product 1",
    gender: "unisex",
    new: true,
    sale: true,
    rate: 4.5,
    price: 99.0,
    originPrice: 120.0,
    brand: "BrandName",
    sold: 100,
    quantity: 200,
    quantityPurchase: 1,
    sizes: ["S", "M", "L"],
    variation: [
      {
        color: "blue",
        colorCode: "#0000FF",
        colorImage: "/images/color-blue.jpg",
        image: "/images/product1-blue.jpg",
      },
    ],
    thumbImage: ["/images/product1.jpg"],
    images: ["/images/product1-large.jpg"],
    description: "Product description",
    action: "add to cart",
    slug: "product-1",
  },
  // You can add more products with similar structure
  {
    id: "2",
    category: "clothing",
    type: "pants",
    name: "Product 2",
    gender: "male",
    new: false,
    sale: false,
    rate: 3.8,
    price: 49.99,
    originPrice: 60.0,
    brand: "BrandName2",
    sold: 150,
    quantity: 300,
    quantityPurchase: 2,
    sizes: ["M", "L", "XL"],
    variation: [
      {
        color: "black",
        colorCode: "#000000",
        colorImage: "/images/color-black.jpg",
        image: "/images/product2-black.jpg",
      },
    ],
    thumbImage: ["/images/product2.jpg"],
    images: ["/images/product2-large.jpg"],
    description: "Another product description",
    action: "add to cart",
    slug: "product-2",
  },
  // Add more products as needed
];

export async function GET(request: Request) {
  // Get search params from URL
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    // Return single product if ID is provided
    const product = products.find((p) => p.id === id);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(product);
  }

  // Return all products
  return NextResponse.json(products);
}
