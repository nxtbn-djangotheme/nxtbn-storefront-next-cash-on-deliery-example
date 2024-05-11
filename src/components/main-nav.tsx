import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}
interface MainNavProps {
  items?: NavItem[];
}

export const siteConfig = {
  name: "NXTBN STOREFRONT",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  mainNav: [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "Signup",
      href: "/signup",
    },
  ],
  links: {
    cart: "/cart",
    github: "https://github.com/nxtbn-com/nxtbn",
    docs: "https://ui.shadcn.com",
  },
};

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="md:flex gap-6 md:gap-10 hidden">
      <Link href="/" className="flex items-center space-x-2">
        <ShoppingBag className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
