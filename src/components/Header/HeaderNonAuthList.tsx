import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavButton from 'components/Buttons/NavButton';
//routes
import * as ROUTES from 'constants/routes';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
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
  theme?: number;
}

const HeaderNonAuthList: React.FunctionComponent<Props> = props => {
  const { theme } = props;

  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <ul className={classes.navList}>
      <li>
        <Link
          to={ROUTES.SIGN_IN}
          style={{ textDecoration: 'none', color: 'inherit' }}
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
          to={ROUTES.SIGN_UP}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <NavButton
            variant={theme === 1 ? 'contained' : 'outlined'}
            size="large"
            className={theme === 1 ? classes.signUpDark : classes.signUp}
          >
            {t('signup')}
          </NavButton>
        </Link>
      </li>
    </ul>
  );
};

export default HeaderNonAuthList;
