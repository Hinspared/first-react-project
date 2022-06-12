import * as React from 'react';

import Grid from '@mui/material/Grid';
import Card from './Card';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

const CardContainer = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={3}>
        <Card
          icon={<StorefrontIcon fontSize="large" />}
          name="100+ Options"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
      </Grid>
      <Grid item xs={3}>
        <Card
          icon={<LocalFireDepartmentIcon fontSize="large" />}
          name="Good Quality"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
      </Grid>
      <Grid item xs={3}>
        <Card
          icon={<AssessmentOutlinedIcon fontSize="large" />}
          name="Easy Interface"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
      </Grid>
      <Grid item xs={3}>
        <Card
          icon={<LaptopChromebookIcon fontSize="large" />}
          name="Tracking Code"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
      </Grid>
    </Grid>
  );
};

export default CardContainer;
