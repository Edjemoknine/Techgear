"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import MobileNavigation from "./MobileNavigation";
const links = [
  { lebl: "HOME", href: "/" },
  { lebl: "PRODUCTS", href: "/products" },
  { lebl: "SERVICES", href: "/services" },
  { lebl: "CONTACTS", href: "/contact" },
];
const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { setOpenCart, cartItems } = useCart();
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className="w-full fixed top-0 py-6 bg-black z-40">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Logo />
        <nav className="flex justify-between gap-8 items-center ">
          <div className="flex-1 hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <Link
                className={cn(
                  "text-gray-500 hover:text-primary duration-300 text-sm",
                  pathname === link.href
                    ? "text-primary border-b pb-1 border-primary"
                    : "",
                )}
                href={link.href}
                key={link.href}
              >
                {link.lebl}
              </Link>
            ))}
          </div>
          <Button
            onClick={() => setOpenCart((prev) => !prev)}
            variant="outline"
            size="icon"
            className="relative bg-inherit hover:bg-blue-500"
          >
            <ShoppingCart className="h-5 w-5 text-white" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </Button>
          <Button
            onClick={() => setOpenNav(!openNav)}
            variant="outline"
            size="icon"
            className="text-white  md:hidden flex items-center justify-center rounded-lg bg-transparent hover:bg-primary hover:border-black"
          >
            <Menu className="h-5 w-5 text-white" />
          </Button>
          <Button
            variant="outline"
            className="text-white hidden md:block rounded-lg bg-transparent hover:bg-primary hover:border-black"
          >
            <Link href={"/sign-in"}>SIGN IN</Link>
          </Button>
        </nav>
        <MobileNavigation open={openNav} setOpen={setOpenNav} />
      </div>
    </header>
  );
};

export default Navbar;
