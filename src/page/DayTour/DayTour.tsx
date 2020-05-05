import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';

import Layout from 'components/layout';
import FilterButton from 'page/DayTour/filterButton';

import {
  amberSum,
  amberWin,
  baroque,
  cityPoint,
  hermitage,
  romance,
  russianPainting,
  troika,
  walking,
} from 'assets/images/daytour_saint';

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
  tour_container: {
    marginTop: 30,
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoFlow: 'row dense',
    gridColumnGap: theme.spacing(2),
    gridRowGap: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
  card: {
    height: '32vw',
    maxHeight: '530px',
    borderRadius: '10px',
    boxShadow: theme.shadows[0],
    backgroundColor: 'transparent',
    '&:hover': {
      boxShadow: theme.shadows[1],
    },
    [theme.breakpoints.down('md')]: {
      height: '50vw',
      maxHeight: '600px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '70vw',
      maxHeight: '700px',
    },
  },
  cardAction: {
    height: '100%',
    '&:hover $focusHighlight': {
      opacity: 0,
    },
  },
  focusHighlight: {},
  media: {
    height: '65%',
    borderRadius: '10px',
    position: 'relative',
  },
  cardContent: {
    height: '35%',
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
    <Layout headerDefaultElevation={1} footerBorderTop={true}>
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
                데이 투어 9개 &middot; 6월 17일 - 6월 30일
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
        <Box component="div" paddingBottom="50px">
          <Box component="div" paddingTop="40px" marginBottom="8px" width="50%">
            <Typography component="h3" variant="h6">
              <Box component="div">데이 투어 소개</Box>
            </Typography>
            <Box component="div" marginTop="4px">
              지식과 감동을 전하는 백야나라 데이 투어
            </Box>
          </Box>
          <Box
            component="div"
            display="grid"
            className={classes.tour_container}
          >
            {[
              {
                title: '황제의 마을(성수기)',
                image: amberSum,
                minimum: 2,
                duration: 4,
                character: '단체여행',
                transport: '도보',
                course: '예카테리나 궁전',
                price: '58,500',
              },
              {
                title: '황제의 마을(비수기)',
                image: amberWin,
                minimum: 2,
                duration: 4,
                character: '단체여행',
                transport: '도보',
                course: '파블롭스크 궁전+예카테리나 궁전',
                price: '58,500',
              },
              {
                title: '러시안 바로크',
                image: baroque,
                minimum: 2,
                duration: 4,
                character: '단체여행',
                transport: '도보',
                course:
                  '여름분수공원 : 삼손분수+대폭포+마를리궁전+에르미타쥐 정자+몽플뢰지르+로마분수+체스산분수',
                price: '58,500',
              },
              {
                title: '상트페테르부르크 시내핵심투어',
                image: cityPoint,
                minimum: 2,
                duration: 4,
                character: '단체여행',
                transport: '도보',
                course:
                  '성 이삭성당+청동 기마상+표트르 대제 배 만드는 동상+궁전 광장+넵스키 대로+카잔 성당+피의 구세주 성당',
                price: '58,500',
              },
              {
                title: '에르미타쥐 서양미술사',
                image: hermitage,
                minimum: 2,
                duration: 4,
                character: '단체여행',
                transport: '도보',
                course: '에르미타쥐 박물관 본관+신관',
                price: '58,500',
              },
              {
                title: '백야 로망스',
                image: romance,
                minimum: 2,
                duration: 4,
                character: '단체여행',
                transport: '도보',
                course:
                  '성이삭성당+스핑크스+로스트랄 등대+피의성당+궁전광장+카잔성당',
                price: '58,500',
              },
              {
                title: '러시아 미술사 3시간 투어',
                image: russianPainting,
                minimum: 2,
                duration: 4,
                character: '단체여행',
                transport: '도보',
                course: '러시아 박물관',
                price: '58,500',
              },
              {
                title: '트로이카 문학과 혁명투어',
                image: troika,
                minimum: 2,
                duration: 4,
                character: '단체여행',
                transport: '도보',
                course:
                  '센나야 광장+라스콜리니코프의 집+소냐의 집+노파의 집+마르스 광장+레닌 광장+핀란드 역',
                price: '58,500',
              },
              {
                title: '걸어서 상트페테르부르크',
                image: walking,
                minimum: 2,
                duration: 4,
                character: '단체여행',
                transport: '도보',
                course:
                  '성 이삭성당+청동 기마상+표트르 대제 배 만드는 동상+궁전 광장+넵스키 대로+카잔 성당+피의 구세주 성당',
                price: '58,500',
              },
            ].map((a, i) => (
              <Card key={i} className={classes.card}>
                <CardActionArea
                  classes={{
                    root: classes.cardAction,
                    focusHighlight: classes.focusHighlight,
                  }}
                >
                  <CardMedia
                    className={classes.media}
                    image={a.image}
                    title={a.title}
                  >
                    <Chip
                      size="small"
                      label="데이 투어"
                      style={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        fontSize: 10,
                        color: 'white',
                        background: 'black',
                      }}
                    />
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Box component="div" style={{ height: '100%' }}>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="h2"
                        style={{ height: '20%' }}
                      >
                        {a.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ height: '18%' }}
                      >
                        {`최소인원 ${a.minimum}명`} &middot; {a.duration}시간
                        &middot; {a.character} &middot; {a.transport}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ height: '50%' }}
                      >
                        {a.course}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        component="p"
                        align="right"
                        style={{ height: '12%' }}
                      >
                        1인
                        <Box component="span" fontWeight={800} color="#EE4116">
                          &nbsp; ₩ {a.price}
                        </Box>
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default DayTour;
