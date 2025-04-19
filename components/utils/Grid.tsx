import { cn } from '@/lib/utils';
import React from 'react';
import ProductCard from '../shared/ProductCard';

const Grid = ({ type, data }: { type: string; data: any }) => {
  return (
    <div
      className={cn(
        type === 'Grid'
          ? 'md:grid-cols-3 sm:grid-cols-2 grid-cols-1 '
          : 'grid-cols-1',
        'grid gap-6 py-10',
      )}
    >
      {data.map((product: any) => (
        <ProductCard product={product} key={product.title} />
      ))}
    </div>
  );
};

export default Grid;
