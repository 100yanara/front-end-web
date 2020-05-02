import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Layout from 'components/layout';
import {
  al,
  ana,
  darya,
  ha,
  hyun,
  keum,
  lu,
  marett,
  mina,
  peter,
  sena,
  shin,
  yun,
  yung,
  museum,
  saint,
  hermitage,
} from 'assets/images';

const useStyles = makeStyles((theme: Theme) => ({
  home__services: {
    '& span': {
      marginRight: 24,
      paddingBottom: 7,
    },
    '& span > a:hover': {
      color: theme.palette.grey[600],
    },
  },
  home__search: {
    height: 70,
    borderRadius: '10px',
    boxShadow: theme.shadows[2],
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  home__search__button: {
    color: 'white',
    width: '100%',
    height: '100%',
    flexGrow: 1,
  },
  home__search__input: {
    borderRadius: '10px',
    border: '2px solid #fafafa',
    height: '100%',
    flexGrow: 5,
    '&:hover': {
      border: `2px solid ${theme.palette.grey[300]}`,
    },
    '& input': {
      background: 'none',
      border: 'none',
      fontSize: '1.1em',
      margin: 0,
      padding: 0,
    },
  },
  home__title: {
    fontSize: '40px',
    width: '55%',
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  },
  home__cards__container: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: '15px',
  },
  home__cards: {
    borderRadius: '10px',
    maxWidth: 405,
    boxShadow: theme.shadows[2],
  },
  home__banner: {
    marginTop: 80,
    borderRadius: 10,
  },
  banner__dotGroup: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 5,
    left: '47%',
  },
}));

