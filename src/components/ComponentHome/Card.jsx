import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const Card = ({ icon, name, description }) => {
  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      {icon}
      <Typography variant="body1" color="inherit" component="h6">
        {name}
      </Typography>
      <Typography variant="subtitle2" color="inherit" textAlign="center">
        {description}
      </Typography>
    </Stack>
  );
};

export default Card;
