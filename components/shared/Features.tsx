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
import HeadTitle from "./HeadTitle";

const Features = () => {
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
        {/*
         <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Made with quality</h2>
          <p className="text-gray-400">
            Discover what makes our products stand out
          </p>
        </div> */}
        <HeadTitle
          link="#"
          title="Made with quality"
          description="Discover what makes our products stand out"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-16 gap-8">
          {[
            {
              icon: Mouse,
              title: "Precision Sensor",
              description: "25K DPI for ultimate accuracy",
            },
            {
              icon: Gamepad,
              title: "Ergonomic Design",
              description: "Comfortable for extended sessions",
            },
            {
              icon: Keyboard,
              title: "Customizable",
              description: "Programmable buttons & macros",
            },
            {
              icon: MonitorPlay,
              title: "Low Latency",
              description: "1ms response time",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800"
            >
              <feature.icon className="h-12 w-12 text-[#0066FF] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
