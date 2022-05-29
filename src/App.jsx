import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/ComponentHome/Home';
import HotelContainer from './components/ComponentMain/HotelContainer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme';
import TestimonialContainer from './components/ComponentMain/TestimonialContainer';
import ResponsiveAppBar from './components/AppBar';
import { Box } from '@mui/material';
import PlanContainer from './components/ComponentPlan/PlanContainer';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <Home />
        <HotelContainer />
        <TestimonialContainer />
        <PlanContainer />
      </ThemeProvider>
    </>

    // <BrowserRouter>
    // </BrowserRouter>
  );
};

export default App;
