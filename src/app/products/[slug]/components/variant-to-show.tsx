import { VariantType } from '@/lib/types';
import Image from 'next/image';
import React from 'react'
import AddToCartButton from './add-to-cart-button';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

function VariantToShow({variant, description, variants, slug}: {variant: VariantType, description: string, variants: VariantType[], slug: string}) {
  return (
    <div className="flex gap-5">
      <div className="bg-red-300 h-[30rem] w-full relative">
        {variant.variant_image[0]?.image ? (
          <Image
            src={variant.variant_image[0].image}
            alt={variant.variant_image[0].image_alt_text}
            height={5000}
            width={5000}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full object-cover bg-slate-400"></div>
        )}

        <div className="flex gap-5 mt-10 ms-10 flex-col absolute top-0">
          {variant.variant_image.slice(1).map((variantImage) => (
            <Image
              key={variantImage.id}
              src={variantImage.image}
              alt={variantImage.image_alt_text}
              height={5000}
              width={5000}
              priority={true}
              className="w-full h-full object-cover"
            />
          ))}
          <div className="w-[5rem] h-[5rem] bg-red-500"></div>
          <div className="w-[5rem] h-[5rem] bg-blue-500"></div>
        </div>
      </div>
      <div className="h-[30rem] w-full p-10 flex flex-col justify-center">
        <h1 className="text-3xl font-semibold uppercase">{variant.name}</h1>
        <p className="mt-5">{description}</p>
        <h1 className="text-4xl font-bold my-5">$ {variant.price}</h1>
        <div className="flex items-center gap-5">
          {variants.map((variant) => (
            <div
              key={variant.id}
              style={{ backgroundColor: variant.color_code || "red" }}
              className={`my-5 h-5 w-5 rounded-full ring-blue-200 ring-2`}
            ></div>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <AddToCartButton id={variant.id} price={variant.price} slug={slug} image_url={variant.variant_image[0]?.image || ""} name={variant.name} />
          <Button variant="secondary">
            <Heart className="mr-2" /> Add to wishlist
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VariantToShow