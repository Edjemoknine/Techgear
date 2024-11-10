import React from "react";
import HeadTitle from "./HeadTitle";
import ProductCard from "./ProductCard";

export const products = [
  { image: "/fire.png", title: "Gaming" },
  { image: "/G502.png", title: "Graphic Design" },
  { image: "/Turbo.png", title: "Office & Others" },
];
const Products = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 min-h-screen grid place-items-center">
      <HeadTitle
        title="PRODUCTS"
        description="which type of gear are you looking for?"
        link=""
      />

      <div className="grid w-full md:grid-cols-3 gap-8 grid-cols-1">
        {products.map((product) => (
          <ProductCard product={product} key={product.image} />
        ))}
      </div>
    </div>
  );
};

export default Products;
