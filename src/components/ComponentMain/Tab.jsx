import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import hotels from '../../data.json';
import HotelCard from './HotelCard';
import Grid from '@mui/material/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="inherit"
          TabIndicatorProps={{
            style: {
              display: 'none',
            },
          }}
        >
          {hotels.map((country) => (
            <Tab
              label={country.name}
              key={country.id}
              {...a11yProps(country.id)}
              sx={{
                m: '.5rem',
                borderRadius: '2rem',
              }}
              wrapped
            />
          ))}
        </Tabs>
      </Box>
      {hotels.map((country) => (
        <TabPanel key={country.id} value={value} index={country.id}>
          <Grid container spacing={2} component="span">
            {country.hotels.map((h, i) => (
              <HotelCard hotel={h} key={i} />
            ))}
          </Grid>
        </TabPanel>
      ))}
    </Box>
  );
}
