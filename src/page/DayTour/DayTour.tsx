import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
// import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControl } from '@material-ui/core';
import TourCard from './TourCard';

const useStyles = makeStyles((theme: Theme) => ({
  'daytour-box': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
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
  'daytour-box__radio': {},
  'daytour-box__title': {
    marginBottom: 15,
  },
  'daytour-box__cities': {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
}));

const DayTour: React.FunctionComponent = () => {
  const classes = useStyles();
  // const { t, i18n } = useTranslation();
  const [cities, changeCity] = React.useState('');
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    changeCity((event.target as HTMLInputElement).value);
  };
  return (
    <Box component="div" className={classes['daytour-box']}>
      <FormControl
        className={`${classes['daytour-box__radio']} ${classes['layout']}`}
      >
        <RadioGroup
          aria-label="cities"
          name="cities"
          value={cities}
          onChange={handleRadioChange}
          row
        >
          {['total', 'moscow', 'saint petersburg', 'tallin'].map(value => (
            <FormControlLabel
              value={value}
              control={<Radio size="small" color="default" />}
              label={<Typography variant="button">{value}</Typography>}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Box className={`${classes['layout']}`}>
        <Typography variant="h6" className={classes['daytour-box__title']}>
          Moscow
        </Typography>
        <Box className={classes['daytour-box__cities']}>
          {Array.from(Array(4)).map(val => (
            <TourCard />
          ))}
        </Box>
        <Typography variant="h6" className={classes['daytour-box__title']}>
          Saint Petersburg
        </Typography>
        <Box className={classes['daytour-box__cities']}>
          {Array.from(Array(4)).map(val => (
            <TourCard />
          ))}
        </Box>
        <Typography variant="h6" className={classes['daytour-box__title']}>
          Tallin
        </Typography>
        <Box className={classes['daytour-box__cities']}>
          {Array.from(Array(4)).map(val => (
            <TourCard />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DayTour;
