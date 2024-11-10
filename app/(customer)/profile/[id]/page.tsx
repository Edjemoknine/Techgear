"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Package,
  Heart,
  Settings,
  LogOut,
  User,
  Clock,
  CreditCard,
  Home,
  Share2,
  Star,
  ChevronRight,
  Edit,
  Truck,
} from "lucide-react";

export default function Component() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="min-h-screen bg-black text-white max-w-7xl mx-auto px-8">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-800 h-screen sticky top-0">
          <div className="p-6">
            <Link href="#" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">techgear</span>
              <span className="text-blue-500">.</span>
            </Link>
          </div>
          <nav className="px-4 space-y-2">
            <Button
              variant={activeTab === "orders" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("orders")}
            >
              <Package className="mr-2 h-4 w-4" />
              Orders
              <Badge className="ml-auto" variant="secondary">
                3
              </Badge>
            </Button>
            <Button
              variant={activeTab === "wishlist" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("wishlist")}
            >
              <Heart className="mr-2 h-4 w-4" />
              Wishlist
            </Button>
            <Button
              variant={activeTab === "profile" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("profile")}
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Separator className="my-4" />
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:text-white"
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:text-white"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <header className="border-b border-gray-800 bg-black/50 backdrop-blur-lg sticky top-0 z-10">
            <div className="container flex h-16 items-center justify-between">
              <h1 className="text-xl font-bold">My Account</h1>
              <Button variant="outline" className="border-gray-700">
                <Settings className="h-4 w-4 mr-2" />
                Account Settings
              </Button>
            </div>
          </header>

          <div className="container py-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-8">
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>

              {/* Orders Tab */}
              <TabsContent value="orders">
                <div className="space-y-8">
                  <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Order #1234</p>
                        <h3 className="font-semibold">Arriving Tomorrow</h3>
                      </div>
                      <Button variant="outline" className="border-gray-700">
                        Track Order
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16">
                            <Image
                              src="/placeholder.svg?height=64&width=64"
                              alt="G502 Mouse"
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">
                              G502 HERO WIRELESS
                            </h4>
                            <p className="text-sm text-gray-400">Quantity: 1</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">$99.99</p>
                            <p className="text-sm text-gray-400">Processing</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <Truck className="h-4 w-4 text-blue-500" />
                            <span>Estimated delivery: Jan 12, 2024</span>
                          </div>
                          <Button variant="link" className="text-blue-500">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Past Orders */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Past Orders</h3>
                    <Card className="bg-gray-900 border-gray-800">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          {[1, 2].map((order) => (
                            <div
                              key={order}
                              className="flex items-center gap-4"
                            >
                              <div className="relative w-16 h-16">
                                <Image
                                  src="/placeholder.svg?height=64&width=64"
                                  alt="Product Image"
                                  fill
                                  className="object-cover rounded-lg"
                                />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold">
                                  Gaming Headset Pro
                                </h4>
                                <p className="text-sm text-gray-400">
                                  Delivered on Dec 15, 2023
                                </p>
                              </div>
                              <Button
                                variant="outline"
                                className="border-gray-700"
                              >
                                Buy Again
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Wishlist Tab */}
              <TabsContent value="wishlist">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((item) => (
                    <Card key={item} className="bg-gray-900 border-gray-800">
                      <CardContent className="p-6">
                        <div className="relative w-full aspect-square mb-4">
                          <Image
                            src="/placeholder.svg?height=300&width=300"
                            alt="Wishlist Item"
                            fill
                            className="object-cover rounded-lg"
                          />
                          <Button
                            size="icon"
                            variant="outline"
                            className="absolute top-2 right-2 bg-black/50 border-gray-700"
                          >
                            <Heart className="h-4 w-4 fill-current" />
                          </Button>
                        </div>
                        <h4 className="font-semibold">Mechanical Keyboard</h4>
                        <p className="text-sm text-gray-400 mb-4">
                          Premium Gaming Keyboard
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold">$149.99</span>
                          <Button variant="default">Add to Cart</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <div className="grid gap-8 max-w-2xl">
                  <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <h3 className="font-semibold">Personal Information</h3>
                      <Button variant="outline" className="border-gray-700">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-20 h-20">
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Profile Picture"
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">John Doe</h4>
                          <p className="text-sm text-gray-400">
                            Member since 2023
                          </p>
                        </div>
                      </div>
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            value="john.doe@example.com"
                            readOnly
                            className="bg-gray-800 border-gray-700"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            value="+1 234 567 890"
                            readOnly
                            className="bg-gray-800 border-gray-700"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900 border-gray-800">
                    <CardHeader>
                      <h3 className="font-semibold">Shipping Address</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                          <div className="flex items-center gap-4">
                            <Home className="h-5 w-5 text-gray-400" />
                            <div>
                              <p className="font-semibold">Home</p>
                              <p className="text-sm text-gray-400">
                                123 Gaming Street, Esports City, GG 12345
                              </p>
                            </div>
                          </div>
                          <Button variant="ghost">Edit</Button>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full border-gray-700"
                        >
                          Add New Address
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900 border-gray-800">
                    <CardHeader>
                      <h3 className="font-semibold">Payment Methods</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                          <div className="flex items-center gap-4">
                            <CreditCard className="h-5 w-5 text-gray-400" />
                            <div>
                              <p className="font-semibold">
                                •••• •••• •••• 4242
                              </p>
                              <p className="text-sm text-gray-400">
                                Expires 12/24
                              </p>
                            </div>
                          </div>
                          <Button variant="ghost">Edit</Button>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full border-gray-700"
                        >
                          Add New Payment Method
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
