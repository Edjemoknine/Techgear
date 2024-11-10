import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ArrowRight,
  Clock,
  Cog,
  Headphones,
  Shield,
  PenTool,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Hardware Repair",
    description:
      "Professional repair services for all gaming peripherals and equipment",
    price: "From $49.99",
  },
  {
    icon: Cog,
    title: "Custom Configuration",
    description:
      "Personalized setup and configuration of your gaming equipment",
    price: "From $29.99",
  },
  {
    icon: Shield,
    title: "Extended Warranty",
    description: "Additional protection for your valuable gaming gear",
    price: "From $19.99/year",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance and troubleshooting",
    price: "Included",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Fine-tuning and optimization of your gaming setup",
    price: "From $39.99",
  },
  {
    icon: Clock,
    title: "Express Service",
    description: "Priority handling and faster turnaround times",
    price: "From $59.99",
  },
];

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 max-w-7xl mx-auto  px-8">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Comprehensive tech solutions and support services for gamers and
            professionals
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <service.icon className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="text-lg font-bold text-blue-600">
                  {service.price}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Need Custom Services?</h2>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contact Our Team
          </Button>
        </div>
      </div>
    </div>
  );
}
