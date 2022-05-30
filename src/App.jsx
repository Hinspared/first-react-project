import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/ComponentHome/Home';
import HotelContainer from './components/ComponentMain/HotelContainer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme';
import AboutContainer from './components/ComponentMain/AboutContainer';
import ResponsiveAppBar from './components/AppBar';
import { Box } from '@mui/material';
import PlanContainer from './components/ComponentPlan/PlanContainer';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <Home />
        <HotelContainer />
        <AboutContainer />
        <PlanContainer />
        <Footer />
      </ThemeProvider>
    </>

    // <BrowserRouter>
    // </BrowserRouter>
  );
};

export default App;
