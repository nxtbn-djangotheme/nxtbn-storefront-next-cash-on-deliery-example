import { Button } from "@/components/ui/button";
import { TabletSmartphone } from "lucide-react";
import HomeCarousel from "./components/home-carousel";
import Product from "./components/product";
import { listenNowAlbums } from "./data/albums";

const Categories = [
  {
    id: 1,
    name: "Electronics",
    icon: <TabletSmartphone />,
  },
  {
    id: 2,
    name: "Electronics",
    icon: <TabletSmartphone />,
  },
  {
    id: 3,
    name: "Electronics",
    icon: <TabletSmartphone />,
  },
  {
    id: 4,
    name: "Electronics",
    icon: <TabletSmartphone />,
  },
  {
    id: 5,
    name: "Electronics",
    icon: <TabletSmartphone />,
  },
  {
    id: 6,
    name: "Electronics",
    icon: <TabletSmartphone />,
  },
];

function page() {
  return (
    <div className="w-full py-5 h-screen">
      <HomeCarousel />
      <h1 className="mt-7 mb-3 text-2xl font-medium">Our Top Categories</h1>
      <div className="flex gap-5">
        {Categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col justify-center items-center"
          >
            <div className="overflow-hidden rounded-full hover:shadow-md">
              <Button
                variant={"secondary"}
                className="py-10 aspect-square transition-all hover:scale-150"
              >
                {category.icon}
              </Button>
            </div>
            {category.name}
          </div>
        ))}
      </div>
      <h1 className="mt-7 mb-3 text-2xl font-medium">Popular Products 2024</h1>

      <div className="flex items-center gap-2">
        {listenNowAlbums.map((album) => (
          <Product album={album} key={album.name} />
        ))}
      </div>
    </div>
  );
}

export default page;
