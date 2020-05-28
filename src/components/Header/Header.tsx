import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import { useTranslation } from 'react-i18next';

import { logo4, logo5 } from 'assets/images/logo';

import NavButton from 'components/Buttons/NavButton';
import ElevationScroll from 'components/Header/ElevationScroll';
import { Position, StyleProps } from './type';
import HeaderNonAuthList from 'components/Header/HeaderNonAuthList';
import HeaderAuthList from 'components/Header/HeaderAuthList';
//routes
import * as ROUTES from 'constants/routes';
//hooks
import useAuth from 'store/hooks/useAuth';

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  logo: {
    width: '110px',
  },
  header: props => ({
    background: props.background
      ? props.background
      : theme.palette.background.default,
    width: '100%',
    height: '80px',
  }),
  navList: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    color: 'white',
  },
  signUp: {
    boxShadow: theme.shadows[1],
  },
  signUpDark: {
    boxShadow: theme.shadows[0],
    background: 'rgba(100, 100, 100, 0.5)',
    color: 'white',
  },
  darkThemeNavButton: {
    color: 'white',
  },
}));

interface Props {
  headerDefaultElevation?: number;
  navPosition: Position;
  backgroundColor?: string;
  theme?: number;
}

const Header: React.FunctionComponent<Props> = props => {
  const { headerDefaultElevation, navPosition, backgroundColor, theme } = props;
  const styleProps: StyleProps = { background: backgroundColor };
  const classes = useStyles(styleProps);
  const { t, i18n } = useTranslation();
  const user = useAuth();
  React.useEffect(() => {
    user.onGetCurrentUser();
  });
  return (
    <ElevationScroll headerDefaultElevation={headerDefaultElevation}>
      <AppBar className={classes.header} position="static">
        <Container maxWidth="lg" component="div" style={{ height: '100%' }}>
          <Box
            component="div"
            style={{ height: '100%' }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link to="/">
              {theme === 1 ? (
                <img src={logo5} alt="#" className={classes.logo} />
              ) : (
                <img src={logo4} alt="#" className={classes.logo} />
              )}
            </Link>
            {/* {user.user ? (
              <HeaderAuthList theme={theme} />
            ) : (
              <HeaderNonAuthList theme={theme} />
            )} */}
            <HeaderAuthList theme={theme} />
          </Box>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
