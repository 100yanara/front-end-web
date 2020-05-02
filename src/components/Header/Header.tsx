import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import { useTranslation } from 'react-i18next';
import logo4 from 'assets/images/logo4.png';

import NavButton from 'components/Header/NavButton';
import ElevationScroll from 'components/Header/ElevationScroll';

const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    width: '110px',
  },
  header: {
    background: theme.palette.background.default,
    width: '100%',
    height: '80px',
  },
  navList: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
  },
  signUp: {
    boxShadow: theme.shadows[1],
  },
}));

const Header = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>, lang?: string) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    } else if (lang) {
      i18n.changeLanguage(lang);
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <ElevationScroll>
      <AppBar className={classes.header} position="sticky">
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
