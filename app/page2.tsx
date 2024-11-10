import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  ShoppingCart,
  Star,
  Clock,
  Shield,
  Download,
  Headphones,
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
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
            SIGN IN
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24">
        <div className="container grid lg:grid-cols-2 gap-8 items-center py-24">
          <div className="space-y-6">
            <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 px-4 py-1">
              NEW RELEASE
            </Badge>
            <h1 className="text-5xl font-bold leading-tight tracking-tighter">
              G502 HERO WIRELESS
            </h1>
            <p className="text-gray-400 text-lg">
              Logitech's High Performance Wireless Gaming Mouse with advanced
              sensor technology
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-blue-500">
                USD 99.99
              </span>
              <div className="flex items-center text-yellow-500">
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
              </div>
            </div>
            <div className="flex space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ShoppingCart className="mr-2 h-4 w-4" />
                ADD TO CART
              </Button>
              <Button
                variant="outline"
                className="border-gray-700 hover:bg-gray-800"
              >
                MORE DETAILS
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="G502 Hero Wireless Mouse"
              width={600}
              height={600}
              className="object-contain"
            />
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-[120px] font-bold text-blue-500 opacity-20">
              G502
            </div>
          </div>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">CUTTING-EDGE FEATURES</h2>
            <p className="text-gray-400">
              Experience gaming excellence with advanced technology
            </p>
          </div>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                {
                  title: "HERO 25K SENSOR",
                  description:
                    "Industry-leading precision with zero smoothing, filtering, or acceleration",
                },
                {
                  title: "WIRELESS FREEDOM",
                  description:
                    "LIGHTSPEED wireless technology for ultra-responsive gameplay",
                },
                {
                  title: "PROGRAMMABLE BUTTONS",
                  description:
                    "11 customizable buttons for ultimate control and personalization",
                },
              ].map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
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

      {/* Product Categories */}
      <section className="py-24 bg-black">
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
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Gaming",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                title: "Graphic Design",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                title: "Office & Others",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((category, index) => (
              <Link
                key={index}
                href="#"
                className="group relative overflow-hidden rounded-xl bg-gray-800 aspect-square hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              WE PROVED MORE THAN HIGH-TECH PRODUCTS!
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
                icon: ShoppingCart,
                title: "Good Price",
                description: "Competitive pricing for premium gear",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Round-the-clock customer assistance",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
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

      {/* Contact Section */}
      <section className="py-24 bg-black">
        <div className="container text-center">
          <h2 className="text-5xl font-bold mb-8">
            How can we help you?
            <span className="inline-block ml-4">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt="Contact Icon"
                width={50}
                height={50}
                className="inline-block"
              />
            </span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            To ensure that all our customers get the best experience, our
            support team is always ready to assist you.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contact US
          </Button>
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
            {["ABOUT", "SERVICES", "WHY US", "CONTACT"].map(
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
            <p>Copyright © 2024 techgear Creative</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
