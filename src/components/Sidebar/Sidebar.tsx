import { Drawer, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { ShoppingCart } from 'components/ShoppingCart';
import { useCart } from 'providers';
import React from 'react';

const drawerWidth = 450;

export const Sidebar: React.FC = () => {
  const { mobileCartOpen, handleCartToggle } = useCart();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer
      anchor="right"
      variant={isMobile ? 'temporary' : 'permanent'}
      open={!isMobile || mobileCartOpen}
      onClose={handleCartToggle}
      sx={{
        display: { xs: mobileCartOpen ? 'block' : 'none', md: 'block' },
        '& .MuiDrawer-paper': {
          width: { xs: '100%', md: drawerWidth },
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <ShoppingCart />
    </Drawer>
  );
};