const Home: React.FunctionComponent = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" marginBottom="50px">
          <Box
            component="div"
            pt="32px"
            pb="16px"
            className={classes.home__services}
          >
            <Typography variant="subtitle2">
              <Box component="span">
                <Link href="/daytour" color="textPrimary" underline="none">
                  {t('tour')}
                </Link>
              </Box>
              <Box component="span">
                <Link
                  href="/onlineexperience"
                  color="textPrimary"
                  underline="none"
                >
                  온라인 체험
                </Link>
              </Box>
              <Box component="span">
                <Link href="/createtrip" color="textPrimary" underline="none">
                  {t('createTrip')}
                </Link>
              </Box>
              <Box component="span">
                <Link href="/calendar" color="textPrimary" underline="none">
                  {t('calendar')}
                </Link>
              </Box>
            </Typography>
          </Box>
          <Box component="div" className={classes.home__search}>
            <Box
              gridArea="place"
              padding="15px"
              display="flex"
              flexDirection="column"
              className={classes.home__search__input}
              component="div"
            >
              <Box
                component="div"
                color="black"
                fontSize="10px"
                fontWeight="800"
                paddingBottom="4px"
                letterSpacing="0.04em"
              >
                위치
              </Box>
              <input type="text" placeholder="도시, 랜드마크를 입력하세요" />
            </Box>
            <Divider orientation="vertical" />
            <Box
              gridArea="date"
              padding="15px"
              display="flex"
              flexDirection="column"
              className={classes.home__search__input}
              component="div"
            >
              <Box
                component="div"
                color="black"
                fontSize="10px"
                fontWeight="800"
                paddingBottom="4px"
                letterSpacing="0.04em"
              >
                날짜
              </Box>
              <input type="text" placeholder="원하는 날짜를 입력하세요" />
            </Box>
            <Box gridArea="search" padding="11px">
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SearchIcon />}
                className={classes.home__search__button}
              >
                {t('search')}
              </Button>
            </Box>
          </Box>
        </Box>
        <Box component="div" className={classes.home__title}>
          러시아 여행의 든든한 동반자, 백야나라와 함께.
        </Box>
        <Box component="div" className={classes.home__cards__container}>
          <Card className={classes.home__cards}>
            <CardActionArea>
              <CardMedia
                image={museum}
                title="Contemplative Reptile"
                style={{ height: 250, backgroundColor: '#a5b77f' }}
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="h2">
                  {t('tour')}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  모스크바, 상트페테르부르크 그리고 탈린에 있는 다양한 백야나라
                  데이 투어 상품을 즐겨보세요.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.home__cards}>
            <CardActionArea>
              <CardMedia
                image={saint}
                title="Contemplative Reptile"
                style={{ height: 250, backgroundColor: '#788193' }}
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="h2">
                  {t('createTrip')}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  여행을 계획하고, 견적을 작성하는게 힘드셨죠? 백야나라가
                  도와드립니다. 원하는 여행을 계획하고, 견적을 받아보세요.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.home__cards}>
            <CardActionArea>
              <CardMedia
                image={hermitage}
                title="Contemplative Reptile"
                style={{ height: 250, backgroundColor: '#bfa386' }}
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="h2">
                  {t('calendar')}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  백야나라 여행 달력에서 원하는 날짜의 여행을 확인하고,
                  예약하세요.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <CarouselProvider
          totalSlides={3}
          visibleSlides={1}
          naturalSlideHeight={22}
          naturalSlideWidth={100}
          infinite={true}
          interval={5000}
          isPlaying={true}
          className={classes.home__banner}
        >
          <Box margin="auto" position="relative">
            <Slider>
              <Slide index={0}>
                <Box
                  component="div"
                  textAlign="left"
                  padding="70px 90px"
                  style={{
                    width: '100%',
                    height: '270px',
                    backgroundColor: '#ffe75a',
                    borderRadius: 10,
                  }}
                >
                  <Typography variant="h5">
                    <Box fontWeight={700}>트로이카 문학과 혁명투어</Box>
                  </Typography>
                  <Typography variant="subtitle1">
                    <Box marginTop="5px">2019년 백야나라 신상투어</Box>
                  </Typography>
                  <Button
                    variant="contained"
                    disableElevation
                    style={{
                      background: '#b2a13e',
                      color: 'white',
                      marginTop: 15,
                    }}
                  >
                    투어 보러가기
                  </Button>
                </Box>
              </Slide>
              <Slide index={1}>
                <Box
                  component="div"
                  textAlign="left"
                  padding="70px 90px"
                  style={{
                    width: '100%',
                    height: '270px',
                    backgroundColor: '#788193',
                    borderRadius: 10,
                  }}
                >
                  <Typography variant="h5">
                    <Box fontWeight={700}>모스크바 시내 집중투어</Box>
                  </Typography>
                  <Typography variant="subtitle1">
                    <Box marginTop="5px">모스크바 3시간 만에 친해지기!</Box>
                  </Typography>
                  <Button
                    variant="contained"
                    disableElevation
                    style={{
                      background: '#545a66',
                      color: 'white',
                      marginTop: 15,
                    }}
                  >
                    투어 보러가기
                  </Button>
                </Box>
              </Slide>
              <Slide index={2}>
                <Box
                  component="div"
                  textAlign="left"
                  padding="70px 90px"
                  style={{
                    width: '100%',
                    height: '270px',
                    backgroundColor: '#bfa386',
                    borderRadius: 10,
                  }}
                >
                  <Typography variant="h5">
                    <Box fontWeight={700}>상트페테르부르크 시내 핵심투어</Box>
                  </Typography>
                  <Typography variant="subtitle1">
                    <Box marginTop="5px">
                      상트페테르부르크 3시간 만에 친해지기!
                    </Box>
                  </Typography>
                  <Button
                    variant="contained"
                    disableElevation
                    style={{
                      background: '#85725d',
                      color: 'white',
                      marginTop: 15,
                    }}
                  >
                    투어 보러가기
                  </Button>
                </Box>
              </Slide>
            </Slider>
            <DotGroup className={classes.banner__dotGroup} />
          </Box>
        </CarouselProvider>
      </Container>
      <Container
        maxWidth={false}
        style={{
          backgroundColor: 'black',
          marginTop: 80,
          padding: '60px 0',
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="left">
            <Typography variant="h4">
              <Box color="white" fontWeight="bold">
                백야나라 가이드
              </Box>
            </Typography>
            <Typography variant="body1">
              <Box color="white" width="35%" marginTop="5px">
                백야나라의 가이드를 살펴보세요. 러시아 여행동안 지식과 감동을
                선사해 줄 백야나라 가이드를 소개합니다.
              </Box>
            </Typography>
            <Box component="div" marginTop="30px" color="white"></Box>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={100}
              totalSlides={14}
              visibleSlides={4}
              infinite={true}
              dragStep={4}
              isPlaying={true}
              step={2}
            >
              <Slider>
                {[
                  al,
                  ana,
                  darya,
                  ha,
                  hyun,
                  keum,
                  lu,
                  marett,
                  mina,
                  peter,
                  sena,
                  shin,
                  yun,
                  yung,
                ].map((a, i) => (
                  <Slide index={i} key={i}>
                    <Card
                      style={{
                        borderRadius: '10px',
                        maxHeight: '300px',
                        marginRight: 10,
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          image={a}
                          title="Contemplative Reptile"
                          style={{
                            height: '20rem',
                            backgroundColor: '#a5b77f',
                          }}
                        />
                      </CardActionArea>
                    </Card>
                  </Slide>
                ))}
              </Slider>
            </CarouselProvider>
          </Box>
        </Container>
      </Container>
      <Container maxWidth={false} style={{ borderBottom: '1px solid #e0e0e0' }}>
        <Container maxWidth="lg">
          <Box
            component="div"
            display="grid"
            gridTemplateColumns="1fr 1fr"
            marginTop="80px"
            marginBottom="80px"
          >
            <Typography variant="h4">
              <Box
                component="p"
                fontWeight="bold"
                width="80%"
                margin="0"
                lineHeight="3rem"
              >
                백야나라에서 만드는 다양한 컨텐츠를 소개합니다.
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                marginTop="15px"
                width="20%"
                justifyContent="space-between"
              >
                <FacebookIcon fontSize="large" style={{ color: '#4267b2' }} />
                <InstagramIcon fontSize="large" />
                <YouTubeIcon fontSize="large" style={{ color: '#ff0000' }} />
              </Box>
            </Typography>
            <Typography variant="h5">
              <Box component="p" margin="0" lineHeight="2.3rem">
                백야나라는 여행 안내뿐만이 아니라, 러시아에서 접할 수 있는
                다양한 문화를 컨텐츠로 소개해드리고 있습니다. 페이스북,
                인스타그램, 네이버 블로그 그리고 유튜브를 통해서, 백야나라
                가이드들의 브이로그, 역사, 건축, 박물관등에 이르는 탐구생활
                그리고 백야나라 가이드들의 썰풀이 등의 컨텐츠를 즐겨보세요.
              </Box>
            </Typography>
          </Box>
        </Container>
      </Container>
    </Layout>
  );
};

export default Home;
