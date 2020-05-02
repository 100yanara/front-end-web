import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    margin: 'auto auto 0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  footer__list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  footer__list__social: {
    '& li': {
      marginLeft: '10px',
      paddingTop: 4,
    },
  },
  footer__border: {
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
}));

interface Props {
  footerBorderTop: boolean;
}
const Footer: React.FunctionComponent<Props> = ({ footerBorderTop }) => {
  const classes = useStyles();
  let dt: Date = new Date();
  return (
    <Container
      maxWidth={false}
      className={clsx(footerBorderTop && classes.footer__border)}
    >
      <Container maxWidth="lg">
        <footer className={classes.footer}>
          <Typography variant="caption" color="textPrimary">
            <ul className={classes.footer__list}>
              <li>
                &copy; {dt.getFullYear()} 백야나라, Inc. All rights reserved
                &middot;
              </li>
              <li>&nbsp;개인정보 처리방침 &middot; </li>
              <li>&nbsp;환불 정책</li>
            </ul>
          </Typography>
          <ul
            className={`${classes.footer__list} ${classes.footer__list__social}`}
          >
            <li>
              <FacebookIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <YouTubeIcon />
            </li>
          </ul>
        </footer>
      </Container>
    </Container>
  );
};

export default Footer;
