import React from 'react';
import Grid from '@mui/material/Grid';
import { Stack, Typography, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <>
      <Stack spacing={3} marginTop={10} paddingBottom={5}>
        <Typography variant="h4" color="inherit" textAlign="center">
          TRAVELLO.
        </Typography>
        <Typography variant="body1" color="inherit" textAlign="center">
          17th Street Avenue, Chicago, USA
        </Typography>
        <Typography variant="body1" color="inherit" textAlign="center">
          1-123-555-3465
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </Box>
      </Stack>
    </>
  );
}
