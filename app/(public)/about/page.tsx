import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Shield, Users, Zap } from "lucide-react";

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 max-w-7xl mx-auto  px-8">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            About TechGear
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Leading the way in high-performance gaming and professional tech
            equipment since 2010.
          </p>
        </div>

        <div className="grid gap-12">
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At TechGear, we're dedicated to providing gamers and
                professionals with the highest quality tech equipment. Our
                commitment to innovation and performance drives everything we
                do.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn More
              </Button>
            </div>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <img
                  alt="Gaming Setup"
                  className="rounded-lg object-cover w-full"
                  height="300"
                  src="/placeholder.svg?height=300&width=400"
                  width="400"
                />
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-8">
            <h2 className="text-3xl font-bold text-center">
              Why Choose TechGear
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Zap,
                  title: "High Performance",
                  description:
                    "Top-tier gaming equipment designed for professional performance",
                },
                {
                  icon: Shield,
                  title: "Quality Assured",
                  description:
                    "All products undergo rigorous testing and quality control",
                },
                {
                  icon: Users,
                  title: "Community Driven",
                  description:
                    "Built by gamers, for gamers - community feedback shapes our products",
                },
                {
                  icon: Monitor,
                  title: "Tech Support",
                  description: "24/7 technical support and customer service",
                },
              ].map((feature, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 mb-4 text-blue-600" />
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold mb-8">Our Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "50K+", label: "Products Sold" },
                { number: "99%", label: "Customer Satisfaction" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index} className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
