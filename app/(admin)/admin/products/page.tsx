'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  ArrowUpDown,
  Download,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  Star,
  Tags,
  Trash2,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const allProducts = [
  {
    id: 1,
    name: 'Phone 234-M',
    description: 'Tristique sed metus',
    image: '/placeholder.svg',
    sku: '12345',
    stock: {
      status: 'In Stock',
      quantity: 120,
    },
    price: 280,
    category: 'Electronics',
    type: 'Simple',
    statistic: 'Best Seller',
    tags: ['Top Rated', 'Best Seller', 'Phone'],
    rating: 5,
    lastModified: '2024-01-20',
  },
  {
    id: 2,
    name: 'Sport Smart Watches',
    image: '/placeholder.svg',
    sku: 'RT12345',
    stock: {
      status: 'Low Inventory',
      quantity: 3,
    },
    price: 480,
    category: 'Electronics',
    type: 'Variable',
    statistic: 'Top Rated',
    tags: [],
    rating: 4,
    lastModified: '2024-01-19',
  },
  {
    id: 3,
    name: 'Potato Chips',
    image: '/placeholder.svg',
    sku: '12345',
    stock: {
      status: 'Out of Stock',
      quantity: 0,
    },
    price: 8.3,
    category: 'Food & Drinks',
    type: 'Grouped',
    statistic: 'New In',
    tags: [],
    rating: 0,
    lastModified: '2024-01-18',
  },
  // Add more products here to demonstrate pagination
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 4,
    name: `Product ${i + 4}`,
    image: '/placeholder.svg',
    sku: `SKU${i + 4}`,
    stock: {
      status: ['In Stock', 'Low Inventory', 'Out of Stock'][
        Math.floor(Math.random() * 3)
      ],
      quantity: Math.floor(Math.random() * 100),
    },
    price: Math.floor(Math.random() * 1000) + 1,
    category: ['Electronics', 'Food & Drinks', 'Fashion'][
      Math.floor(Math.random() * 3)
    ],
    type: ['Simple', 'Variable', 'Grouped'][Math.floor(Math.random() * 3)],
    statistic: ['Best Seller', 'Top Rated', 'New In'][
      Math.floor(Math.random() * 3)
    ],
    tags: [],
    rating: Math.floor(Math.random() * 6),
    lastModified: new Date(Date.now() - Math.floor(Math.random() * 10000000000))
      .toISOString()
      .split('T')[0],
  })),
];

const productStats = [
  { label: 'All', count: allProducts.length },
  { label: 'Published', count: Math.floor(allProducts.length * 0.8) },
  { label: 'Drafts', count: Math.floor(allProducts.length * 0.15) },
  { label: 'Trash', count: Math.floor(allProducts.length * 0.05) },
];

