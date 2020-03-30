import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

import { Typography } from '@material-ui/core';

type event = {
  name: string;
  type: string;
  start: string;
  city: string;
  price: number;
  status: string;
  description: string;
  month: number;
  date: number;
};

type Props = {
  event: event;
};

const useStyles = makeStyles((theme: Theme) => ({
  event: {
    padding: '10px 0 15px 15px',
    gridTemplateColumns: '4fr 2fr 2fr 2fr',
    gridTemplateRows: '1fr',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 4fr 2fr 2fr 2fr',
    },
  },
}));

const Event = ({ event }: Props) => {
  const classes = useStyles();
  return (
    <Box
      component="div"
      display="grid"
      className={classes.event}
      borderLeft={1}
    >
      <Hidden xsDown>
        <Box component="div" display="flex" alignItems="center">
          {event.start}
        </Box>
      </Hidden>
      <Box component="div" textAlign="left">
        <span>
          <Hidden smUp>{event.start} |</Hidden> {event.city}
        </span>
        <Typography variant="h6">{event.name}</Typography>
      </Box>
      <Box component="div" display="flex" alignItems="center">
        {event.price}
      </Box>
      <Box component="div" display="flex" alignItems="center">
        {event.status}
      </Box>
      <Box
        component="div"
        display="flex"
        alignItems="stretch"
        justifyContent="flex-end"
      >
        <Button variant="contained" disableElevation>
          reserve
        </Button>
      </Box>
    </Box>
  );
};

export default Event;
