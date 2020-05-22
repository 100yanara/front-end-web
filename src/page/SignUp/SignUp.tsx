import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
// import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
// custom UI
import Layout from 'components/layout';
//TYPE
import { Position } from 'components/Header/type';
//routes
import * as ROUTES from 'constants/routes';

const useStyles = makeStyles((theme: Theme) => ({
  'sign-up-box': {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(10),
    width: '100%',
  },
  'sign-up-box__sign-up': {
    padding: '0 1rem',
    color: 'grey',
    border: `1px solid ${theme.palette.grey[300]}`,
    width: '430px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '416px',
    borderRadius: '4px',
  },
  'wave-hand': {
    animation: `$waveAnimation`,
    animationDuration: '2.5s',
    animationIterationCount: 'infinite',
    transformOrigin: '70% 70%',
    display: 'block',
  },
  '@keyframes waveAnimation': {
    '0%': { transform: 'rotate(  0.0deg)' },
    '10%': { transform: 'rotate(-10.0deg)' },
    '20%': { transform: 'rotate( 12.0deg)' },
    '30%': { transform: 'rotate(-10.0deg)' },
    '40%': { transform: 'rotate(  9.0deg)' },
    '50%': { transform: 'rotate(  0.0deg)' },
    '100%': { transform: 'rotate(  0.0deg)' },
  },
  googleButton: {
    width: '332px',
    height: '48px',
    '&:hover': {
      boxShadow: theme.shadows[1],
      background: '#f9f9f9',
    },
  },
  medium: {
    cursor: 'pointer',
    '&:hover': {
      color: 'black',
    },
  },
}));

const SignUp: React.FunctionComponent = () => {
  const classes = useStyles();
  // const { t, i18n } = useTranslation();
  return (
    <Layout footerBorderTop={true} navPosition={Position.static}>
      <Box component="div" className={classes['sign-up-box']}>
        <Box component="div" className={classes['sign-up-box__sign-up']}>
          <Typography variant="h3" align="center">
            <Box component="span" className={classes['wave-hand']}>
              👋
            </Box>
          </Typography>
          <Typography variant="h5">
            <Box fontWeight="bold" color="black" mt={2}>
              반갑습니다!
            </Box>
          </Typography>
          <Typography variant="subtitle1">
            <Box mt={1} color="#fe7224">
              러시아 여행의 동반자, 백야나라
            </Box>
          </Typography>
          <Box mt={3}>
            <Button
              variant="outlined"
              disableElevation
              className={classes.googleButton}
            >
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                style={{ width: '18px', height: '18px' }}
              />
              <Typography variant="subtitle2">
                <Box ml={1}>Google 로 회원가입</Box>
              </Typography>
            </Button>
          </Box>
          <Box display="flex" flexDirection="row" mt={3}>
            <Box display="flex" alignItems="center" className={classes.medium}>
              <FacebookIcon fontSize="small" />
              <Box component="span" pt="1px" ml={1}>
                페이스북
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem variant="middle" />
            <Box display="flex" alignItems="center" className={classes.medium}>
              <EmailIcon fontSize="small" />
              <Box component="span" pt="1px" ml={1}>
                <Link
                  to={ROUTES.SIGN_UP_EMAIL}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  이메일
                </Link>
              </Box>
            </Box>
          </Box>
          <Typography variant="button">
            <Box component="div" fontWeight="bold" mt={4}>
              이미 아이디가 있으신가요?
              <Box component="span" ml={1}>
                <Link
                  to={ROUTES.SIGN_IN}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  로그인
                </Link>
              </Box>
            </Box>
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default SignUp;
