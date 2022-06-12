import React from 'react';
import Carousel from 'react-material-ui-carousel';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import Card from './Card';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
const items = [
  {
    icon: <StorefrontIcon />,
    name: '100+ Options',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    icon: <LocalFireDepartmentIcon />,
    name: 'Good Quality',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    icon: <AssessmentOutlinedIcon />,
    name: 'Easy Interface',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    icon: <LaptopChromebookIcon />,
    name: 'Tracking Code',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
];

export default function CarouselCards() {
  return (
    <Grid container spacing={0} justifyContent="center">
      <Grid item xs={6}>
        <Carousel
          navButtonsProps={{
            style: {
              opacity: 0,
            },
          }}
          navButtonsWrapperProps={{
            style: {
              opacity: 0,
            },
          }}
        >
          {items.map((item, i) => (
            <Card
              key={i}
              icon={item.icon}
              name={item.name}
              description={item.description}
            />
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
}
