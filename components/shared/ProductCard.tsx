import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
type Props = {
  image: string;
  title: string;
};
const ProductCard = ({ product }: { product: Props }) => {
  return (
    <div className="bg-neutral-60 border-gray-500 group overflow-hidden relative hover:border-primary border cursor-pointer rounded-xl p-4 flex flex-col gap-4 items-center justify-between">
      <Image src={product.image} alt="product" width={150} height={150} />
      <Heart className="absolute top-6 group-hover:right-6 text-white duration-300 hover:text-primary -right-8" />
      <h3 className="text-xl text-white font-semibold">{product.title}</h3>
    </div>
  );
};

export default ProductCard;
