import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ChevronRight,
  Shield,
  Download,
  Headphones,
  Settings,
} from "lucide-react";

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/50 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center space-x-2" href="#">
            <span className="text-2xl font-bold">techgear</span>
            <span className="text-blue-500">.</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link className="text-blue-500" href="#">
              HOME
            </Link>
            <Link className="text-gray-400 hover:text-white" href="#">
              PRODUCTS
            </Link>
            <Link className="text-gray-400 hover:text-white" href="#">
              SERVICES
            </Link>
            <Link className="text-gray-400 hover:text-white" href="#">
              CONTACTS
            </Link>
          </nav>
          <Button variant="outline" className="border-gray-700">
            SIGN IN
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24">
        <div className="container grid lg:grid-cols-2 gap-8 items-center py-24">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight tracking-tighter">
              RAZER MAMBA PRO
            </h1>
            <p className="text-gray-400 text-lg">
              Engineered for gaming elite developers to 2024. Made for winning.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-blue-500">
                USD 149.99
              </span>
            </div>
            <div className="flex space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700">BUY NOW</Button>
              <Button variant="outline" className="border-gray-700">
                MORE DETAILS
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/razer-Wx783PWcHwwrRLxrgqYgBi8gJnmSsj.png"
              alt="Razer Mamba Pro"
              width={600}
              height={600}
              className="object-contain"
            />
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-[120px] font-bold text-blue-500/20">
              PRO
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              WHICH TYPE OF GEAR ARE YOU LOOKING FOR?
            </h2>
            <Link
              href="#"
              className="text-blue-500 inline-flex items-center mt-4"
            >
              view more
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                {
                  title: "G502 HERO",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/G502-lJs6JQSxmK6ZA6oCyWbhxvQZTbamYy.png",
                  price: "$99.99",
                },
                {
                  title: "DRAGON TURBO",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Turbo-efu9sCvdsEnsviLsa0rJNBiVkHueyo.png",
                  price: "$79.99",
                },
                {
                  title: "GAMING MOUSE",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/butto-gXFL2KLxwRLxFqYhJd4wyj0yW22lAn.png",
                  price: "$69.99",
                },
              ].map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                      <div className="aspect-square relative mb-4">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {product.title}
                      </h3>
                      <p className="text-blue-500 font-bold">{product.price}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-black">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              WE PROVIDE MORE THAN HIGH-TECH PRODUCTS!
            </h2>
            <Link href="#" className="text-blue-500 inline-flex items-center">
              view more
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Lifetime Guarantee",
                description: "Quality assurance that lasts forever",
              },
              {
                icon: Download,
                title: "Free Software Updates",
                description: "Stay current with latest features",
              },
              {
                icon: Settings,
                title: "Advanced Configuration",
                description: "Customize every aspect of your gear",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Round-the-clock customer assistance",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VR Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                EXPERIENCE VR GAMING
              </h2>
              <p className="text-gray-400">
                Step into the future of gaming with our latest VR technology.
                Immerse yourself in stunning virtual worlds and experience
                gaming like never before.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                LEARN MORE
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VR-BM2QThYa1HiOW8DNea0PmwRWOiUyhu.png"
                alt="VR Headset"
                width={600}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">CONTACT US</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Input
                  placeholder="Your email"
                  className="bg-gray-900 border-gray-800"
                />
                <Input
                  placeholder="Subject"
                  className="bg-gray-900 border-gray-800"
                />
              </div>
              <Textarea
                placeholder="Your message"
                className="bg-gray-900 border-gray-800 min-h-[150px]"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                SUBMIT
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <Link className="flex items-center space-x-2 mb-4" href="#">
                <span className="text-2xl font-bold">techgear</span>
                <span className="text-blue-500">.</span>
              </Link>
              <p className="text-gray-400">
                Premium gaming gear for professionals
              </p>
            </div>
            {["PRODUCTS", "SUPPORT", "COMPANY", "LEGAL"].map(
              (section, index) => (
                <div key={index}>
                  <h4 className="font-bold mb-4">{section}</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <Link href="#" className="hover:text-white">
                        Link 1
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-white">
                        Link 2
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-white">
                        Link 3
                      </Link>
                    </li>
                  </ul>
                </div>
              ),
            )}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 techgear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
