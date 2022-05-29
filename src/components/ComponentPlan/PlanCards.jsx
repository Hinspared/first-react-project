import React from 'react';
import Container from '@mui/material/Container';
import PlanCard from './PlanCard';
import Grid from '@mui/material/Grid';

export default function PlanCards() {
  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: '10rem' }}>
        <Grid container spacing={3}>
          <PlanCard
            price={39}
            type="Personal"
            plan="Our goverment backed plan designed to keep your business legally and secure"
          />
          <PlanCard
            price={55}
            type="Business"
            plan="Unlimited analytics, plans, demographic insights. All you need to grow-up your business"
          />
          <PlanCard
            price={99}
            type="Agency"
            plan="Unlock powerfull time-saving tools for creating email delivery and collecting marketing data"
          />
        </Grid>
      </Container>
    </>
  );
}
