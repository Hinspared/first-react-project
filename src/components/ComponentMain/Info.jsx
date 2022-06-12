import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import airplane from '../../img/airplane.png';
import luggage from '../../img/luggage.png';

export default function Info() {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <img src={airplane} alt="travel" />
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography
              variant="h6"
              color="inherit"
              marginBottom={2}
              component="h2"
            >
              Book your tickets at the comfort of your phone
            </Typography>
            <Typography variant="subtitle 2" color="inherit">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              ut illo impedit odit voluptates, amet ipsam numquam quasi nulla
              quisquam quis perspiciatis debitis alias officiis aspernatur
              veritatis, inventore sed maiores!
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4} marginTop={6}>
        <Grid item xs={8}>
          <Box>
            <Typography
              variant="h6"
              color="inherit"
              marginBottom={2}
              component="h2"
            >
              Easily find awesome places to travel this year
            </Typography>
            <Typography variant="subtitle 2" color="inherit">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              ut illo impedit odit voluptates, amet ipsam numquam quasi nulla
              quisquam quis perspiciatis debitis alias officiis aspernatur
              veritatis, inventore sed maiores!
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <img src={luggage} alt="travel" />
        </Grid>
      </Grid>
    </Box>
  );
}
