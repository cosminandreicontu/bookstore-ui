import {
  Alert,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useCart } from 'providers';
import React, { useState } from 'react';

export const ShoppingCart: React.FC = () => {
  const { cart, clearCart, removeFromCart, updateQuantity } = useCart();
  const [open, setOpen] = useState(false);

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return;
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleSubmit = () => {
    setOpen(true);
    clearCart();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body2">Your cart is empty.</Typography>
      ) : (
        <List>
          {cart.map((item) => (
            <ListItem
              key={item.id}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <ListItemText
                primary={item.title}
                secondary={`Author: ${item.author} | Price: ${item.price}`}
              />

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TextField
                  type="number"
                  size="small"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  sx={{ width: 65 }}
                />
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </Box>
            </ListItem>
          ))}
        </List>
      )}
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1">
          Total: ${totalPrice.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          disabled={cart.length === 0}
        >
          Submit
        </Button>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          sx={{ p: '64px 0' }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Your order has been submitted successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};
