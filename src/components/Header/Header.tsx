import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { useTranslation } from 'react-i18next';

import logo3 from 'assets/images/logo3.png';

type HeaderProps = {
  background?: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    width: '130px',
    marginLeft: '-10px',
  },
  header: (props: HeaderProps) => ({
    boxShadow: theme.shadows[0],
    background: props.background ? props.background : '#ff7f11',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid gray',
    width: '100%',
  }),
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
    width: '100px',
  },
}));

const Header = (props: HeaderProps) => {
  const classes = useStyles(props);
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
    <>
      <AppBar position="static" className={classes.header}>
        <Box component="div" className={classes.header_main}>
          <Box className={classes.header_main_logocontainer}>
            <Link href="/">
              <img src={logo3} alt="#" className={classes.logo} />
            </Link>
          </Box>

          <Box component="div" className={classes.header_main_list}>
            <Button className={classes.header_main_list_currencyButton}>
              <Typography variant="button">{t('currency')}</Typography>
            </Button>
            <Button
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              className={classes.header_main_list_languageButton}
            >
              <Typography variant="button">{t('language')}</Typography>
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={e => handleClose(e)}>
                      <MenuList autoFocusItem={open} id="menu-list-grow">
                        <MenuItem onClick={e => handleClose(e, 'ko')}>
                          Korean
                        </MenuItem>
                        <MenuItem onClick={e => handleClose(e, 'en')}>
                          English
                        </MenuItem>
                        <MenuItem onClick={e => handleClose(e, 'ru')}>
                          Russian
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Button className={classes.header_main_list_signInButton}>
              <Typography variant="button">
                <Link href="/user/signin">{t('signin')}</Link>
              </Typography>
            </Button>

            <Button
              variant="outlined"
              className={classes.header_main_list_signUpButton}
            >
              <Typography variant="button">
                <Link href="/user/signup">{t('signup')}</Link>
              </Typography>
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
            {[
              { name: 'Tour', route: 'daytour' },
              { name: 'Create Trip', route: 'createtrip' },
            ].map(source => (
              <li key={source.name} className={classes.header_nav_li}>
                <Typography variant="button">
                  <Link href={`/${source.route}`}>{t(source.name)}</Link>
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </AppBar>
    </>
  );
};

export default Header;
