import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import HotelContainer from './components/HotelContainer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme';
import Testimonial from './components/Testimonial';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
        <HotelContainer />
        <Testimonial />
      </ThemeProvider>
    </>

    // <BrowserRouter>
    // </BrowserRouter>
  );
};

export default App;
