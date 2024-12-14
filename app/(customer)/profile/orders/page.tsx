import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { products } from "@/constant/data";
import { Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Orders = () => {
  return (
    <div className="container py-8">
      <div className="space-y-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Order #1234</p>
              <h3 className="font-semibold text-blue-500">Arriving Tomorrow</h3>
            </div>
            <Button variant="outline" className="border-gray-700">
              <Link href={`/profile/orders/${456789}`}>Track Order</Link>
            </Button>
          </CardHeader>
          <CardContent>
            {products.slice(2).map((order) => (
              <div
                className="space-y-4 border-b border-gray-800 py-4 last:border-b-0"
                key={order.id}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={order.image}
                      alt="G502 Mouse"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{order.name}</h4>
                    <p className="text-sm text-gray-400">Quantity: 1</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-white">$99.99</p>
                    <p className="text-sm text-gray-400">Processing</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4 text-blue-500" />
                    <span className="text-gray-400">
                      Estimated delivery: Jan 12, 2024
                    </span>
                  </div>
                  <Button variant="link" className="text-blue-500">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Past Orders */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Past Orders</h3>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="space-y-4">
                {products.map((order) => (
                  <div key={order.id} className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src={order.image}
                        alt="Product Image"
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{order.name}</h4>
                      <p className="text-sm text-gray-400">
                        Delivered on Dec 15, 2023
                      </p>
                    </div>
                    <Button variant="outline" className="border-gray-700">
                      Buy Again
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Orders;
