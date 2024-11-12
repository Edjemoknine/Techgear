"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bell, Search, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sidebarItems = [
  { icon: "grid", label: "Dashboard", href: "/admin" },
  { icon: "package", label: "Products", href: "/admin/products" },
  { icon: "shopping-cart", label: "Orders", href: "/admin/orders" },
  { icon: "bar-chart", label: "Analytics", href: "/admin/analytics" },
  { icon: "bar-chart", label: "Notifications", href: "/admin/notifications" },
  { icon: "users", label: "Customers", href: "/admin/customers" },
  { icon: "users", label: "Tracking", href: "/admin/tracking" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="flex h-screen  text-white">
      {/* Sidebar */}
      <aside className="w-56 border-r border-gray-900  p-4">
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-xl font-bold">ShopPoint</span>
        </div>
        <nav>
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center p-2 rounded-lg mb-2 ${
                router.pathname === item.href
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:bg-[#1A1A1A] hover:text-white"
              }`}
            >
              <span className={`lucide lucide-${item.icon} mr-2`}></span>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className=" p-4 flex items-center justify-between">
          <div className="flex items-center w-1/3">
            <Input
              type="text"
              placeholder="Search..."
              className="bg-gray-900 right-0 border-gray-900 focus:!ring-0 focus:!outline-none"
            />
            <Search className="w-5 h-5 text-gray-400 -ml-8" />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
              <span>John Doe</span>
            </div>
            <Button variant="ghost" size="icon">
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto  p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
