'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { products } from '@/constant/data';
import { Heart, Search, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

// Fake product data

export default function Component() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [brands, setBrands] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'all' || product.category === category) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (brands.length === 0 || brands.includes(product.brand)),
  );

  const allBrands = Array.from(
    new Set(products.map((product) => product.brand)),
  );

  return (
    <div className="min-h-screen bg-black text-white pt-20 max-w-7xl mx-auto  px-8">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Our Products
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover our collection of high-performance gaming and professional
            equipment
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-4">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-8 bg-gray-900 border-zinc-800 w-full"
              placeholder="Search products..."
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="bg-gray-900 border-zinc-800 w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Gaming">Gaming</SelectItem>
                <SelectItem value="Professional">Professional</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="bg-gray-900 border-zinc-800"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          <div
            className={`lg:col-span-1 ${
              showFilters ? 'block' : 'hidden lg:block'
            } space-y-6 bg-gray-900 p-6 rounded-lg`}
          >
            <div>
              <h3 className="text-lg font-semibold mb-4">Price Range</h3>
              <Slider
                defaultValue={[0, 500]}
                max={500}
                min={0}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Brands</h3>
              {allBrands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2 mb-2">
                  <Checkbox
                    id={brand}
                    checked={brands.includes(brand)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setBrands([...brands, brand]);
                      } else {
                        setBrands(brands.filter((b) => b !== brand));
                      }
                    }}
                  />
                  <Label htmlFor={brand}>{brand}</Label>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="bg-gray-900 border-zinc-800">
                <CardContent className="p-4">
                  <img
                    alt={product.name}
                    className="rounded-lg object-contain w-full aspect-square mb-4"
                    height="400"
                    src={product.image}
                    width="400"
                  />
                  <h3 className="text-lg font-semibold mb-2 line-clamp-1 text-white">
                    {product.name}
                  </h3>
                  {/*
                     <p className="text-muted-foreground mb-2 line-clamp-1">
                    {product.description}
                  </p>*/}
                  <div className="text-sm text-muted-foreground mb-2">
                    {product.brand}
                  </div>
                  <div className="text-lg font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
