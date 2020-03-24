import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
// import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import spac from 'assets/images/attraction1.jpg';

const useStyles = makeStyles((theme: Theme) => ({
  'daytour-box__card': {
    maxWidth: 345,
  },
  'daytour-box__card__media': {
    height: 180,
    transition: 'all .5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  'daytour-box__card__price': {
    marginTop: 15,
    marginBottom: 15,
  },
  'daytour-box__card__reaction': {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
  },
}));

const TourCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes['daytour-box__card']}>
      <CardActionArea>
        <CardMedia
          className={classes['daytour-box__card__media']}
          image={spac}
          title="spac"
        />
        <CardContent>
          <Typography gutterBottom variant="button" component="h2">
            모스크바 심장투어
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            최소인원 2명 •7.5시간 •단체여행 •도보
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            크레믈린+붉은 광장+성바실리성당
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            align="right"
            className={classes['daytour-box__card__price']}
          >
            1인 ₩58,500
          </Typography>
          <Divider variant="middle" />
          <Box
            component="div"
            className={classes['daytour-box__card__reaction']}
          >
            <Rating value={5} readOnly />
            <Typography component="p" variant="button" color="textSecondary">
              후기 24개
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TourCard;
