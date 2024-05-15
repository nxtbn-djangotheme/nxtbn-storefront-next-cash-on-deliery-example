import HomeCarousel from "./components/home-carousel";
import Category from "./components/category";
import PopularProducts from "./components/popular-products";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

async function page() {
  return (
    <div className="w-full py-5 h-screen">
      <div className="flex gap-5">
        <Category />
        <HomeCarousel />
      </div>

      <h1 className="mt-7 mb-3 text-2xl font-medium">Popular Products 2024</h1>

      <Suspense fallback={<PopularProductsLoader />}>
        <PopularProducts />
      </Suspense>
    </div>
  );
}

export default page;

function PopularProductsLoader() {
  return (
    <div className="flex gap-5">
      {Array.from({ length: 100 }, (_, index) => index + 1).map((number) => (
        <ProductLoader key={number} />
      ))}
    </div>
  );
}

function ProductLoader() {
  return (
    <div className="p-2  space-y-1">
      <Skeleton className="w-[150px] aspect-square rounded-md" />

      <Skeleton className="w-full h-4" />
      <Skeleton className="w-full h-4" />
      <div className="flex justify-between items-center gap-2">
        <Skeleton className="w-full h-4 rounded-sm" />
        <Skeleton className="h-10 aspect-square rounded-full" />
      </div>
      <Skeleton className="h-4" />
    </div>
  );
}
