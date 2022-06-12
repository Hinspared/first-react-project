import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Stack,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const Item = ({ text }) => {
  return (
    <>
      <ListItem>
        {/* <ListItemIcon>
          <CheckIcon color="primary" />
        </ListItemIcon> */}
        <Typography variant="subtitle" color="initial">
          {text}
        </Typography>
      </ListItem>
    </>
  );
};
export default function Card({ price, type, plan }) {
  return (
    <>
      <Grid item xs={6} md={4}>
        <Paper elevation={3} sx={{ background: '#D8E4FF', padding: '1rem' }}>
          <Stack direction="column" spacing={1}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'baseline',
              }}
            >
              <Typography variant="h6" color="primary">
                ${price}/
              </Typography>
              <Typography variant="subtitle2" color="initial">
                month
              </Typography>
            </Box>
            <Typography variant="subtitle1" color="inherit" component="h6">
              {type}
            </Typography>
            <Box sx={{ height: '15%' }}>
              <Typography variant="subtitle2" color="inherit">
                {plan}
              </Typography>
            </Box>
            <Divider />
            <List>
              <Item text="Secure your custom usage" />
              <Item text="View basic analtics" />
              <Item text="Up to 350 custom profiles" />
              <Item text="Custom network name" />
            </List>
          </Stack>
        </Paper>
      </Grid>
    </>
  );
}
