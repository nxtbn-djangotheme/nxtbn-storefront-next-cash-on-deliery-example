import { ProductType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import CartRoundedButton from "./cart-rounded-button";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Product({ product }: { product: ProductType }) {
  return (
    <div className="p-2 rounded-sm hover:shadow-md">
      <Link href={`/products/${product.slug}`}>
        <div className="overflow-hidden rounded-md w-[150px] aspect-square">
          {product.default_variant?.variant_image[0]?.image ? (
            <Image
              src={product.default_variant?.variant_image[0]?.image}
              height={150}
              width={250}
              priority={true}
              className="w-full aspect-square object-cover transition-all hover:scale-105"
              alt={product.default_variant?.variant_image[0]?.image_alt_text}
            />
          ) : (
            <div
              style={{ backgroundColor: getRandomColor() }}
              className="w-[150px] aspect-square bg-orange-200"
            ></div>
          )}
        </div>

        <div>
          <h4>{product.name}</h4>
          <h6>
            {String(product.brand).length > 10
              ? product.brand.substring(0, 10) + "..."
              : product.brand}
          </h6>
        </div>
      </Link>
      <div className="flex justify-between items-center">
        <span className="text-red-500 text-sm">⭐⭐⭐⭐⭐</span>
        <CartRoundedButton
          id={product.id}
          name={product.name}
          image_url={product.default_variant?.variant_image[0]?.image || ""}
          price={Number(product.default_variant?.price || 0)}
          slug={product.slug}
        />
      </div>
      <span>$&nbsp;{product.default_variant?.price}</span>
    </div>
  );
}

export default Product;
