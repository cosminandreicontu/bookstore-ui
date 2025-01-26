import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { NavigationBar } from 'components/NavigationBar';
import { Sidebar } from 'components/Sidebar';
import { MainView } from 'components/MainView';
import { CartProvider } from 'providers';

const App: React.FC = () => (
  <CartProvider>
    <Router>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        <NavigationBar />
        <MainView />
        <Sidebar />
      </Box>
    </Router>
  </CartProvider>
);

export default App;
