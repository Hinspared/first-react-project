import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import Slide from './Slide';

export default function Slider(props) {
  const items = [
    {
      name: 'Dr.Steve Watson,Greenland Stuido in.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam doloremque corporis numquam quam. Error dolorem qui eos ut provident, aperiam facilis perferendis possimus exercitationem,minima deserunt atque sed temporibus laboriosam!',
    },
    {
      name: 'Dr.Steve Watson,Greenland Stuido in.',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo',
    },
    {
      name: 'Dr. John Watskeen, GreenLand Studio in.',
      description:
        'Aliquam ante. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam sit amet magna in magna gravida vehicula. Praesent dapibus. Duis condimentum augue id magna semper rutrum. In enim a arcu imperdiet malesuada. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Integer in sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.',
    },
  ];

  return (
    <Carousel
      autoPlay={false}
      navButtonsAlwaysVisible={true}
      sx={{ marginBottom: '10rem' }}
    >
      {items.map((item, i) => (
        <Slide
          key={i}
          item={item}
          name={item.name}
          description={item.description}
        />
      ))}
    </Carousel>
  );
}
