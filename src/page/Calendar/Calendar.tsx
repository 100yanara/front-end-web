import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Moment from 'utils/Moment';

import EventList from './EventsList';

const useStyles = makeStyles((theme: Theme) => ({
  'calendar-container': {
    height: '100vh',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '2fr 2fr 20fr',
    gridTemplateAreas: `
      "filter"
      "month"
      "arrangementer"
    `,
    // gridRowGap: '10px',
  },
  'calendar-filter': {
    gridArea: 'filter',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr',
    gridTemplateAreas: `"filter1 filter2 filter3"`,
    borderTop: '5px solid #ffb400',
    borderBottom: '5px solid #ffb400',
  },
  'calendar-month': {
    gridArea: 'month',
    gridTemplateColumns: '2fr 4fr',
    gridTemplateRows: '1fr',
    gridTemplateAreas: `"space1 space2"`,
  },
  padding: {
    paddingTop: theme.spacing(1.2),
  },
  section: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  section2: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

const Calendar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    filter: false,
    city: false,
    moment: new Moment('en'),
  });
  // const handleClick = (anchor: string, open: boolean) => (
  //   event: React.MouseEvent
  // ) => {
  //   setState({ ...state, [anchor]: open });
  // };
  return (
    <Container component="main" maxWidth="lg">
      <Box
        component="div"
        display="grid"
        className={classes['calendar-container']}
      >
        <Box
          component="div"
          display="grid"
          className={classes['calendar-filter']}
        >
          <Typography variant="overline" className={`${classes['section']}`}>
            City
          </Typography>
          <Typography variant="overline" className={`${classes['section']}`}>
            Price
          </Typography>
          <Typography variant="overline" className={`${classes['section']}`}>
            Status
          </Typography>
        </Box>
        <Box
          display="grid"
          className={classes['calendar-month']}
          component="div"
        >
          <Typography
            variant="h5"
            className={`${classes['section']}`}
          >{`${state.moment.getMonth()} ${state.moment.getYear()}`}</Typography>
          <Typography
            variant="subtitle2"
            className={`${classes['section2']}`}
            color="textSecondary"
          >
            20 EVENTS
          </Typography>
        </Box>
        <Box component="div">
          <EventList />
        </Box>
      </Box>
    </Container>
  );
};

export default Calendar;
