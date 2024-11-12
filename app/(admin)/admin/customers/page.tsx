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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    orders: 5,
    spent: "$499.95",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    orders: 3,
    spent: "$299.97",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    orders: 7,
    spent: "$699.93",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    orders: 2,
    spent: "$199.98",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    orders: 4,
    spent: "$399.96",
  },
];

export default function Customers() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Customers</h1>
        <Button>Add New Customer</Button>
      </div>

      <Card className="bg-gray-900 mb-6 border-none">
        <CardContent className="p-6">
          <div className="flex space-x-4">
            <Input
              placeholder="Search customers..."
              className="max-w-sm bg-inherit"
            />
            <Button variant="link">Filter</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-none">
        <CardHeader>
          <CardTitle className="text-white">Customer List</CardTitle>
        </CardHeader>
        <CardContent className="bg-gray-900 text-white border-none">
          <Table>
            <TableHeader>
              <TableRow className="border-none">
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id} className="border-none">
                  <TableCell className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage
                        src={`https://api.dicebear.com/6.x/initials/svg?seed=${customer.name}`}
                      />
                      <AvatarFallback>
                        {customer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span>{customer.name}</span>
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell>{customer.spent}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="mr-2">
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      Edit
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
