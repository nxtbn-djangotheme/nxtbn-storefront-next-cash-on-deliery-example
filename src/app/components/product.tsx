import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Album } from '../data/albums';

function Product({album}: {album: Album}) {
  return (
    <div className="p-2 rounded-sm hover:shadow-md">
      <Link href={"/products/abc/123"} key={album.name}>
        <div className="overflow-hidden rounded-md relative">
          <Image
            src={album.cover}
            height={150}
            width={250}
            className="w-[150px] aspect-square object-cover transition-all hover:scale-105"
            alt={album.name}
          />
          {/* <Button variant={"secondary"} className="p-[1px] aspect-square rounded-full absolute top-5 left-5">
                <Heart size={20} />
              </Button> */}
        </div>

        <div>
          <h4>{album.name}</h4>
          <h6>{album.artist}</h6>
        </div>
      </Link>
      <div className="flex justify-between items-center">
        <span className="text-red-500">⭐⭐⭐⭐⭐</span>
        <Button className="p-2 rounded-full">
          <Plus />
        </Button>
      </div>
      <span>$&nbsp;450</span>
    </div>
  );
}

export default Product
