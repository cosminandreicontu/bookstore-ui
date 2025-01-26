import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useCart } from 'providers';
import { Book } from 'types';

export const BooksPage: React.FC = () => {
  const { books, addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);

  useEffect(() => {
    const updatedBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredBooks(updatedBooks);
  }, [books, searchTerm]);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Books Store
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <List>
        {filteredBooks.map((book) => (
          <ListItem
            key={book.id}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <ListItemText
              primary={book.title}
              secondary={`Author: ${book.author} | Price: ${book.price.toFixed(2)} | Stock: ${book.stock}`}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => addToCart(book)}
            >
              {'Add to Cart'}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
