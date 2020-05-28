import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardMedia from '@material-ui/core/CardMedia';

import { saint_petersburg, moscow, tallin } from 'assets/images/city';
const useStyles = makeStyles((theme: Theme) => ({
  bucket_empty: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(20),
    flexDirection: 'column',
  },
}));

const EmptyList: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.bucket_empty}>
      <FavoriteIcon fontSize="large" color="disabled" />
      <Typography variant="h5">
        <Box fontWeight={700} mt={2}>
          버킷리스트가 비었습니다
        </Box>
      </Typography>
      <Typography variant="subtitle1">
        <Box mt={1}>어디로 떠날지 고민중이신가요?</Box>
      </Typography>
      <Box
        component="div"
        display="grid"
        gridTemplateColumns="150px 150px 150px"
        gridColumnGap="15px"
        mt={5}
      >
        <Box
          width="100%"
          height="200px"
          bgcolor="#5fdde5"
          borderRadius="4px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>모스크바</Typography>
        </Box>
        <Box
          width="100%"
          height="200px"
          bgcolor="#f4ea8e"
          borderRadius="4px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>상트페테르부르크</Typography>
        </Box>
        <Box
          width="100%"
          height="200px"
          borderRadius="4px"
          bgcolor="#f37121"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>탈린</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyList;
