import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import { useTranslation } from 'react-i18next';

import { logo4, logo5 } from 'assets/images/logo';

import NavButton from 'components/Buttons/NavButton';
import ElevationScroll from 'components/Header/ElevationScroll';
import { Position, StyleProps } from './type';

//routes
import * as ROUTES from 'constants/routes';

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
            <Link href="/">
              {theme === 1 ? (
                <img src={logo5} alt="#" className={classes.logo} />
              ) : (
                <img src={logo4} alt="#" className={classes.logo} />
              )}
            </Link>
            <ul className={classes.navList}>
              <li>
                <Link
                  href={ROUTES.SIGN_IN}
                  color="textPrimary"
                  underline="none"
                >
                  <NavButton
                    size="large"
                    className={clsx(theme && classes.darkThemeNavButton)}
                  >
                    {t('signin')}
                  </NavButton>
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.SIGN_UP}
                  color="textPrimary"
                  underline="none"
                >
                  <NavButton
                    variant={theme === 1 ? 'contained' : 'outlined'}
                    size="large"
                    className={
                      theme === 1 ? classes.signUpDark : classes.signUp
                    }
                  >
                    {t('signup')}
                  </NavButton>
                </Link>
              </li>
            </ul>
          </Box>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
