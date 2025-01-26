import { Box, Container, Toolbar } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BooksPage } from 'components/BooksPage';
import { UserProfile } from 'components/UserProfile';

export const MainView: React.FC = () => (
  <Box
    component="main"
    sx={{
      flex: 1,
      bgcolor: 'background.default',
      p: 3,
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
