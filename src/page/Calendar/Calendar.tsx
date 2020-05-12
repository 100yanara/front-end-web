import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
//Material UI
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

//Custom UI
import Layout from 'components/layout';
import { FilterButton } from 'components/Buttons';
import { randomInt } from 'utils/random';
import Event from 'page/Calendar/Event';

//Type
import { Position } from 'components/Header/type';

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
}));

const Calendar = () => {
  const classes = useStyles();
  moment.locale('ko');
  const [state, setState] = React.useState({
    city: ['모스크바', '상트페테르부르크'],
    date: {
      start: 'yyyy-mm-dd',
      end: 'yyyy-mm-dd',
      weekdaysort: moment.weekdaysShort(),
      dateObject: moment(),
      firstDayOfMonth: () => {
        let firstDay = moment(state.date.dateObject)
          .startOf('month')
          .format('d');
        return firstDay;
      },
      month: [],
    },
    price: {
      0: '0-15000',
      1: '15000-30000',
      2: '30000-60000',
    },
  });
  return (
    <Layout
      headerDefaultElevation={1}
      footerBorderTop={true}
      navPosition={Position.static}
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
        {['5월', '6월', '7월', '8월'].map(month => (
          <Box
            paddingBottom="50px"
            component="div"
            display="flex"
            flexDirection="column"
            key={month}
          >
            <Box
              component="div"
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
                      {month} {i + 1}일 <strong>목요일</strong>
                    </Box>
                  </Typography>
                  {[...new Array(randomInt(1, 10))].map((a, i) => (
                    <Event key={i + 1} />
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </Layout>
  );
};

export default Calendar;
