import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 min-h-screen grid place-items-center ">
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1 pt-24">
        <div className="flex flex-col gap-6 items-start justify-center text-white">
          <h1 className="text-5xl font-bold ">G502 HERO WIRELESS</h1>
          <h3 className="text-3xl text-gray-500">
            {`Logitech 's`} High Performance Wireless Gaming Mouse
          </h3>
          <p>
            The Razer Ourabarose is outfitted with the mosr advenced and
            confugurable sensor yet, the all new B200dpi 4G laser sansor. it
            track so procesily, you always hit target exactly where you need to{" "}
          </p>

          <h2 className="text-primary text-2xl">USD 99,99</h2>
          <div className="flex gap-4 items-center">
            <Button>ADD TO CART</Button>
            <Button variant={"outline"} className="bg-transparent">
              MORE DETAILS
            </Button>
          </div>
        </div>
        <div className="relative ">
          <div>
            <Image
              src="/G502.png"
              alt=""
              width={350}
              height={400}
              className="z-20 relative md:-right-6"
            />
          </div>
          <h1 className="text-9xl font-black text-primary z-0 absolute -right-8 rotate-90 top-1/2">
            G502
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
