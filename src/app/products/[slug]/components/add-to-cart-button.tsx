"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";
import { Plus } from "lucide-react";

type propsType = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image_url: string;
};
function AddToCartButton(props: propsType) {
  const { addToCart, items } = useCartStore();

  let cartItem = { ...props, quantity: 1 };

  const handleCart = () => {
    addToCart(cartItem);
  };

  return (
    <Button onClick={handleCart}>
      <Plus className="mr-2" /> Add to cart
    </Button>
  );
}

export default AddToCartButton;
