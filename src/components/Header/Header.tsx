import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      boxShadow: theme.shadows[0],
      background: '#2b96ed',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid gray',
      width: '100%',
    },
    header_main: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.up('xs')]: {
        width: '100%',
        padding: '10px 10px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '70%',
        padding: '10px 0',
      },
    },
    header_main_logocontainer: {
      [theme.breakpoints.up('xs')]: {
        width: '50%',
      },
      [theme.breakpoints.up('md')]: {
        width: '15%',
      },
    },
    header_main_logocontainer_logo: {
      fontFamily: '"Gamja Flower", cursive',
    },
    header_main_list: {
      [theme.breakpoints.up('xs')]: {
        width: '50%',
      },
      [theme.breakpoints.up('md')]: {
        width: '85%',
      },
      display: 'flex',
      justifyContent: 'flex-end',
    },
    header_main_list_currencyButton: {
      color: theme.palette.common.white,
      width: '60px',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    header_main_list_languageButton: {
      color: theme.palette.common.white,
      width: '60px',
      marginLeft: '15px',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    header_main_list_signInButton: {
      color: theme.palette.common.white,
      width: '60px',
      marginLeft: '15px',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    header_main_list_signUpButton: {
      color: theme.palette.common.white,
      width: '100px',
      border: '1px solid white',
      marginLeft: '15px',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    menuButton: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    header_nav: {
      [theme.breakpoints.up('xs')]: {
        width: '100%',
        padding: '10px 10px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '70%',
        padding: '10px 0',
      },
    },
    header_nav_ul: {
      display: 'flex',
      margin: '0',
      padding: '0',
    },
    header_nav_li: {
      listStyleType: 'none',
      width: '80px',
    },
    header_city: {
      padding: '25px',
      // border: '1px solid gray',
      [theme.breakpoints.up('xs')]: {
        height: '250px',
      },
      [theme.breakpoints.up('sm')]: {
        height: '300px',
      },
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      background: '#2b96ed',
      alignItems: 'center',
      width: '100%',
    },
    header_city_title: {
      padding: '15px',
      color: 'white',
    },

    header_city_cities: {
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        width: '80%',
      },
      [theme.breakpoints.up('md')]: {
        width: '50%',
      },
      [theme.breakpoints.up('lg')]: {
        width: '35%',
      },
      justifyContent: 'space-between',
    },
    header_city_cities_city: {
      width: '110px',
      height: '70px',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
    },
    header_city_cities_city_name: {
      width: '100%',
    },
  })
);

const Header: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Box component="div" className={classes.header_main}>
          <Box className={classes.header_main_logocontainer}>
            <Typography
              variant="h4"
              className={classes.header_main_logocontainer_logo}
            >
              백야나라
            </Typography>
          </Box>

          <Box component="div" className={classes.header_main_list}>
            <Button className={classes.header_main_list_currencyButton}>
              <Typography variant="button">Dollar</Typography>
            </Button>

            <Button className={classes.header_main_list_languageButton}>
              <Typography variant="button">English</Typography>
            </Button>

            <Button className={classes.header_main_list_signInButton}>
              <Typography variant="button">Sign in</Typography>
            </Button>

            <Button
              variant="outlined"
              className={classes.header_main_list_signUpButton}
            >
              <Typography variant="button">Sign up</Typography>
            </Button>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>

        <Box component="div" className={classes.header_nav}>
          <ul className={classes.header_nav_ul}>
            {['Tour', 'Create Trip'].map(source => (
              <li key={source} className={classes.header_nav_li}>
                <Typography variant="button">{source}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      </AppBar>
      <Box component="div" className={classes.header_city}>
        <Box component="div" className={classes.header_city_title}>
          <Typography variant="h3" component="h3" align="center">
            What White night
          </Typography>
          <Typography variant="h4" component="h4" align="center">
            Do you want?
          </Typography>
        </Box>
        <Box component="div" className={classes.header_city_cities}>
          {['Total', 'Saint Petersburg', 'Moscow', 'Tallin'].map(
            (city, key) => {
              return (
                <Paper
                  key={key}
                  className={classes.header_city_cities_city}
                  elevation={0}
                >
                  <Typography
                    className={classes.header_city_cities_city_name}
                    variant="body1"
                  >
                    {city}
                  </Typography>
                </Paper>
              );
            }
          )}
        </Box>
      </Box>
    </>
  );
};

export default Header;
