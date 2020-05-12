import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { getRandomColor } from 'utils/random';

import { dvor } from 'assets/images/onlineTour_saint';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: 90,
      width: '100%',
      background: '#fafafa',
      [theme.breakpoints.down('md')]: {
        height: 105,
      },
      [theme.breakpoints.down('sm')]: {
        height: 125,
      },
      [theme.breakpoints.down('xs')]: {
        height: 145,
      },
      '&:hover': {
        background: theme.palette.grey[100],
      },
    },
    cover: {
      width: '30%',
      [theme.breakpoints.down('md')]: {
        minWidth: '100px',
        maxWidth: '100px',
      },
      [theme.breakpoints.down('sm')]: {
        minWidth: '130px',
        maxWidth: '130px',
      },
      [theme.breakpoints.down('xs')]: {
        minWidth: '150px',
        maxWidth: '150px',
      },
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 10,
      paddingTop: 5,
    },
  })
);

export default function Event() {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={0} square={true}>
      {/* <CardMedia className={classes.cover} image={dvor} /> */}
      <div className={classes.details}>
        <Typography variant="caption">09:30</Typography>
        <Typography variant="caption">
          상트페테르부르크 &middot; 온라인
        </Typography>
        <Typography variant="subtitle2">모스크바 환상투어</Typography>
        <Typography variant="caption" align="left">
          58,500원
        </Typography>
      </div>
    </Card>
  );
}
