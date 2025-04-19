'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Heart, MinusCircle, PlusCircle, Share2, Star } from 'lucide-react';
import { useState } from 'react';

// Fake product data
const product = {
  id: 1,
  name: 'G502 HERO Wireless Gaming Mouse',
  price: 99.99,
  description:
    'The Logitech G502 HERO Wireless is outfitted with the most advanced and configurable sensor yet. It tracks so precisely, you always hit your target exactly where you need to.',
  specs: [
    { name: 'Sensor', value: 'HERO 25K' },
    { name: 'Max DPI', value: '25,600' },
    { name: 'Buttons', value: '11 Programmable' },
    { name: 'Battery Life', value: 'Up to 60 hours' },
  ],
  images: ['/fire.png', '/G502.png', '/Turbo.png', '/fire.png'],
};

// Fake suggested products
const suggestedProducts = [
  {
    id: 2,
    name: 'Pro Mechanical Keyboard',
    price: 149.99,
    image: '/Turbo.png',
    description: 'RGB Mechanical Gaming Keyboard',
  },
  {
    id: 3,
    name: 'Studio Headphones',
    price: 199.99,
    image: '/G502.png',
    description: 'Professional Studio Headphones',
  },
  {
    id: 4,
    name: '4K Gaming Monitor',
    price: 399.99,
    image: '/fire.png',
    description: '27-inch 4K HDR Gaming Monitor',
  },
];

export default function Component() {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white pt-20 max-w-7xl mx-auto  px-8">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="relative aspect-square">
              <img
                src={product.images[activeImage]}
                alt={`${product.name} - Image ${activeImage + 1}`}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative aspect-square overflow-hidden rounded-lg ${
                    activeImage === index ? 'ring-2 ring-blue-600' : ''
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} - Thumbnail ${index + 1}`}
                    className="object-contain w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">(128 reviews)</span>
              </div>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-4">
                ${product.price.toFixed(2)}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-full"
                >
                  <MinusCircle className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold">{quantity}</span>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-full"
                >
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-4 mb-8">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Add to Cart
                </Button>
                <Button variant="secondary" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Card className="bg-gray-900 border-zinc-800">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-white">
                  Product Specifications
                </h2>
                <div className="grid gap-4">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="grid grid-cols-2">
                      <div className="text-muted-foreground">{spec.name}</div>
                      <div className="text-gray-200">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-28">
          <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {suggestedProducts.map((product) => (
              <Card key={product.id} className="bg-gray-900 border-zinc-800">
                <CardContent className="p-4">
                  <img
                    alt={product.name}
                    className="rounded-lg object-contain w-full aspect-square mb-4"
                    height="400"
                    src={product.image}
                    width="400"
                  />
                  <h3 className="text-xl font-bold mb-2 text-white truncate">
                    {product.name}
                  </h3>

                  <div className="text-lg font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
