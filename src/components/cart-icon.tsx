"use client";
import { useCartStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { BaggageClaim } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { siteConfig } from "./main-nav";
import { buttonVariants } from "./ui/button";

function CartIcon() {
  const { items } = useCartStore();

  const totalQuantity = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  return (
    <Link href={siteConfig.links.cart}>
      <div
        className={cn(
          buttonVariants({
            size: "icon",
            variant: "ghost",
          }),
          "relative"
        )}
        id="shopping-cart-icon"
      >
        <BaggageClaim strokeWidth={1.7} />
        <span className="sr-only">Cart</span>
        <span className="absolute top-[-5px] right-[-5px] bg-slate-700 dark:bg-slate-200 dark:text-black text-white py-[1px] px-[3px] rounded-full">
          {totalQuantity}
        </span>
      </div>
    </Link>
  );
}

export default CartIcon;
