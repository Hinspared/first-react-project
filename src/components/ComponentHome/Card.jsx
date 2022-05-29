import * as React from 'react';

import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const Card = ({ icon, name, desctiption }) => {
  return (
    <Stack direction="column" spacing={4} sx={{ marginTop: '5rem' }}>
      {icon}
      <Typography variant="h6" color="inherit" component="h6">
        {name}
      </Typography>
      <Typography variant="subtitle2" color="inherit" component="span">
        {desctiption}
      </Typography>
    </Stack>
  );
};

export default Card;
