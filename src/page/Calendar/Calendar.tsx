import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Moment from 'utils/Moment';
import Layout from 'components/layout';
import { FilterButton } from 'components/Buttons';
import { randomInt } from 'utils/random';
import Event from 'page/Calendar/Event';

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
  calendar__container: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridColumnGap: 10,
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  calendar__day: {
    gridRowGap: theme.spacing(1),
    gridTemplateRows: 'repeat(auto-fit), minmax(80px, 1fr)',
    alignContent: 'start',
  },
  calendar__dayOfTheWeek: {
    padding: '30px 0 10px',
    borderBottom: '3px solid black',
    position: 'sticky',
    top: 0,
    background: '#fafafa',
  },
  calendar__item: {
    height: '80px',
  },
}));

const Calendar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    filter: false,
    city: false,
    moment: new Moment('en'),
  });
  // const handleClick = (anchor: string, open: boolean) => (
  //   event: React.MouseEvent
  // ) => {
  //   setState({ ...state, [anchor]: open });
  // };
  return (
    <Layout
      headerDefaultElevation={1}
      footerBorderTop={true}
      navPosition="static"
    >
      <Container maxWidth="lg">
        <Box component="div">
          <Box component="div" paddingTop="50px">
            <Box component="section">
              <Box component="div">
                <Typography variant="h4" component="h1">
                  <Box fontSize="32px" fontWeight={800}>
                    여행 달력
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component="div" paddingTop="20px">
            <ul className={classes.filter__list}>
              <li>
                <FilterButton variant="outlined">도시</FilterButton>
              </li>
              <li>
                <FilterButton variant="outlined">날짜</FilterButton>
              </li>
              <li>
                <FilterButton variant="outlined">가격</FilterButton>
              </li>
              <li>
                <FilterButton variant="outlined">온/오프라인</FilterButton>
              </li>
            </ul>
          </Box>
        </Box>
        <Box
          component="div"
          paddingBottom="50px"
          display="grid"
          className={classes.calendar__container}
        >
          {[...new Array(30)].map((a, i) => (
            <Box display="grid" className={classes.calendar__day} key={i}>
              <Typography
                component="h3"
                variant="h6"
                className={classes.calendar__dayOfTheWeek}
              >
                <Box component="div">
                  5월 {i + 1}일 <strong>목요일</strong>
                </Box>
              </Typography>
              {[...new Array(randomInt(1, 10))].map((a, i) => (
                <Event key={i + 1} />
              ))}
            </Box>
          ))}
        </Box>
      </Container>
    </Layout>
  );
};

export default Calendar;
