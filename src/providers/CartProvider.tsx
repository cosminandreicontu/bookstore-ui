import { mockBooks } from 'data/mockData';
import { useState, ReactNode } from 'react';
import { Book, CartContextValue, CartItem } from 'types';
import { CartContext } from './CartContext';

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [books, setBooks] = useState<Book[]>(mockBooks);
  const [mobileCartOpen, setMobileCartOpen] = useState<boolean>(false);

  const addToCart = (book: Book) => {
    let remainingStock = book.stock;
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === book.id);

      if (existingItem) {
        if (book.stock === 0) {
          alert('Desired quantity exceeds available stock!');

          return prevCart;
        }
        remainingStock -= 1;

        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        if (book.stock <= 0) {
          alert('This book is out of stock!');

          return prevCart;
        }
        remainingStock -= 1;
        const { id, author, title, price } = book;

        return [...prevCart, { id, author, title, price, quantity: 1 }];
      }
    });

    setBooks((prevBooks) =>
      prevBooks.map((b) =>
        b.id === book.id ? { ...b, stock: remainingStock } : b,
      ),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (id: number) => {
    const bookToRemove = cart.find((item) => item.id === id);
    if (bookToRemove) {
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === id
            ? { ...book, stock: book.stock + bookToRemove.quantity }
            : book,
        ),
      );

      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    const cartItem = cart.find((c: CartItem) => c.id === id);
    const currentBook = books.find((book: Book) => book.id === id);
    if (cartItem && currentBook) {
      const stockDifference = cartItem.quantity - quantity;

      if (stockDifference < 0) {
        if (currentBook.stock < Math.abs(stockDifference)) {
          alert('Desired quantity exceeds available stock!');

          return;
        }
      }

      setCart((prevCart) =>
        prevCart.map((c) => (c.id === id ? { ...c, quantity: quantity } : c)),
      );
      setBooks((prevBooks) =>
        prevBooks.map((b) =>
          b.id === id ? { ...b, stock: b.stock + stockDifference } : b,
        ),
      );
    }
  };

  const handleCartToggle = () => {
    setMobileCartOpen(!mobileCartOpen);
  };

  const value: CartContextValue = {
    books,
    cart,
    addToCart,
    clearCart,
    removeFromCart,
    updateQuantity,
    mobileCartOpen,
    handleCartToggle,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
