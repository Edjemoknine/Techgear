'use client';
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface CartContextType {
  openCart: boolean;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
  cartItems: any[];
  setCartItems: Dispatch<
    SetStateAction<
      {
        id: number;
        name: string;
        price: number;
        quantity: number;
        image: string;
      }[]
    >
  >;
}

const cartContext = createContext<CartContextType>({
  openCart: false,
  setOpenCart: () => {},
  cartItems: [],
  setCartItems: () => [], // TypeScript will infer the correct type here
});

const initialCartItems = [
  {
    id: 1,
    name: 'G502 HERO Wireless Gaming Mouse',
    price: 99.99,
    quantity: 1,
    image: '/Turbo.png',
  },
  {
    id: 2,
    name: 'Pro Mechanical Keyboard',
    price: 149.99,
    quantity: 2,
    image: '/fire.png',
  },
];
const CartProvider = ({ children }: { children: ReactNode }) => {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);
  return (
    <cartContext.Provider
      value={{ openCart, setOpenCart, cartItems, setCartItems }}
    >
      {children}
    </cartContext.Provider>
  );
};
export default CartProvider;
export const useCart = () => useContext(cartContext);
