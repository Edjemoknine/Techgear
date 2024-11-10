"use client";
import FilterBar from "@/components/shared/FilterBar";
import { products } from "@/components/shared/Products";
import Grid from "@/components/utils/Grid";
import React, { useState } from "react";

const Products = () => {
  const [Layout, setLayout] = useState("Grid");
  console.log(Layout);

  return (
    <section className="max-w-6xl mx-auto  px-8 pt-40">
      <FilterBar Layout={Layout} setLayout={setLayout} />

      <div>
        <Grid type={Layout} data={[...products]} />
      </div>
    </section>
  );
};

export default Products;
