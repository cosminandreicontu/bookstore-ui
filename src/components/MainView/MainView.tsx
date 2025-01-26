import { Box, Container, Toolbar } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BooksPage } from 'components/BooksPage';
import { UserProfile } from 'components/UserProfile';

export const MainView: React.FC = () => (
  <Box
    component="main"
    sx={{
      flexGrow: 1,
      maxWidth: { xs: '100%', md: '50%', lg: '60%', xl: '75%' },
      p: { xs: 2, md: 3 },
      bgcolor: 'background.default',
    }}
  >
    <Toolbar />
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Container>
  </Box>
);
