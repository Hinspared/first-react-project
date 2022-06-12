import * as React from 'react';

import CardContainer from './CardContainer';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Theme';
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
import useMediaQuery from '@mui/material/useMediaQuery';
import CarouselCards from './CarouselCards';

export default function Home() {
  const matches = useMediaQuery('(min-width:800px)');
  return (
    <>
      <Container maxWidth="lg" id="home">
        <Stack spacing={2} alignItems="center" marginBottom={20}>
          <Typography variant="body1" color="inherit" component="h2">
            THE TRAVEL GUIDE APP
          </Typography>
          <Typography variant="h2" color="inherit" component="h1">
            TRAVELLO
          </Typography>
          {/* <Typography
            variant="body1"
            color="inherit"
            component="span"
            sx={{ fontStyle: 'italic' }}
          >
            Travel booking just a click away
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Where do you want to go?"
              inputProps={{ style: { color: 'white', width: '12rem' } }}
            />
            <Button variant="contained">
              <SearchOutlinedIcon />
            </Button>
          </Box> */}
        </Stack>
        {/* <CardContainer /> */}
        {matches ? <CardContainer /> : <CarouselCards />}
        <Grid
          container
          spacing={3}
          marginTop={15}
          paddingBottom={10}
          marginBottom={5}
        >
          <Grid item xs={4}>
            <Box>
              <Typography variant="body1" color="inherit" component="h5">
                Easily Find awesome places to travel this year
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={7}>
            <Typography variant="body2" color="inherit">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore in facere, asperiores illum cumque iste dignissimos,
              necessitatibus optio molestias laudantium alias nihil accusamus
              voluptates non quasi qui modi ex cupiditate.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
