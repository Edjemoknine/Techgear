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

const products = [
  {
    id: 1,
    name: "Gaming Mouse",
    category: "Accessories",
    price: "$99.99",
    stock: 50,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: "$149.99",
    stock: 30,
  },
  {
    id: 3,
    name: "Gaming Headset",
    category: "Audio",
    price: "$79.99",
    stock: 45,
  },
  {
    id: 4,
    name: "Gaming Chair",
    category: "Furniture",
    price: "$299.99",
    stock: 15,
  },
  {
    id: 5,
    name: "Gaming Monitor",
    category: "Displays",
    price: "$399.99",
    stock: 20,
  },
];

export default function Products() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button>Add New Product</Button>
      </div>

      <Card className="bg-gray-900 border-none mb-6">
        <CardContent className="p-6">
          <div className="flex space-x-4">
            <Input
              placeholder="Search products..."
              className="max-w-sm bg-inherit"
            />
            <Button variant="default">Filter</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-none text-white">
        <CardHeader>
          <CardTitle className="text-white">Product Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-900 border-none">
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} className="bg-gray-900 border-none">
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    <Badge variant={product.stock > 20 ? "success" : "warning"}>
                      {product.stock}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="mr-2">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      Delete
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
