import Features from "@/components/shared/Features";
import Hero from "@/components/shared/Hero";
import Products from "@/components/shared/Products";
import Services from "@/components/shared/Services";
import Specifications from "@/components/shared/Specifications";
import VR from "@/components/shared/VR";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Services />
      <VR />
      <Features />
      <Specifications />
    </>
  );
}
