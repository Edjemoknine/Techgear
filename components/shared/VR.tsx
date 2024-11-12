import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  HeadphonesIcon,
  Laptop,
  PiggyBank,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const VR = () => {
  return (
    <section className=" max-w-7xl  mx-auto px-8 my-20 ">
      <div className="container py-24 bg-gradient-to-r from-gray-900 to-black rounded-xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight text-white">
              EXPERIENCE VR GAMING
            </h2>
            <p className="text-gray-400">
              Step into the future of gaming with our latest VR technology.
              Immerse yourself in stunning virtual worlds and experience gaming
              like never before.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              LEARN MORE
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/vr2.png"
              alt="VR Headset"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default VR;