export default function Component() {
  const [products, setProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStock, setSelectedStock] = useState('all');
  const [sortBy, setSortBy] = useState('best-seller');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const productsPerPage = 10;

  const filterProducts = useCallback(() => {
    let filteredProducts = allProducts;

    if (selectedCategory !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory,
      );
    }

    if (selectedType !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.type === selectedType,
      );
    }

    if (selectedStock !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.stock.status === selectedStock,
      );
    }

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.sku.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    switch (sortBy) {
      case 'best-seller':
        filteredProducts.sort((a, b) =>
          a.statistic === 'Best Seller' ? -1 : 1,
        );
        break;
      case 'newest':
        filteredProducts.sort(
          (a, b) =>
            (new Date(b.lastModified) as any) -
            (new Date(a.lastModified) as any),
        );
        break;
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
    }

    return filteredProducts;
  }, [selectedCategory, selectedType, selectedStock, sortBy, searchTerm]);

  useEffect(() => {
    setProducts(filterProducts());
    setCurrentPage(1);
  }, [
    selectedCategory,
    selectedType,
    filterProducts,
    selectedStock,
    sortBy,
    searchTerm,
  ]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const applyFilters = () => {
    setProducts(filterProducts());
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedType('all');
    setSelectedStock('all');
    setSortBy('best-seller');
    setSearchTerm('');
    setProducts(allProducts);
    setCurrentPage(1);
  };

  return (
    <div className="flex min-h-screen flex-col ">
      <div className="flex-1 space-y-6 p-8 pt-6">
        <div className="flex flex-col space-y-4 md:flex-row md:items-start md:justify-between md:space-y-0">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Products Management
            </h2>
            <div className="mt-2 flex space-x-4 text-sm text-gray-400">
              {productStats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-1">
                  <span className="font-medium">{stat.label}</span>
                  <span>({stat.count})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
              <Plus className="mr-2 h-4 w-4" />
              Add New Product
            </Button>
            <Button
              variant="outline"
              className="dark:bg-gray-900 bg-gray-50  hover:bg-gray-700"
            >
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search products..."
              className="pl-8 dark:bg-gray-900 bg-gray-50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Select value={selectedStock} onValueChange={setSelectedStock}>
              <SelectTrigger className="w-[180px] dark:bg-gray-900 bg-gray-50 ">
                <SelectValue placeholder="Filter by Stock Status" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-900 bg-gray-50 ">
                <SelectItem value="all">All Stock Status</SelectItem>
                <SelectItem value="In Stock">In Stock</SelectItem>
                <SelectItem value="Low Inventory">Low Inventory</SelectItem>
                <SelectItem value="Out of Stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px] dark:bg-gray-900 bg-gray-50 ">
                <SelectValue placeholder="Product Category" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-900 bg-gray-50 ">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Electronics">Electronics</SelectItem>
                <SelectItem value="Food & Drinks">Food & Drinks</SelectItem>
                <SelectItem value="Fashion">Fashion</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] dark:bg-gray-900 bg-gray-50 ">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-900 bg-gray-50 ">
                <SelectItem value="best-seller">Best Seller</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[180px] dark:bg-gray-900 bg-gray-50 ">
                <SelectValue placeholder="Product Type" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-900 bg-gray-50 ">
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Simple">Simple</SelectItem>
                <SelectItem value="Variable">Variable</SelectItem>
                <SelectItem value="Grouped">Grouped</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                className="bg-blue-600 text-white hover:bg-blue-700"
                onClick={applyFilters}
              >
                Apply
              </Button>
              <Button
                variant="outline"
                className="dark:bg-gray-900 bg-gray-50  hover:bg-gray-700"
                onClick={clearFilters}
              >
                Clear
              </Button>
            </div>
          </div>

          <div className="rounded-md  dark:bg-gray-900 bg-gray-50">
            <Table>
              <TableHeader>
                <TableRow className="">
                  <TableHead className="w-12">
                    <input
                      type="checkbox"
                      className="rounded border-gray-600"
                    />
                  </TableHead>
                  <TableHead className="text-gray-600">Product Name</TableHead>
                  <TableHead className="text-gray-600">SKU</TableHead>
                  <TableHead className="text-gray-600">Stock</TableHead>
                  <TableHead className="text-gray-600">Price</TableHead>
                  <TableHead className="text-gray-600">Category</TableHead>
                  <TableHead className="text-gray-600">Type</TableHead>
                  <TableHead className="text-gray-600">Statistic</TableHead>
                  {/*       <TableHead className="text-gray-600">Tags</TableHead> */}
                  <TableHead className="text-gray-600">Rating</TableHead>
                  <TableHead className="text-gray-600">Date</TableHead>
                  <TableHead className="text-gray-600">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentProducts.map((product) => (
                  <TableRow key={product.id} className="">
                    <TableCell>
                      <input
                        type="checkbox"
                        className="rounded border-gray-600"
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-10 w-10 rounded-md bg-gray-800"
                        />
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{product.sku}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          product.stock.status === 'In Stock'
                            ? 'border-green-500 bg-green-500/10 text-green-500'
                            : product.stock.status === 'Low Inventory'
                              ? 'border-yellow-500 bg-yellow-500/10 text-yellow-500'
                              : 'border-red-500 bg-red-500/10 text-red-500'
                        }
                      >
                        {product.stock.status} ({product.stock.quantity})
                      </Badge>
                    </TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.type}</TableCell>
                    <TableCell>{product.statistic}</TableCell>
                    {/*    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {product.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-blue-500 bg-blue-500/10 text-blue-500"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>*/}
                    <TableCell>
                      <div className="flex items-center">
                        ({product.rating})
                        <Star
                          className={`h-4 w-4 fill-yellow-400 text-yellow-400 pl-1`}
                        />
                      </div>
                    </TableCell>
                    <TableCell>{product.lastModified}</TableCell>
                    <TableCell>
                      <TooltipProvider>
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
                              Edit product
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-700">
                              Duplicate product
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-gray-700" />
                            <DropdownMenuItem className="text-red-500 hover:bg-gray-700">
                              Delete product
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TooltipProvider>
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
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  className={
                    currentPage === 1 ? 'pointer-events-none opacity-50' : ''
                  }
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(index + 1)}
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
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  className={
                    currentPage === totalPages
                      ? 'pointer-events-none opacity-50'
                      : ''
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
