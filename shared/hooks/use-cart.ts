import React from 'react';
import { useCartStore } from '../store';
import { CreateCartItemValues } from '../services/dto/cart.dto';
import { CartStateItem } from '../lib/get-cart-details';

type ReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
  addCartItem: (values: CreateCartItemValues) => Promise<void>;
  onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void;
};

export const useCart = (): ReturnProps => {
  const cartState = useCartStore((state) => state);

  React.useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    cartState.updateItemQuantity(id, newQuantity);
  };

  return { ...cartState, onClickCountButton };
};
