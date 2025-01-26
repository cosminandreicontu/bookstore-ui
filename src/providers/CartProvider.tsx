import { mockBooks } from 'data/mockData';
import { useState, ReactNode } from 'react';
import { Book, CartContextValue, CartItem } from 'types';
import { CartContext } from './CartContext';

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [books, setBooks] = useState<Book[]>(mockBooks);

  console.log(setBooks); // to be removed
  console.log({ cart });

  const addToCart = (book: Book) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === book.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      const { id, author, title, price } = book;
      return [...prevCart, { id, author, title, price, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
  };

  const value: CartContextValue = {
    books,
    cart,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
