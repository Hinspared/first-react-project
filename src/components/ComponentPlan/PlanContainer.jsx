import React from 'react';
import PlanCards from './PlanCards';
import PlanSlides from './PlanSlides';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function PlanContainer() {
  const matches = useMediaQuery('(min-width:800px)');

  return matches ? <PlanCards /> : <PlanSlides />;
}
