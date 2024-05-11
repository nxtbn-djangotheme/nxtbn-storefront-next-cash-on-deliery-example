import Product from "@/app/components/product";
import { listenNowAlbums } from "@/app/data/albums";
import { Button } from "@/components/ui/button";
import { Plus, Heart } from "lucide-react";

function ProductPage({
  params,
}: {
  params: {
    slug: string;
    id: string;
  };
}) {
  const { slug, id } = params;
  return (
    <>
      <div className="flex gap-5">
        <div className="bg-red-300 h-[30rem] w-full">
          <div className="flex gap-5 mt-10 ms-10 flex-col">
            <div className="w-[5rem] h-[5rem] bg-red-500"></div>
            <div className="w-[5rem] h-[5rem] bg-blue-500"></div>
          </div>
        </div>
        <div className="h-[30rem] w-full p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold">Products Title</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            repellendus quo alias velit. Officiis, corrupti. Maxime nulla atque
            nihil debitis.
          </p>
          <h1 className="text-4xl font-bold my-5">$ 567</h1>
          <div className="flex items-center gap-5">
            <div className="my-5 h-5 w-5 bg-blue-500 rounded-full ring ring-blue-200"></div>
            <div className="my-5 h-5 w-5 bg-yellow-500 rounded-full ring ring-yellow-200"></div>
            <div className="my-5 h-5 w-5 bg-red-500 rounded-full ring ring-red-200"></div>
          </div>
          <div className="flex items-center gap-5">
            <Button>
              <Plus className="mr-2" /> Add to cart
            </Button>
            <Button variant="secondary">
              <Heart className="mr-2" /> Add to wishlist
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl font-semibold">Related products</h1>
        <div className="flex mt-5">
          {listenNowAlbums.map((album) => (
            <Product key={album.name} album={album} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
