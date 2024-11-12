import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const orders = [
  {
    id: "#123456",
    product: "Gaming Mouse",
    customer: "John Doe",
    total: "$99.99",
    status: "Completed",
  },
  {
    id: "#123457",
    product: "Mechanical Keyboard",
    customer: "Jane Smith",
    total: "$149.99",
    status: "Processing",
  },
  {
    id: "#123458",
    product: "Gaming Headset",
    customer: "Bob Johnson",
    total: "$79.99",
    status: "Shipped",
  },
  {
    id: "#123459",
    product: "Gaming Chair",
    customer: "Alice Brown",
    total: "$299.99",
    status: "Cancelled",
  },
  {
    id: "#123460",
    product: "Gaming Monitor",
    customer: "Charlie Davis",
    total: "$399.99",
    status: "Completed",
  },
];

export default function Orders() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Orders</h1>
        <Button>Add New Order</Button>
      </div>

      <Card className="bg-gray-900 border-none mb-6 ">
        <CardContent className="p-6">
          <div className="flex space-x-4">
            <Input
              placeholder="Search orders..."
              className="max-w-sm bg-inherit"
            />
            <Select>
              <SelectTrigger className="w-[180px] bg-inherit text-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="text-white bg-gray-900">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="default">Filter</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-none text-white">
        <CardHeader>
          <CardTitle className="text-white">Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-900 border-none">
                <TableHead>Order ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="bg-gray-900 border-none">
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === "Completed"
                          ? "success"
                          : order.status === "Processing"
                            ? "warning"
                            : order.status === "Shipped"
                              ? "info"
                              : "destructive"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
