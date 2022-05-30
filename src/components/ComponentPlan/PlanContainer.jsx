import React from 'react';
import PlanCards from './PlanCards';
import PlanSlides from './PlanSlides';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

export default function PlanContainer() {
  const matches = useMediaQuery('(min-width:800px)');
  return (
    <Box sx={{ m: '10rem 0' }}>
      <Typography
        variant="h5"
        color="inherit"
        id="pricing"
        textAlign="center"
        sx={{ m: '5rem 0' }}
      >
        PRICING
      </Typography>
      {matches ? <PlanCards /> : <PlanSlides />}
    </Box>
  );
}
