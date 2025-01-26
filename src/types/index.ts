export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  stock: number;
};

export type CartItem = Omit<Book, 'stock'> & { quantity: number };

export interface CartContextValue {
  books: Book[];
  cart: CartItem[];
  addToCart: (book: Book) => void;
  clearCart: () => void;
  removeFromCart: (bookId: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}
