import React from "react";
import Product from "./product";
import { ProductType } from "@/lib/types";

async function PopularProducts() {
  const BASE_POINT = process.env.BACKEND_URL || "http://localhost:8000";

  const response = await fetch(
    `${BASE_POINT}/product/storefront/api/products/`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("An error occurred while fetching the Products");
  }

  const json = await response.json();
  const products = json.results

  console.log(products)

  return (
    <div className="flex items-center gap-2">
      {products.map((product: ProductType) => (
        <Product product={product} key={product.id} />
      ))}
      data
    </div>
  );
}

export default PopularProducts;
