import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const Card = ({ icon, name, desctiption }) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
      sx={{ marginTop: '5rem' }}
    >
      {icon}
      <Typography variant="h6" color="inherit">
        {name}
      </Typography>
      <Typography variant="subtitle2" color="inherit">
        {desctiption}
      </Typography>
    </Stack>
  );
};

export default Card;
