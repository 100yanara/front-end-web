import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      height: '200px',
      background: '#202020',
      display: 'flex',
      justifyContent: 'center',
    },
    footer_inner: {
      [theme.breakpoints.up('xs')]: {
        width: '70%',
      },
      // border: '1px solid white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '15px 0',
      // justifyContent: 'center',
    },
    footer_inner_site: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      [theme.breakpoints.up('xs')]: {
        width: '40%',
      },
      marginBottom: '15px',
    },
    footer_inner_site_button: {
      color: 'white',
      width: '100px',
    },
    footer_inner_icon: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      [theme.breakpoints.up('xs')]: {
        width: '10%',
      },
      marginBottom: '20px',
    },
    footer_inner_address: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('xs')]: {
        width: '70%',
      },
      // height: '130px',
      // border: '1px solid white',
      color: 'white',
    },
  })
);

const Footer: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Box component="div" className={classes.footer_inner}>
        <Box component="div" className={classes.footer_inner_site}>
          <Button className={classes.footer_inner_site_button}>
            <Typography variant="body1">About</Typography>
          </Button>
          <Button className={classes.footer_inner_site_button}>
            <Typography variant="body1">With us</Typography>
          </Button>
          <Button className={classes.footer_inner_site_button}>
            <Typography variant="body1">Privacy</Typography>
          </Button>
          <Button className={classes.footer_inner_site_button}>
            <Typography variant="body1">Policy</Typography>
          </Button>
        </Box>
        <Box component="div" className={classes.footer_inner_icon}>
          <FacebookIcon style={{ color: 'white' }} />
          <InstagramIcon style={{ color: 'white' }} />
          <YouTubeIcon style={{ color: 'white' }} />
        </Box>
        <Box component="div" className={classes.footer_inner_address}>
          <Typography variant="body2" align="center">
            Address: (190068) Russia, Saint-Petersburg, Griboyedov canal
            embankment, 126, office 104
          </Typography>
          <Typography variant="body2" align="center">
            Email: 100yanara@hanmail.net | account: 우리은행 1002 557 729280
            이현희
          </Typography>
          <Typography variant="body2" align="center">
            Copyright(C) 2016 백야나라
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
