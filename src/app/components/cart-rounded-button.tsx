"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";
import { Plus } from "lucide-react";
import React from "react";

type propsType = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image_url: string;
};
function CartRoundedButton(props: propsType) {
  const { addToCart } = useCartStore();

  return (
    <Button
      className="p-2 rounded-full"
      onClick={() => addToCart({ ...props, quantity: 1 })}
    >
      <Plus />
    </Button>
  );
}

export default CartRoundedButton;
