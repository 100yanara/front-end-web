import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Collapse from '@material-ui/core/Collapse';

import TourCard from './TourCard';
import Layout from 'components/layout';
import FilterButton from 'page/DayTour/filterButton';
const useStyles = makeStyles((theme: Theme) => ({
  filter__list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
    padding: 0,
    '& li': {
      display: 'inline-blick',
      paddingRight: '8px',
      paddingTop: '4px',
      paddingBottom: '4px',
    },
  },
}));

const DayTour: React.FunctionComponent = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    filter: false,
    city: false,
  });
  const handleClick = (anchor: string, open: boolean) => (
    event: React.MouseEvent
  ) => {
    setState({ ...state, [anchor]: open });
  };
  return (
    <Layout headerDefaultElevation={1}>
      <Container maxWidth="lg">
        <Box component="div">
          <Box component="div" paddingTop="50px">
            <Box component="section">
              <Box
                component="div"
                fontSize="14px"
                lineHeight="18px"
                paddingBottom="8px"
              >
                데이 투어 17개 &middot; 6월 17일 - 6월 30일
              </Box>
              <Box component="div">
                <Typography variant="h4" component="h1">
                  <Box fontSize="32px" fontWeight={800}>
                    상트페테르부르크 데이 투어
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component="div" paddingTop="20px">
            <ul className={classes.filter__list}>
              <li>
                <FilterButton variant="outlined">인원</FilterButton>
              </li>
              <li>
                <FilterButton variant="outlined">요금</FilterButton>
              </li>
              <li>
                <FilterButton variant="outlined">시간</FilterButton>
              </li>
            </ul>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default DayTour;

{
  /* <Box
component="div"
display="flex"
width="100%"
flexDirection="column"
justifyContent="center"
alignItems="center"
>
<Box
  component="div"
  display="flex"
  flexDirection="row"
  width="100%"
  className={classes['layout']}
>
  <Typography
    variant="subtitle1"
    component="div"
    onClick={handleClick('filter', !state.filter)}
    className={classes.daytour__filter__typo}
  >
    Filter
  </Typography>
  <Grow in={state.filter}>
    <Typography
      variant="overline"
      component="div"
      className={classes.daytour__filter__typo}
      onClick={handleClick('city', !state.city)}
    >
      city
    </Typography>
  </Grow>
  <Grow
    in={state.filter}
    style={{ transformOrigin: '0 0 0' }}
    {...(state.filter ? { timeout: 1000 } : {})}
  >
    <Typography
      variant="overline"
      component="div"
      className={classes.daytour__filter__typo}
    >
      date
    </Typography>
  </Grow>
</Box>
<Collapse in={state.city}>
  <Box component="div" display="flex" flexDirection="row">
    <Typography
      component="div"
      variant="overline"
      className={classes.daytour__filter__typo}
    >
      moscow
    </Typography>
    <Typography
      component="div"
      variant="overline"
      className={classes.daytour__filter__typo}
    >
      saint petersburg
    </Typography>
    <Typography
      component="div"
      variant="overline"
      className={classes.daytour__filter__typo}
    >
      tallin
    </Typography>
  </Box>
</Collapse>
<Box className={`${classes['layout']}`}>
  <Typography variant="h6" className={classes['daytour__title']}>
    Moscow
  </Typography>
  <Box
    component="div"
    display="flex"
    justifyContent="space-between"
    className={classes['daytour__cities']}
  >
    {Array.from(Array(4)).map(val => (
      <TourCard />
    ))}
  </Box>
  <Typography variant="h6" className={classes['daytour__title']}>
    Saint Petersburg
  </Typography>
  <Box
    display="flex"
    justifyContent="space-between"
    className={classes['daytour__cities']}
  >
    {Array.from(Array(4)).map(val => (
      <TourCard />
    ))}
  </Box>
  <Typography variant="h6" className={classes['daytour__title']}>
    Tallin
  </Typography>
  <Box
    display="flex"
    justifyContent="space-between"
    className={classes['daytour__cities']}
  >
    {Array.from(Array(4)).map(val => (
      <TourCard />
    ))}
  </Box>
</Box>
</Box> */
}
