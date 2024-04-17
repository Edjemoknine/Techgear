import Image from "next/image";
import React from "react";
type Props = {
  image: string;
  title: string;
};
const ProductCard = ({ product }: { product: Props }) => {
  return (
    <div className="bg-neutral-600 cursor-pointer rounded-xl p-4 flex flex-col gap-4 items-center justify-between">
      <Image src={product.image} alt="product" width={200} height={200} />
      <h3 className="text-xl text-white font-semibold">{product.title}</h3>
    </div>
  );
};

export default ProductCard;
