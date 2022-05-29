import * as React from 'react';

import { Box, Grid, Paper, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

export default function HotelCard({ hotel }) {
  return (
    <Grid item xs={3} md={3}>
      <Paper elevation={3} sx={{ margin: '0.5rem 0', background: '#FFFFC7' }}>
        <img src={hotel.image} alt={hotel.name} />
        <Box sx={{ padding: '0.2rem', height: '3rem' }}>
          <Typography
            variant="body1"
            color="initial"
            align="center"
            component="p"
          >
            {hotel.name}
          </Typography>
        </Box>
        <Box sx={{ padding: '0.2rem' }}>
          <Rating
            name="read-only"
            value={hotel.rating}
            precision={0.1}
            readOnly
            size="small"
          />
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{ textAlign: 'right' }}
            marginTop={1}
            component="p"
          >
            ${hotel.price}/night
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
