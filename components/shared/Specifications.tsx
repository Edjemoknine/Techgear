"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import {
  Shield,
  Laptop,
  HeadphonesIcon,
  Settings,
  ChevronRight,
  Mouse,
  Gamepad,
  Keyboard,
  MonitorPlay,
} from "lucide-react";

const Specifications = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="py-24 bg-black max-w-7xl mx-auto px-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">
              Technical Specifications
            </h2>
            <div className="space-y-4">
              {[
                "15 programmable controls",
                "Dual connectivity with lightspeed",
                "Hero 25K sensor",
                "Spin. Ratchet. Switch.",
              ].map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="h-2 w-2 bg-[#0066FF] rounded-full" />
                  <p className="text-gray-300">{spec}</p>
                </motion.div>
              ))}
            </div>
            <Button className="bg-[#0066FF] hover:bg-[#0066FF]/90">
              Learn More
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/Turbo.png"
              alt="Product Specifications"
              width={300}
              height={350}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Specifications;
