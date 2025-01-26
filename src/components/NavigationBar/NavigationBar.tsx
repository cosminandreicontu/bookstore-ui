import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { UserAvatar } from 'components/UserAvatar';
import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationBar: React.FC = () => (
  <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <Typography variant="h6" noWrap component="div">
        Bookstore UI
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'baseline',
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
        <UserAvatar />
      </Box>
    </Toolbar>
  </AppBar>
);
