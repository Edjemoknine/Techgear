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
import { products } from "@/constant/data";
export default function Component() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="min-h-screen bg-black text-white px-4">
      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <div className="container py-8">
            <div className="grid gap-8 max-w-2xl ">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between ">
                  <h3 className="font-semibold text-white">
                    Personal Information
                  </h3>
                  <Button variant="outline" className="border-gray-700">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src="/avatar.webp"
                        alt="Profile Picture"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">John Doe</h4>
                      <p className="text-sm text-gray-400">Member since 2023</p>
                    </div>
                  </div>
                  <div className="grid gap-4 text-white">
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

              <Card className="bg-gray-900 border-gray-800 ">
                <CardHeader>
                  <h3 className="font-semibold text-white">Shipping Address</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                      <div className="flex items-center gap-4">
                        <Home className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-semibold text-white">Home</p>
                          <p className="text-sm text-gray-400 ">
                            123 Gaming Street, Esports City, GG 12345
                          </p>
                        </div>
                      </div>
                      <Button variant="secondary">Edit</Button>
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
                  <h3 className="font-semibold text-white">Payment Methods</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                      <div className="flex items-center gap-4">
                        <CreditCard className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-semibold text-white">
                            •••• •••• •••• 4242
                          </p>
                          <p className="text-sm text-gray-400">Expires 12/24</p>
                        </div>
                      </div>
                      <Button variant="secondary">Edit</Button>
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
          </div>
        </main>
      </div>
    </div>
  );
}
