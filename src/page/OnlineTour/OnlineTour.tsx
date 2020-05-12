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
import { FilterButton } from 'components/Buttons';

import { cityPoint, hermitage, troika } from 'assets/images/daytour_saint';
import { orientation, dvor } from 'assets/images/onlineTour_saint';

//TYPE
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

const OnlineTour: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Layout
      headerDefaultElevation={1}
      footerBorderTop={true}
      navPosition={Position.sticty}
    >
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
                온라인 체험 4개 &middot; 5월 20일 - 5월 25일
              </Box>
              <Box component="div">
                <Typography variant="h4" component="h1">
                  <Box fontSize="32px" fontWeight={800}>
                    상트페테르부르크 온라인 체험
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
              <Box component="div">온라인 체험 소개</Box>
            </Typography>
            <Box component="div" marginTop="4px">
              지식과 감동을 전하는 백야나라 온라인 체험
            </Box>
          </Box>
          <Box
            component="div"
            display="grid"
            className={classes.tour_container}
          >
            {[
              {
                location: '상트페테르부르크',
                title: '이현희 가이드와 함께하는 서양 미술사',
                image: hermitage,
                minimum: 1,
                duration: 1.5,
                character: '단체여행',
                course: '에르미타쥐 박물관 본관 + 신관',
                price: '15,500',
              },
              {
                location: '상트페테르부르크',
                title: '이현희 가이드와 함께하는 건축 여행',
                image: dvor,
                minimum: 1,
                duration: 1.5,
                character: '단체여행',
                course: '',
                price: '20,500',
              },
              {
                location: '상트페테르부르크',
                title: '상트페테르부르크 시내핵심투어',
                image: cityPoint,
                minimum: 1,
                duration: 3,
                character: '단체여행',
                course:
                  '성 이삭성당+청동 기마상+표트르 대제 배 만드는 동상+궁전 광장+넵스키 대로+카잔 성당+피의 구세주 성당',
                price: '15,500',
              },
              {
                location: '상트페테르부르크',
                title: '이현희 가이드와 함께하는 죄와 벌 투어',
                image: troika,
                minimum: 1,
                duration: 3,
                character: '단체여행',
                course: '센나야 광장+라스콜리니코프의 집+소냐의 집+노파의 집',
                price: '15,500',
              },
              {
                location: '상트페테르부르크',
                title: '여행 준비 오리엔테이션',
                image: orientation,
                minimum: 1,
                duration: 1.5,
                character: '단체여행',
                course: '',
                price: '10,500',
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
                      label="온라인"
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
                        &middot; {a.character}
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

export default OnlineTour;
