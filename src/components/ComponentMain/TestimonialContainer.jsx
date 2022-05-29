import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Slider from './Slider';
import Info from './Info';

export default function TestimonialContainer() {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h6"
          color="inherit"
          component="h2"
          textAlign="center"
          margin={5}
        >
          TESTIMONIALS
        </Typography>
        <Slider />
        <Info />
      </Container>
    </>
  );
}
