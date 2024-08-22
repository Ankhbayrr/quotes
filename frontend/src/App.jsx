// src/App.js

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, CssBaseline, Toolbar, IconButton, Typography, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './components/Home';
import AddQuote from './components/AddQuote';
import ViewQuotes from './components/ViewQuotes';
import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import MetaComponent from './components/MetaComponent';

const theme = createTheme();

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
    <MetaComponent/>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
      <Toolbar
      // sx={{ 
      //   backgroundColor: '#CAF4FF', // Set the background color for the toolbar
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'space-between',
      //   padding: '0 1rem' // Optional: Add padding for better spacing
      // }}
    >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ 
          backgroundColor: '#FFFFFF', // Optional: Background color for the IconButton
          ':hover': {
            backgroundColor: '#FFE5E5' // Optional: Hover effect
            
          }
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap sx={{textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',}}>
        My Quotes App
      </Typography>
    </Toolbar>

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/add-quote" onClick={toggleDrawer(false)}>
              <ListItemText primary="Add Quote" />
            </ListItem>
            <ListItem button component={Link} to="/view-quotes" onClick={toggleDrawer(false)}>
              <ListItemText primary="View Quotes" />
            </ListItem>
          </List>
        </Drawer>

        <Container className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-quote" element={<AddQuote />} />
            <Route path="/view-quotes" element={<ViewQuotes />} />
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </ThemeProvider>
    </>
  );
};

export default App;
