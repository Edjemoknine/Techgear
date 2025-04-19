'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MinusCircle, PlusCircle, ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Logo from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
const links = [
  { lebl: 'HOME', href: '/' },
  { lebl: 'PRODUCTS', href: '/products' },
  { lebl: 'SERVICES', href: '/services' },
  { lebl: 'CONTACTS', href: '/contact' },
];
const MobileNavigation = ({ open, setOpen }: Props) => {
  const pathname = usePathname();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md bg-gray-900 text-white">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-14 items-center justify-center  font-bold w-full pt-16">
          {links.map((link) => (
            <Link
              className={cn(
                'text-gray-500 hover:text-primary duration-300 text-2xl w-full text-center ',
                pathname === link.href
                  ? 'text-primary border-b-2 pb-1 border-primary'
                  : '',
              )}
              href={link.href}
              key={link.href}
            >
              {link.lebl}
            </Link>
          ))}
          <Button
            variant="outline"
            className="!text-white w-full  rounded-lg bg-transparent hover:bg-primary hover:border-black"
          >
            <Link href={'/sign-in'}>SIGN IN</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
