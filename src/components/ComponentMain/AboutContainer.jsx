import React, { useRef } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Info from './Info';
import Slider from './Slider';

export default function AboutContainer() {
  return (
    <>
      <Container maxWidth="md" id="about">
        <Typography
          variant="h6"
          color="inherit"
          component="h2"
          textAlign="center"
          margin={5}
        >
          ABOUT
        </Typography>
        <Slider sx={{ marginBottom: '10rem' }} />
        <Info />
      </Container>
    </>
  );
}
