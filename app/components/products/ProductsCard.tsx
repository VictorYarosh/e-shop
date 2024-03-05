'use client';

import { FC } from 'react';
import Image from 'next/image';

interface ProductCardProps {
  data: any;
}
const ProductsCard: FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm">
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            src={data.images[0].image}
            alt={data.name}
            className="w-full h-full object-contain"
            width={100}
            height={100}
          />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default ProductsCard;
