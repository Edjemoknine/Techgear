"use client";
import Link from "next/link";
import React, { useState } from "react";
const links = [
  { lebl: "HOME", href: "/" },
  { lebl: "PRODUCTS", href: "/products" },
  { lebl: "SERVICES", href: "/services" },
  { lebl: "CONTACTS", href: "/contacts" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full fixed top-0 ">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white">
            techgear <span className="text-primary">.</span>
          </h1>
        </div>
        <nav className="flex justify-between gap-6 items-center text-secondary hover:text-primary duration-300">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.lebl}
            </Link>
          ))}
          <Button variant="outline" className="hover:text-primary">
            <Link href={"/sign"}>SIGN IN</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
