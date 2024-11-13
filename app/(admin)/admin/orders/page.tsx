"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Filter,
  MoreHorizontal,
  RefreshCcw,
  Star,
  Upload,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample data
const orders = [
  {
    id: "#123456",
    product: {
      name: "Phone 234-M Grey Color",
      image: "/placeholder.svg",
      price: 800,
      salePrice: 600,
    },
    sku: "123456TR",
    category: "Electronics",
    payment: {
      amount: 600,
      status: "Fully Paid",
    },
    status: "COMPLETED",
    rating: 4,
  },
  {
    id: "#123457",
    product: {
      name: "White Jumper",
      image: "/placeholder.svg",
      price: 400,
      salePrice: 180,
    },
    sku: "F34567FR",
    category: "Fashion",
    payment: {
      amount: 180,
      status: "Partially Paid",
    },
    status: "CONFIRMED",
    rating: 4,
  },
  {
    id: "#123458",
    product: {
      name: "Wireless Earbuds",
      image: "/placeholder.svg",
      price: 150,
      salePrice: 120,
    },
    sku: "W78901EB",
    category: "Electronics",
    payment: {
      amount: 120,
      status: "Fully Paid",
    },
    status: "COMPLETED",
    rating: 5,
  },
  {
    id: "#123459",
    product: {
      name: "Leather Wallet",
      image: "/placeholder.svg",
      price: 80,
      salePrice: 60,
    },
    sku: "L56789WL",
    category: "Fashion",
    payment: {
      amount: 60,
      status: "Fully Paid",
    },
    status: "CONFIRMED",
    rating: 3,
  },
  {
    id: "#123460",
    product: {
      name: "Smart Watch",
      image: "/placeholder.svg",
      price: 300,
      salePrice: 250,
    },
    sku: "S12345SW",
    category: "Electronics",
    payment: {
      amount: 250,
      status: "Fully Paid",
    },
    status: "COMPLETED",
    rating: 4,
  },
];

const stats = [
  {
    title: "Orders Completed",
    value: "2,345",
    icon: Check,
    color: "text-blue-500",
  },
  {
    title: "Orders Confirmed",
    value: "323",
    icon: ArrowRight,
    color: "text-green-500",
  },
  {
    title: "Orders Canceled",
    value: "17",
    icon: ArrowLeft,
    color: "text-red-500",
  },
  {
    title: "Orders on Refund",
    value: "2",
    icon: RefreshCcw,
    color: "text-yellow-500",
  },
];

export default function Component() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <div className="flex min-h-screen flex-col ">
      <div className="flex-1 space-y-6 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="dark:bg-gray-900 bg-gray-50  hover:bg-gray-700"
            >
              <Upload className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button
              variant="outline"
              className="dark:bg-gray-900 bg-gray-50  hover:bg-gray-700"
            >
              <Download className="mr-2 h-4 w-4" />
              Import
            </Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="dark:bg-gray-900 bg-gray-50 ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Input
              placeholder="Search orders..."
              className="max-w-sm dark:bg-gray-900 bg-gray-50 "
            />
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[180px] dark:bg-gray-900 bg-gray-50 ">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-900 bg-gray-50 ">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="canceled">Canceled</SelectItem>
                <SelectItem value="refund">Refund</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px] dark:bg-gray-900 bg-gray-50 ">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-900 bg-gray-50 ">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="fashion">Fashion</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              className="dark:bg-gray-900 bg-gray-50  hover:bg-gray-700"
            >
              <Filter className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="dark:bg-gray-900 bg-gray-50  hover:bg-gray-700"
            >
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
          <div className="rounded-md  dark:bg-gray-900 bg-gray-50">
            <Table>
              <TableHeader>
                <TableRow className="dark:bg-gray-900 bg-gray-50">
                  <TableHead className="text-gray-500">Order</TableHead>
                  <TableHead className="text-gray-500">Product</TableHead>
                  <TableHead className="text-gray-500">SKU</TableHead>
                  <TableHead className="text-gray-500">Category</TableHead>
                  <TableHead className="text-gray-500">Payment</TableHead>
                  <TableHead className="text-gray-500">Status</TableHead>
                  <TableHead className="text-gray-500">Rating</TableHead>
                  <TableHead className="text-right text-gray-500">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentOrders.map((order) => (
                  <TableRow
                    key={order.id}
                    className=" dark:bg-gray-900 bg-gray-50"
                  >
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <img
                          src={order.product.image}
                          alt={order.product.name}
                          className="h-10 w-10 rounded-md bg-gray-800"
                        />
                        <div>
                          <div className="font-medium">
                            {order.product.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            ${order.product.salePrice} / ${order.product.price}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{order.sku}</TableCell>
                    <TableCell>{order.category}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">
                          ${order.payment.amount}
                        </div>
                        <div className="text-sm text-gray-400">
                          {order.payment.status}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          order.status === "COMPLETED"
                            ? "border-blue-500 bg-blue-500/10 text-blue-500"
                            : order.status === "CONFIRMED"
                              ? "border-green-500 bg-green-500/10 text-green-500"
                              : "border-red-500 bg-red-500/10 text-red-500"
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < order.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="h-8 w-8 p-0 text-gray-400 hover:"
                          >
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="bg-gray-800 "
                        >
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem className="hover:bg-gray-700">
                            View order
                          </DropdownMenuItem>
                          <DropdownMenuItem className="hover:bg-gray-700">
                            View customer
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-gray-700" />
                          <DropdownMenuItem className="hover:bg-gray-700">
                            Print order
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => setCurrentPage(index + 1)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
