"use client";
import { Separator } from "@/components/ui/separator";
import { Heart, LogOut, Package, Settings, User } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <aside className="w-64 border-r border-gray-800 h-screen sticky top-0">
      <div className="p-6">
        <Link href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">techgear</span>
          <span className="text-blue-500">.</span>
        </Link>
      </div>
      <nav className="px-4 space-y-2 flex flex-col pt-8">
        <Link href="/profile">
          <Button
            variant={pathname === "/profile" ? "secondary" : "ghost"}
            className="w-full justify-start"
          >
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
        </Link>
        <Link href="/profile/orders">
          <Button
            variant={pathname === "/profile/orders" ? "secondary" : "ghost"}
            className="w-full justify-start"
          >
            <Package className="mr-2 h-4 w-4" />
            Orders
            <Badge className="ml-auto" variant="secondary">
              3
            </Badge>
          </Button>
        </Link>
        <Link href="/profile/wishlist">
          <Button
            variant={pathname === "/profile/wishlist" ? "secondary" : "ghost"}
            className="w-full justify-start"
          >
            <Heart className="mr-2 h-4 w-4" />
            Wishlist
          </Button>
        </Link>

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
  );
};

export default SideBar;
