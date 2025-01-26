import { Box, Container, Toolbar } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

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
        <Route path="/" element={<></>} />
        <Route path="/profile" element={<></>} />
      </Routes>
    </Container>
  </Box>
);
