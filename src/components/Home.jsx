import * as React from 'react';

import ResponsiveAppBar from './AppBar';
import CardContainer from './CardContainer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import {
  Stack,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { Box } from '@mui/system';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Home() {
  return (
    <div className="homeContainer">
      <ResponsiveAppBar />
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center">
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
            <Button variant="contained">
              <SearchOutlinedIcon />
            </Button>
          </Box>
        </Stack>
        <CardContainer />
        <Grid
          container
          spacing={6}
          marginTop={15}
          paddingBottom={10}
          marginBottom={5}
        >
          <Grid item xs={4}>
            <Typography variant="h5" color="inherit" component="h5">
              Easily Find awesome places to travel this year
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="inherit" component="p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore in facere, asperiores illum cumque iste dignissimos,
              necessitatibus optio molestias laudantium alias nihil accusamus
              voluptates non quasi qui modi ex cupiditate.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
