import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import { useTranslation } from 'react-i18next';

import { logo4 } from 'assets/images/logo';

import NavButton from 'components/Buttons/NavButton';
import ElevationScroll from 'components/Header/ElevationScroll';
import { Position, StyleProps } from './type';

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  logo: {
    width: '110px',
  },
  header: props => ({
    // background: theme.palette.background.default,
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
  },
  signUp: {
    boxShadow: theme.shadows[1],
  },
}));

interface Props {
  headerDefaultElevation?: number;
  navPosition: Position;
  backgroundColor?: string;
}

const Header: React.FunctionComponent<Props> = props => {
  const { headerDefaultElevation, navPosition, backgroundColor } = props;
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
              <img src={logo4} alt="#" className={classes.logo} />
            </Link>
            <ul className={classes.navList}>
              <li>
                <Link href="/user/signin" color="textPrimary" underline="none">
                  <NavButton size="large">{t('signin')}</NavButton>
                </Link>
              </li>
              <li>
                <Link href="/user/signup" color="textPrimary" underline="none">
                  <NavButton
                    variant="outlined"
                    size="large"
                    className={classes.signUp}
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
