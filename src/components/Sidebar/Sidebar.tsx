import { Drawer, Toolbar } from '@mui/material';
import { ShoppingCart } from 'components/ShoppingCart';
import React from 'react';

export const Sidebar: React.FC = () => (
  <Drawer
    anchor="right"
    variant="permanent"
    sx={{
      width: '30%',
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        width: '30%',
        boxSizing: 'border-box',
      },
    }}
  >
    <Toolbar />
    <ShoppingCart />
  </Drawer>
);
