import Hero from "@/components/shared/Hero";
import Products from "@/components/shared/Products";
import Services from "@/components/shared/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Services />
    </>
  );
}
