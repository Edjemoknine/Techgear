"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const links = [
  { lebl: "HOME", href: "/" },
  { lebl: "PRODUCTS", href: "/products" },
  { lebl: "SERVICES", href: "/services" },
  { lebl: "CONTACTS", href: "/contacts" },
];
const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full fixed top-0 py-6 bg-black z-40">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <Logo />
        <nav className="flex justify-between gap-8 items-center ">
          {links.map((link) => (
            <Link
              className={cn(
                "text-gray-500 hover:text-primary duration-300",
                pathname === link.href
                  ? "text-primary border-b pb-1 border-primary"
                  : ""
              )}
              href={link.href}
              key={link.href}
            >
              {link.lebl}
            </Link>
          ))}
          <Button
            variant="outline"
            className="text-white bg-transparent hover:bg-primary"
          >
            <Link href={"/sign"}>SIGN IN</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
