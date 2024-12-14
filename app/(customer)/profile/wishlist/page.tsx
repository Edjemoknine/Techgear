import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/constant/data";
import { Heart } from "lucide-react";
import Image from "next/image";

const Wishlist = () => {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <Card key={item.id} className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={item.image}
                  alt="Wishlist Item"
                  fill
                  className="object-contain rounded-lg"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-2 right-2 bg-black/50 border-gray-700"
                >
                  <Heart className="h-5 w-5 fill-red-500" />
                </Button>
              </div>
              <h4 className="font-semibold text-white">{item.name}</h4>
              <p className="text-sm text-gray-400 mb-4">{item.category}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">${item.price}</span>
                <Button variant="default">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
