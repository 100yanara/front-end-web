import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Event from './Event';

const useStyles = makeStyles((theme: Theme) => ({
  'event-list': {
    gridTemplateColumns: '1fr 7fr',
    marginBottom: 10,
  },
  event__date: {
    [theme.breakpoints.up('md')]: {},
  },
  date: {
    fontSize: '2rem',
  },
}));

const EventList = () => {
  const classes = useStyles();
  const e = events;
  return (
    <Box component="div" display="grid" className={classes['event-list']}>
      <Box component="div" textAlign="left" className={classes.event__date}>
        <div>THU</div>
        <div className={classes.date}>1</div>
      </Box>
      <Box component="div">
        {e.map(list => (
          <Event event={list} />
        ))}
      </Box>
    </Box>
  );
};

export default EventList;

const events = [
  {
    name: 'Mowcow heart',
    type: 'guide tour',
    start: '09:30',
    city: 'moscow',
    price: 58500,
    status: 'confirm',
    description:
      'A new chamber opera about the inventor of dynamite and the man behind the Nobel Prize - Swedish inventor and philanthropist Alfred Nobel. This is a story of war and peace.',
    month: 3,
    date: 30,
  },
  {
    name: 'Mowcow heart',
    type: 'guide tour',
    start: '09:30',
    city: 'moscow',
    price: 58500,
    status: 'confirm',
    description:
      'A new chamber opera about the inventor of dynamite and the man behind the Nobel Prize - Swedish inventor and philanthropist Alfred Nobel. This is a story of war and peace.',
    month: 3,
    date: 30,
  },
  {
    name: 'Mowcow heart',
    type: 'guide tour',
    start: '09:30',
    city: 'moscow',
    price: 58500,
    status: 'confirm',
    description:
      'A new chamber opera about the inventor of dynamite and the man behind the Nobel Prize - Swedish inventor and philanthropist Alfred Nobel. This is a story of war and peace.',
    month: 3,
    date: 30,
  },
  {
    name: 'Mowcow heart',
    type: 'guide tour',
    start: '09:30',
    city: 'moscow',
    price: 58500,
    status: 'confirm',
    description:
      'A new chamber opera about the inventor of dynamite and the man behind the Nobel Prize - Swedish inventor and philanthropist Alfred Nobel. This is a story of war and peace.',
    month: 3,
    date: 30,
  },
  {
    name: 'Mowcow heart',
    type: 'guide tour',
    start: '09:30',
    city: 'moscow',
    price: 58500,
    status: 'confirm',
    description:
      'A new chamber opera about the inventor of dynamite and the man behind the Nobel Prize - Swedish inventor and philanthropist Alfred Nobel. This is a story of war and peace.',
    month: 3,
    date: 30,
  },
];
