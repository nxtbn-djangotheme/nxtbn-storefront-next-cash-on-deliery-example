import PopularProducts from "@/app/components/popular-products";
import { ProductDetailType } from "@/lib/types";
import VariantToShow from "./components/variant-to-show";

async function ProductPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;

  let product: ProductDetailType | null = null;

  const BASE_POINT = process.env.BACKEND_URL || "http://localhost:8000";

  try {
    const response = await fetch(
      `${BASE_POINT}/product/storefront/api/products/${slug}`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("An error occurred while fetching the Products");
    }
    product = await response.json();
  } catch (error: any) {
    console.log(error);
  }

  if (!product) {
    throw new Error("Product not found");
  }

  return (
    <>
      <h1 className="text-3xl font-semibold uppercase">{product.name}</h1>
      <VariantToShow variant={product.default_variant} variants={product.variants} description={product.description} slug={product.name} />
      <div className="mt-10">
        <h1 className="text-3xl font-semibold">Related products</h1>
        <div className="flex mt-5">
          <PopularProducts />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
