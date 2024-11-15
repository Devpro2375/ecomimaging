import { NextResponse } from "next/server";
import type { ProductType } from "@/type/ProductType";

// Mock database - in real app, this would come from your actual database
const products: ProductType[] = [
  {
    id: "1",
    name: "Product 1",
    price: 99.0,
    originPrice: 120.0,
    thumbImage: ["/images/product1.jpg"],
    description: "Product description",
    sale: true,
    new: false,
    rate: 4.5,
    sold: 100,
    quantity: 200,
    variation: [
      {
        color: "blue",
        colorCode: "#0000FF",
        image: "/images/product1-blue.jpg",
        colorImage: "/images/color-blue.jpg",
      },
    ],
    sizes: ["S", "M", "L"],
    action: "add to cart",
    quantityPurchase: 1,
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
