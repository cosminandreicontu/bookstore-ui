import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { UserAvatar } from 'components/UserAvatar';
import { useCart } from 'providers';
import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationBar: React.FC = () => {
  const { cart, handleCartToggle } = useCart();

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Bookstore UI
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Link
            to="/"
            style={{
              margin: '0 10px',
              textDecoration: 'none',
              color: 'white',
            }}
          >
            Books
          </Link>
          <Link
            to="/profile"
            style={{
              margin: '0 10px',
              textDecoration: 'none',
              color: 'white',
            }}
          >
            Profile
          </Link>
          <IconButton
            color="inherit"
            aria-label="open cart"
            onClick={handleCartToggle}
            sx={{ display: { md: 'none' } }} // Show only on mobile
          >
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <UserAvatar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
