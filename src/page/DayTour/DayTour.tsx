import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Collapse from '@material-ui/core/Collapse';
import TourCard from './TourCard';

const useStyles = makeStyles((theme: Theme) => ({
  layout: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      padding: '10px 10px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      padding: '10px 0',
    },
  },
  daytour__title: {
    marginBottom: 15,
  },
  daytour__cities: {
    marginBottom: 30,
  },
  daytour__filter__typo: {
    marginRight: 20,
  },
}));

const DayTour: React.FunctionComponent = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    filter: false,
    city: false,
  });
  const handleClick = (anchor: string, open: boolean) => (
    event: React.MouseEvent
  ) => {
    setState({ ...state, [anchor]: open });
  };
  return (
    <Box
      component="div"
      display="flex"
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component="div"
        display="flex"
        flexDirection="row"
        width="100%"
        className={classes['layout']}
      >
        <Typography
          variant="subtitle1"
          component="div"
          onClick={handleClick('filter', !state.filter)}
          className={classes.daytour__filter__typo}
        >
          Filter
        </Typography>
        <Grow in={state.filter}>
          <Typography
            variant="overline"
            component="div"
            className={classes.daytour__filter__typo}
            onClick={handleClick('city', !state.city)}
          >
            city
          </Typography>
        </Grow>
        <Grow
          in={state.filter}
          style={{ transformOrigin: '0 0 0' }}
          {...(state.filter ? { timeout: 1000 } : {})}
        >
          <Typography
            variant="overline"
            component="div"
            className={classes.daytour__filter__typo}
          >
            date
          </Typography>
        </Grow>
      </Box>
      <Collapse in={state.city}>
        <Box component="div" display="flex" flexDirection="row">
          <Typography
            component="div"
            variant="overline"
            className={classes.daytour__filter__typo}
          >
            moscow
          </Typography>
          <Typography
            component="div"
            variant="overline"
            className={classes.daytour__filter__typo}
          >
            saint petersburg
          </Typography>
          <Typography
            component="div"
            variant="overline"
            className={classes.daytour__filter__typo}
          >
            tallin
          </Typography>
        </Box>
      </Collapse>
      <Box className={`${classes['layout']}`}>
        <Typography variant="h6" className={classes['daytour__title']}>
          Moscow
        </Typography>
        <Box
          component="div"
          display="flex"
          justifyContent="space-between"
          className={classes['daytour__cities']}
        >
          {Array.from(Array(4)).map(val => (
            <TourCard />
          ))}
        </Box>
        <Typography variant="h6" className={classes['daytour__title']}>
          Saint Petersburg
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          className={classes['daytour__cities']}
        >
          {Array.from(Array(4)).map(val => (
            <TourCard />
          ))}
        </Box>
        <Typography variant="h6" className={classes['daytour__title']}>
          Tallin
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          className={classes['daytour__cities']}
        >
          {Array.from(Array(4)).map(val => (
            <TourCard />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DayTour;
