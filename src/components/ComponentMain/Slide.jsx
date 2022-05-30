import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Paper } from '@mui/material';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

export default function Slide({ name, description }) {
  try {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          // margin: '5rem 3rem',
          minHeight: '10rem',
          gap: '2rem',
        }}
      >
        <FormatQuoteRoundedIcon
          sx={{
            color: '#1E91D6',
            transform: 'rotate(0.5turn)',
            fontSize: '4rem',
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Typography
            variant="body2"
            color="inherit"
            sx={{ fontStyle: 'italic' }}
          >
            {description}
          </Typography>
          <Typography variant="subtitle2" color="inherit">
            {name}
          </Typography>
        </Box>
      </Box>
    );
  } catch (error) {
    return <ErrorHandler error={error} />;
  }
}
