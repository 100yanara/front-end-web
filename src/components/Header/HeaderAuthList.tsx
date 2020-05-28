import React, { useState, MouseEvent } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavButton from 'components/Buttons/NavButton';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import Divider from '@material-ui/core/Divider';
//routes
import * as ROUTES from 'constants/routes';
//avatar icon
import { avatar1 } from 'assets/images/avatar';
import { Typography } from '@material-ui/core';
// Auth hook
import useAuth from 'store/hooks/useAuth';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  navList: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    color: 'white',
    alignItems: 'center',
  },
  navList_li: {
    marginLeft: theme.spacing(1),
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
  userAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  userButton: {
    boxShadow: theme.shadows[1],
  },
  userInformationList: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& li': {
      padding: '.8rem 2rem',
    },
  },
}));

interface Props {
  theme?: number;
}

const HeaderAuthList: React.FunctionComponent<Props> = props => {
  const { theme } = props;

  const classes = useStyles();
  const { t, i18n } = useTranslation();
  // personal informations popover
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);
  // useAuth hook
  const auth = useAuth();
  return (
    <ul className={classes.navList}>
      <li className={classes.navList_li}>
        <Link
          to={ROUTES.BUCKET_LIST}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <NavButton
            size="large"
            className={clsx(theme && classes.darkThemeNavButton)}
          >
            버킷리스트
          </NavButton>
        </Link>
      </li>
      <li className={classes.navList_li}>
        <Link
          to={ROUTES.TRAVELER_RESERVATION}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <NavButton
            size="large"
            className={clsx(theme && classes.darkThemeNavButton)}
          >
            예약내역
          </NavButton>
        </Link>
      </li>
      <li className={classes.navList_li}>
        <Link
          to={ROUTES.MESSEGE}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <NavButton
            size="large"
            className={clsx(theme && classes.darkThemeNavButton)}
          >
            메시지
          </NavButton>
        </Link>
      </li>
      <li className={classes.navList_li}>
        <NavButton
          size="large"
          variant={theme === 1 ? 'contained' : 'outlined'}
          className={clsx(
            theme && classes.darkThemeNavButton,
            classes.userButton
          )}
          aria-describedby={clsx(open && 'simple-popover')}
          onClick={handleClick}
        >
          <Box component="span" mr={1}>
            SangHun
          </Box>
          <Avatar alt="#" src={avatar1} className={classes.userAvatar} />
        </NavButton>
        <Popover
          id={clsx(open && 'simple-popover')}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          elevation={2}
          PaperProps={{
            style: {
              marginTop: 14,
              background: '#f9f9f9',
            },
          }}
        >
          <Typography
            component="ul"
            variant="button"
            className={classes.userInformationList}
          >
            <li>
              <Link
                to={ROUTES.ACCOUNT}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                계정
              </Link>
            </li>
            <Divider />
            <li>
              <Link
                to={ROUTES.ACCOUNT}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                관리자 페이지
              </Link>
            </li>
            <Divider />
            <li>
              <Link
                to={ROUTES.ACCOUNT}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                가이드 페이지
              </Link>
            </li>
            <Divider />
            <li style={{ cursor: 'pointer' }} onClick={auth.onSignOut}>
              로그아웃
            </li>
          </Typography>
        </Popover>
      </li>
    </ul>
  );
};

export default HeaderAuthList;
