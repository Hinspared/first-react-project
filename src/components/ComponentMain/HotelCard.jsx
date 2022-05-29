import * as React from 'react';

import { Box, Grid, Paper, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

export default function HotelCard({ hotel }) {
  return (
    <Grid item xs={6} md={3}>
      <Paper elevation={3} sx={{ margin: '0.5rem 0', background: '#D8E4FF' }}>
        <img src={hotel.image} alt={hotel.name} />
        <Box sx={{ padding: '0.2rem' }}>
          <Typography variant="body2" color="initial" align="center">
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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'baseline',
            }}
            justifyContent="flex-end"
          >
            <Typography
              variant="subtitle1"
              color="initial"
              sx={{ textAlign: 'right' }}
              marginTop={1}
              align="center"
            >
              ${hotel.price}/
            </Typography>
            <Typography variant="subtitle2" color="initial">
              night
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
