import TourCard from '../components/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import cities from '../data.json';

const Home = () => (
  <div className="App">
    <Container sx={{ marginY: 5 }}>
      {cities.map((city) => (
        <>
          <Typography
            variant="h4"
            component="h2"
            marginTop={5}
            marginBottom={3}
          >
            Top{city.name} Tours
          </Typography>
          <Grid container spacing={2}>
            {city.tours.map((tour) => (
              <TourCard tour={tour} />
            ))}
          </Grid>
        </>
      ))}
    </Container>
  </div>
);

export default Home;
