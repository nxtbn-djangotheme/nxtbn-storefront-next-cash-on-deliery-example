import Link from "next/link";

import { MainNav, siteConfig } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { BaggageClaim, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserNav } from "./user-nav";
import { Input } from "@/components/ui/input";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
          <Input type="text" placeholder="Search..." className="hidden md:block" />
            <Link href={siteConfig.links.cart}>
              <div
                className={cn(
                  buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  }),
                  "relative"
                )}
              >
                <BaggageClaim strokeWidth={1.7} />
                <span className="sr-only">Cart</span>
                <span className="absolute top-[-5px] right-[-5px] bg-slate-700 dark:bg-slate-200 dark:text-black text-white py-[1px] px-[3px] rounded-full">
                  0
                </span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </div>
            </Link>
            <ThemeToggle />
            <UserNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
