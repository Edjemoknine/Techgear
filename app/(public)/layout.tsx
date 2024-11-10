import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { CartSlider } from "@/components/shared/Cart-Slider";
import CartProvider from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechGear",
  description: "TechGear E-commerce Platform for Tech and IT supplies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black">
          <CartProvider>
            <Navbar />
            <CartSlider />
            {children}
            <Footer />
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
