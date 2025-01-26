import { createContext, useContext } from 'react';
import { CartContextValue } from 'types';

export const CartContext = createContext<CartContextValue | undefined>(
  undefined,
);

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
