import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Hidden from '@material-ui/core/Hidden';
import { useTranslation } from 'react-i18next';

import logo4 from 'assets/images/logo4.png';

const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    width: '110px',
  },
  header: () => ({
    boxShadow: theme.shadows[0],
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  }),
  header__inner: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      padding: '10px 0px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      padding: '10px 0',
    },
  },
  header__menu_item_box: {},
  header__menu_item_box__item: {
    marginLeft: 30,
    '&:hover': {
      color: theme.palette.text.primary,
    },
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
    <AppBar position="static" className={classes.header}>
      <Box
        component="div"
        display="flex"
        justifyContent="space-between"
        className={classes.header__inner}
      >
        <Link href="/">
          <img src={logo4} alt="#" className={classes.logo} />
        </Link>
        <Box
          component="div"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          className={classes.header__menu_item_box}
        >
          <Hidden smDown>
            <Typography
              variant="button"
              color="textSecondary"
              className={classes.header__menu_item_box__item}
            >
              {t('currency')}
            </Typography>
            <Typography
              variant="button"
              color="textSecondary"
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              className={classes.header__menu_item_box__item}
            >
              {t('language')}
            </Typography>
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
            <Typography
              variant="button"
              color="textSecondary"
              className={classes.header__menu_item_box__item}
            >
              <Link href="/calendar" color="inherit" underline="none">
                {t('Calendar')}
              </Link>
            </Typography>
            <Typography
              variant="button"
              color="textSecondary"
              className={classes.header__menu_item_box__item}
            >
              <Link href="/daytour" color="inherit" underline="none">
                {t('Tour')}
              </Link>
            </Typography>
            <Typography
              variant="button"
              color="textSecondary"
              className={classes.header__menu_item_box__item}
            >
              <Link href="/createtrip" color="inherit" underline="none">
                {t('Create Trip')}
              </Link>
            </Typography>
            <Typography
              variant="button"
              color="textSecondary"
              className={classes.header__menu_item_box__item}
            >
              <Link href="/user/signin" color="inherit" underline="none">
                {t('signin')}
              </Link>
            </Typography>

            <Typography
              variant="button"
              color="textSecondary"
              className={classes.header__menu_item_box__item}
            >
              <Link href="/user/signup" color="inherit" underline="none">
                {t('signup')}
              </Link>
            </Typography>
          </Hidden>

          <Hidden mdUp>
            <IconButton edge="start" color="default" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
