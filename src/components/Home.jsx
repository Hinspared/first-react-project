import ResponsiveAppBar from './AppBar';
import CardContainer from './CardContainer';

import { Stack, Typography, Container, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <Container maxWidth="lg">
        <Stack spacing={2} marginTop={5} alignItems="center">
          <Typography variant="h6" color="initial" component="h2">
            THE TRAVEL GUIDE APP
          </Typography>
          <Typography variant="h1" color="initial" component="h1">
            TRAVELLO
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            component="p"
            sx={{ fontStyle: 'italic' }}
          >
            Travel booking just a click away
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Where do you want to go?"
            />
            <Button variant="contained" sx={{ background: 'black' }}>
              <SearchOutlinedIcon />
            </Button>
          </Box>
        </Stack>
        <CardContainer />
      </Container>
    </div>
  );
}
