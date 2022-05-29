import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PlanCard from './PlanCard';
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
function randomId() {
  return Math.random() * 100;
}
export default function PlanSlides() {
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
          <Tab
            label="Personal"
            key={randomId()}
            {...a11yProps(0)}
            sx={{
              m: '.5rem',
              borderRadius: '2rem',
            }}
            wrapped
          />
          <Tab
            label="Business"
            key={randomId()}
            {...a11yProps(1)}
            sx={{
              m: '.5rem',
              borderRadius: '2rem',
            }}
            wrapped
          />
          <Tab
            label="Agency"
            key={randomId()}
            {...a11yProps(2)}
            sx={{
              m: '.5rem',
              borderRadius: '2rem',
            }}
            wrapped
          />
        </Tabs>
      </Box>
      <TabPanel key={0} value={value} index={0}>
        <Grid container justifyContent="center">
          <PlanCard
            price={39}
            type="Personal"
            plan="Our goverment backed plan designed to keep your business legally and secure"
          />
        </Grid>
      </TabPanel>
      <TabPanel key={1} value={value} index={1}>
        <Grid container justifyContent="center">
          <PlanCard
            price={55}
            type="Business"
            plan="Unlimited analytics, plans, demographic insights. All you need to grow-up your business"
          />
        </Grid>
      </TabPanel>
      <TabPanel key={2} value={value} index={2}>
        <Grid container justifyContent="center">
          <PlanCard
            price={99}
            type="Agency"
            plan="Unlock powerfull time-saving tools for creating email delivery and collecting marketing data"
          />
        </Grid>
      </TabPanel>
    </Box>
  );
}
