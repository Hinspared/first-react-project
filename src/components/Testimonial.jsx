import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

export default function Testimonial() {
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '5rem 3rem',
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
          <Box>
            <Typography
              variant="body2"
              color="inherit"
              component="p"
              marginBottom={3}
              sx={{ fontStyle: 'italic' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              doloremque corporis numquam quam. Error dolorem qui eos ut
              provident, aperiam facilis perferendis possimus exercitationem,
              minima deserunt atque sed temporibus laboriosam!
            </Typography>
            <Typography variant="subtitle2" color="inherit">
              Dr.Steve Watson,Greenland Stuido in.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
