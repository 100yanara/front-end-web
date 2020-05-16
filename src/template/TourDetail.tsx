import React from 'react';
//MUI
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withStyles, Theme, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import GradeIcon from '@material-ui/icons/Grade';
import AirportShuttleOutlinedIcon from '@material-ui/icons/AirportShuttleOutlined';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import GroupIcon from '@material-ui/icons/Group';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import CommuteIcon from '@material-ui/icons/Commute';
import Button from '@material-ui/core/Button';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import AppBar from '@material-ui/core/AppBar';
import RootRef from '@material-ui/core/RootRef';
import Collapse from '@material-ui/core/Collapse';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
//Custom UI
import Layout from 'components/layout';
import Review from 'components/Review';
//type
import { Position } from 'components/Header/type';
//map
import GoogleMapReact from 'google-map-react';
//images
import { amber1, amber2, amber3 } from 'assets/images/daytour_saint/amber';
import { amberSum, amberWin } from 'assets/images/daytour_saint';
import { avatar1, team6 } from 'assets/images/avatar';
const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const Map = (props: any) => {
  const [center, setCenter] = React.useState({ lat: 59.92026, lng: 30.328752 });
  const [zoom, setZoom] = React.useState(15);
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      <AnyReactComponent lat={59.92026} lng={30.328752} text="미팅장소" />
      <Box
        component="div"
        position="absolute"
        width="400px"
        height="80px"
        borderRadius="10px"
        bgcolor="white"
        top="8%"
        left="-5%"
        padding="13px"
      >
        <Typography variant="subtitle1">만나는 장소:</Typography>
        <Typography variant="body2">비텝스키 기차역 입구 앞</Typography>
      </Box>
    </GoogleMapReact>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  thumnailsContainer: {
    padding: '32px 0 0',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    height: '30vw',
    maxHeight: '500px',
    gridColumnGap: theme.spacing(1),
    gridRowGap: theme.spacing(1),
  },
  mainDescription: {
    padding: '32px 0 64px',
  },
  thumnails_card_media: {
    height: '100%',
  },
  boxLayout: {
    gridTemplateColumns: '35% 65%',
  },
  avatar: {
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  includeContainer: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoFlow: 'row dense',
    gridColumnGap: theme.spacing(2),
    gridRowGap: theme.spacing(3),
  },
  includeCard: {
    height: '18vw',
    maxHeight: '250px',
    padding: '40px 28px',
  },
  categories_nav: {
    boxShadow: theme.shadows[0],
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    height: '52px',
    background: 'white',
  },
  reservation_menu: {
    top: 'auto',
    bottom: 0,
    height: '69px',
    padding: '10px 0',
    background: '#FFFFFF',
    boxShadow: theme.shadows[0],
    borderTop: `.5px solid ${theme.palette.grey[200]}`,
  },
  reservation_avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  primaryColor: {
    color: theme.palette.primary.main,
  },
}));

const Tag = withStyles({
  root: {
    background: '#262626',
    borderRadius: '4px',
    fontSize: '9px',
    padding: '6px 8px',
    marginRight: '8px',
    marginBottom: '8px',
    letterSpacing: '0.5px',
    whiteSpace: 'nowrap',
  },
})(Box);

const TourDetail: React.FunctionComponent = () => {
  const classes = useStyles();
  const thumnailRef = React.useRef<HTMLDivElement>(null);
  const [state, setState] = React.useState({
    categoryShow: 0,
  });
  React.useEffect(() => {
    let win = window.pageYOffset;
    let bot = thumnailRef.current?.getBoundingClientRect().bottom;
    if (bot) {
      setState({
        ...state,
        categoryShow: win + bot,
      });
    }
  }, []);
  const trigger = useScrollTrigger({
    target: window ? window : undefined,
    disableHysteresis: true,
    threshold: 800,
  });
  const handleClick = (
    event: React.MouseEvent<HTMLDivElement>,
    value: string
  ) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(`#${value}`);

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Layout
      footerBorderTop={true}
      navPosition={Position.static}
      headerDefaultElevation={0}
      navBackground="black"
      navTheme={1}
    >
      <Container maxWidth={false} style={{ background: '#000000' }}>
        <RootRef rootRef={thumnailRef}>
          <Container maxWidth="lg" style={{ padding: '0 50px' }}>
            <Box
              color="white"
              display="grid"
              className={classes.thumnailsContainer}
            >
              <Box gridArea="1/1/3/3" height="100%" bgcolor="#fa9191">
                <CardMedia
                  className={classes.thumnails_card_media}
                  title="spac"
                  image={amber1}
                />
              </Box>
              <Box gridArea="1/3/3/5" bgcolor="#fa9191" height="100%">
                <CardMedia
                  className={classes.thumnails_card_media}
                  title="spac"
                  image={amber2}
                />
              </Box>
              <Box gridArea="1/5/2/6" bgcolor="#ffe9c5" height="100%">
                <CardMedia
                  className={classes.thumnails_card_media}
                  title="spac"
                  image={amber3}
                />
              </Box>
              <Box gridArea="2/5/3/6" bgcolor="#b4f2e1" height="100%">
                <CardMedia
                  className={classes.thumnails_card_media}
                  title="spac"
                  image={amberWin}
                />
              </Box>
              <Box gridArea="1/6/3/8" bgcolor="#eb6383" height="100%">
                <CardMedia
                  className={classes.thumnails_card_media}
                  title="spac"
                  image={amberSum}
                />
              </Box>
            </Box>
            <Box
              color="white"
              display="grid"
              className={`${classes.mainDescription} ${classes.boxLayout}`}
            >
              <Box textAlign="left">
                <Typography variant="overline">데이 투어</Typography>
                <Typography variant="h5">
                  <Box fontWeight={600}>황제의 마을(성수기)</Box>
                </Typography>
                <Typography variant="subtitle2">
                  <Box mt={1}>상트페테르부르크, 러시아</Box>
                </Typography>
                <Typography variant="subtitle2">
                  <Box mt={1} display="flex" alignItems="center">
                    <span style={{ paddingTop: '1px', fontWeight: 'bold' }}>
                      4.98
                    </span>
                    &nbsp; <GradeIcon style={{ fontSize: '15px' }} />
                    <span>(124)</span>
                  </Box>
                </Typography>
                <Box display="flex" flexDirection="row" mt={1}>
                  <Tag>투어</Tag>
                  <Tag>역사</Tag>
                </Box>
              </Box>

              <Box display="grid" gridTemplateColumns="repeat(4, 1fr)">
                <Box>
                  <WatchLaterIcon
                    style={{ fontSize: 15, marginBottom: 2, color: '#A7A7A7' }}
                  />
                  <Typography variant="body2">
                    <Box component="div" color="#A7A7A7">
                      진행시간
                    </Box>
                  </Typography>
                  <Typography variant="body2">
                    <Box>7.5시간</Box>
                  </Typography>
                </Box>
                <Box>
                  <GroupIcon
                    style={{ fontSize: 15, marginBottom: 2, color: '#A7A7A7' }}
                  />
                  <Typography variant="body2">
                    <Box component="div" color="#A7A7A7">
                      그룹당 인원
                    </Box>
                  </Typography>
                  <Typography variant="body2">
                    <Box>최소2명</Box>
                  </Typography>
                </Box>
                <Box>
                  <PlaylistAddCheckIcon
                    style={{ fontSize: 15, marginBottom: 2, color: '#A7A7A7' }}
                  />
                  <Typography variant="body2">
                    <Box component="div" color="#A7A7A7">
                      포함사항
                    </Box>
                  </Typography>
                  <Typography variant="body2">
                    <Box>반일차량,간식,수신기</Box>
                  </Typography>
                </Box>
                <Box>
                  <CommuteIcon
                    style={{ fontSize: 15, marginBottom: 2, color: '#A7A7A7' }}
                  />
                  <Typography variant="body2">
                    <Box component="div" color="#A7A7A7">
                      이동수단
                    </Box>
                  </Typography>
                  <Typography variant="body2">
                    <Box>도보</Box>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </RootRef>
      </Container>
      <Collapse in={trigger}>
        <AppBar
          position="fixed"
          component="div"
          className={`${classes.categories_nav}`}
        >
          <Container
            maxWidth="lg"
            style={{ padding: '0 50px', height: '100%' }}
          >
            <Typography variant="subtitle2" style={{ height: '100%' }}>
              <Box
                component="ul"
                display="flex"
                alignItems="center"
                flexDirection="row"
                height="100%"
                margin="0"
                padding="0"
              >
                <li
                  style={{
                    listStyle: 'none',
                    marginRight: '6px',
                    color: '#ff7f11',
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    component="div"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                      handleClick(e, 'program')
                    }
                  >
                    프로그램
                  </Box>
                </li>
                &middot;
                <li
                  style={{
                    listStyle: 'none',
                    marginRight: '6px',
                    marginLeft: '6px',
                    color: '#ff7f11',
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    component="div"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                      handleClick(e, 'guide')
                    }
                  >
                    가이드
                  </Box>
                </li>
                <li
                  style={{
                    listStyle: 'none',
                    marginRight: '6px',
                    marginLeft: '6px',
                    color: '#ff7f11',
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    component="div"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                      handleClick(e, 'include')
                    }
                  >
                    제공 항목
                  </Box>
                </li>
                &middot;
                <li
                  style={{
                    listStyle: 'none',
                    marginRight: '6px',
                    marginLeft: '6px',
                    color: '#ff7f11',
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    component="div"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                      handleClick(e, 'review')
                    }
                  >
                    후기
                  </Box>
                </li>
                &middot;
                <li
                  style={{
                    listStyle: 'none',
                    marginRight: '6px',
                    marginLeft: '6px',
                    color: '#ff7f11',
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    component="div"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                      handleClick(e, 'visit')
                    }
                  >
                    방문 장소
                  </Box>
                </li>
                &middot;
                <li
                  style={{
                    listStyle: 'none',
                    color: '#ff7f11',
                    marginLeft: '6px',
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    component="div"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                      handleClick(e, 'precaution')
                    }
                  >
                    유의 사항
                  </Box>
                </li>
              </Box>
            </Typography>
          </Container>
        </AppBar>
      </Collapse>
      <Container maxWidth={false} style={{ paddingBottom: '5rem' }}>
        <Container maxWidth="lg" style={{ padding: '0 50px' }}>
          <Box
            component="div"
            display="grid"
            className={`${classes.boxLayout}`}
            mt={6}
          >
            <Typography variant="h5">
              <Box fontWeight={800} position="sticky" top={65} id="program">
                프로그램
              </Box>
            </Typography>
            <Typography variant="body1">
              <Box component="p" mt={0} lineHeight="1.6em">
                황제의 마을 투어는 교외에 있는 황제들의 별궁을 둘러볼 수 있는
                투어입니다. 황제들의 공적인 싦과 사적인 삶을 함께 둘러 볼 수
                있습니다.
              </Box>
              <Box component="p" lineHeight="1.6em" mt={5}>
                예카테리나 궁전은 로마노프 왕조의 화려함 그 자체를 보여줍니다.
                바로크 양식을 채택한 이 궁전은 궁내부 자체도 아름답지만, 특히
                호박방은 그랜드 투어의 필수 코스였을 정도로 유명한 곳입니다.
                또한 예카테리나 정원 호수 주변의 고전 건물들은 사진을 좋아하는
                분들에게는 특별한 즐거움을 제공해 드립니다.
              </Box>
              <Box component="p" lineHeight="1.6em" mt={5}>
                파블롭스크 궁전은 파벨 1세와 마리아 왕비의 애틋한 삶이 깃들어
                있는 곳으로 특히 마리아 왕비의 독특한 공예 취향을 느낄 수
                있습니다. 또한 600헥타아르에 이르는 자연 공원을 산책하는
                것만으로도 마음이 상쾌해 집니다.
              </Box>
            </Typography>
          </Box>
          <Box
            component="div"
            display="grid"
            className={`${classes.boxLayout}`}
            mt={6}
          >
            <Typography variant="h5">
              <Box fontWeight={800} position="sticky" top={65} id="guide">
                가이드
              </Box>
            </Typography>
            <Box component="div">
              <Avatar className={classes.avatar} alt="team" src={team6}>
                백야나라
              </Avatar>
              <Typography variant="h6">
                <Box fontWeight="bold" mt={4}>
                  백야나라 팀
                </Box>
              </Typography>
              <Typography variant="body1">
                <Box mt={2}>
                  <Box component="p" lineHeight="1.6em">
                    동토의 땅, 광활한 시베리아 삼림, 남부 초원지대, 보드카,
                    공산주의의 상징 붉은 광장과 크레믈린.
                  </Box>
                  <Box component="p" lineHeight="1.6em" mt={5}>
                    한국인들의 머리 속에 그려지는 러시아의 모습입니다. 그렇게
                    긍정적이지만은 않은 이미지가 떠오르는 것이 사실입니다.
                  </Box>
                  <Box component="p" lineHeight="1.6em" mt={5}>
                    그러나, 차이콥스키, 쇼스타코비치, 푸시킨, 도스토옙스키,
                    톨스토이, 솔제니친, 레핀, 샤갈, 칸딘스키, 유리 가가린 같은
                    이름을 들으면 어떻습니까? 러시아는 인류 역사와 문화 발전에
                    지대한 공헌을 해 온 것이지요.
                  </Box>
                  <Box component="p" lineHeight="1.6em" mt={5}>
                    백야나라 팀은 러시아의 많은 모습을 보여드리기 원합니다.
                    편견에 가려졌던 러시아의 보석 같은 이야기들을 전해드리기
                    원합니다.
                  </Box>
                  <Box component="p" lineHeight="1.6em" mt={5}>
                    1150여년의 짧은 역사를 갖고 있는 러시아가 세계 초강대국이 된
                    저력이 무엇인지, 그들이 어떻게 문화민족이 되었는지, 어떤
                    고난을 당하고 극복해 왔는지 상트페테르부르크와 모스크바 역사
                    유적지를 돌아 보며 차근 차근 설명해 드리겠습니다.
                  </Box>
                  <Box component="p" lineHeight="1.6em" mt={5}>
                    백야나라 팀은 늘 공부하고, 많은 것을 보고, 치열하게 토의하며
                    러시아를 알아가고 있습니다. 백야나라 팀이 제공하는 투어를
                    통해 러시아가 어떤 나라인가 이해하는데 도움을 드릴 수 있다면
                    더 바랄 것이 없겠습니다.
                  </Box>
                </Box>
              </Typography>
            </Box>
          </Box>
          <Box
            component="div"
            display="grid"
            className={`${classes.boxLayout}`}
            mt={6}
          >
            <Typography variant="h5">
              <Box fontWeight={800} position="sticky" top={65} id="include">
                제공 항목
              </Box>
            </Typography>
            <Box
              component="div"
              display="grid"
              className={classes.includeContainer}
            >
              <Paper variant="outlined" className={classes.includeCard}>
                <AirportShuttleOutlinedIcon fontSize="large" />
                <Typography variant="button" component="div">
                  반일 차량
                </Typography>
                <Typography variant="caption">
                  <ul style={{ margin: 0, padding: 0 }}>
                    <li style={{ listStyle: 'none' }}>
                      인원 수에 따라 7인승 메르세데스 스프린터 또는 18인승
                      메르세데스 스프린터가 제공됩니다.
                    </li>
                  </ul>
                </Typography>
              </Paper>
              <Paper variant="outlined" className={classes.includeCard}>
                <FastfoodOutlinedIcon fontSize="large" />
                <Typography variant="button" component="div">
                  간식
                </Typography>
                <Typography variant="caption">
                  <ul style={{ margin: 0, padding: 0 }}>
                    <li style={{ listStyle: 'none' }}>
                      빵, 음료수, 과일, 샌드위치, 초코파이가 포함되어 있습니다
                    </li>
                  </ul>
                </Typography>
              </Paper>
              <Paper variant="outlined" className={classes.includeCard}>
                <HeadsetOutlinedIcon fontSize="large" />
                <Typography variant="button" component="div">
                  수신기
                </Typography>
                <Typography variant="caption">
                  <ul style={{ margin: 0, padding: 0 }}>
                    <li style={{ listStyle: 'none' }}>
                      10명 이상일 경우 제공됩니다
                    </li>
                  </ul>
                </Typography>
              </Paper>
            </Box>
          </Box>
          <Box
            component="div"
            display="grid"
            className={`${classes.boxLayout}`}
            mt={6}
          >
            <Typography variant="h5">
              <Box fontWeight={800} id="review" position="sticky" top={65}>
                후기
              </Box>
            </Typography>
            {/* <Box component="div">
              <Typography variant="h5">
                <Box fontWeight={800} id="review" position="sticky" top={65}>
                  후기
                </Box>
              </Typography>
               <Box
                component="div"
                display="flex"
                flexDirection="row"
                alignItems="center"
                mt={1}
              >
                <Typography component="span">
                  <Box fontWeight="bold" mr={1}>
                    4.96
                  </Box>
                </Typography>
                <Box
                  component="span"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                >
                  {[...new Array(5)].map((a, i) => (
                    <GradeIcon fontSize="small" color="primary" />
                  ))}
                </Box>
              </Box>
            </Box> */}
            <Box component="div" display="flex" flexDirection="column">
              <Review />
              <Divider
                light={true}
                style={{ marginTop: '2rem', marginBottom: '2rem' }}
              />
              <Review />
              <Divider
                light={true}
                style={{ marginTop: '2rem', marginBottom: '2rem' }}
              />
              <Review />
            </Box>
          </Box>
          <Box
            component="div"
            display="grid"
            className={`${classes.boxLayout}`}
            mt={6}
            pb={6}
          >
            <Box component="div">
              <Typography variant="h5">
                <Box fontWeight={800} position="sticky" top={65} id="visit">
                  방문 장소
                </Box>
              </Typography>
            </Box>
            <Box component="ul" margin="0" padding="0" color="#484848">
              <Typography>
                <li>예카테리나 궁전</li>
                <li>예카테리나 공원</li>
              </Typography>
            </Box>
          </Box>
          <Box component="div" height="45vw" maxHeight="570px">
            <Map />
          </Box>
          <Box
            component="div"
            display="grid"
            className={`${classes.boxLayout}`}
            mt={10}
            pb={6}
          >
            <Typography variant="h5">
              <Box fontWeight={800} position="sticky" top={65} id="precaution">
                유의 사항
              </Box>
            </Typography>
            <Box component="div">
              <Box
                component="div"
                display="grid"
                flexDirection="row"
                gridTemplateColumns="35% 65%"
                width="100%"
              >
                <Typography variant="h6" component="div">
                  <Box>환불 정책</Box>
                </Typography>
                <Typography component="div" variant="body1">
                  모든 여행은 예약 후 24시간 이내 또는 여행 시작 7일 전까지 취소
                  및 전액 환불이 가능합니다.
                </Typography>
              </Box>
              <Divider
                light={true}
                style={{ marginTop: '3rem', marginBottom: '3rem' }}
              />
              <Box
                component="div"
                display="grid"
                gridTemplateColumns="35% 65%"
                width="100%"
              >
                <Typography variant="h6" component="div">
                  <Box>기타 참고사항</Box>
                </Typography>
                <Typography component="div" variant="body1">
                  <Box component="div" lineHeight="1.6rem">
                    1. 투어 시작 시간은 오전 7시입니다.
                    <br />
                    2. 미팅 시간과 장소에 대해 메시지를 따로 드리지 않습니다.
                    <br />
                    3. 여행용 배낭과 캐리어 소지시 박물관 입장이 제한됩니다. 큰
                    짐은 숙소에 맡긴 후 투어 참여 부탁드리겠습니다.
                    <br />
                    4. 수신기 사용은 10명 이상시 사용합니다.
                    <br />
                    5. 입장 대기시간이 길기 때문에 예카테리나 공원 유로 화장실로
                    안내하고 있습니다. 궁전 내부의 화장실은 무료로 이용할 수
                    있습니다.
                    <br />
                    6. 예카테리나 궁전이 위차한 푸쉬킨시는 일교차가 매우 크기
                    때문에 바람막이 점퍼 등 가벼운 겉옷을 챙겨주시고 도보 이동이
                    많아 발이 편한 신발을 착용해주시기 바랍니다.
                    <br />
                    7. 상트페테르부르크의 갑작스런 날씨 변화에 대비하여 작은
                    우산을 늘 소지하시기를 권합니다.
                    <br />
                    8. 개인소지품 보관에 주의해주시기 바랍니다.
                    <br />
                    9. 여행자 보험은 선택이 아닌 필수입니다. 여행자 보험에
                    가입하고 투어에 참여하실 것을 권합니다.
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
      <AppBar position="fixed" className={classes.reservation_menu}>
        <Container maxWidth="lg" style={{ padding: '0 50px', height: '100%' }}>
          <Box
            component="div"
            display="flex"
            alignItems="center"
            flexDirection="row"
            height="100%"
            justifyContent="space-between"
          >
            <Box
              component="div"
              display="flex"
              alignItems="center"
              height="100%"
            >
              <Avatar
                alt="Remy Sharp"
                src={avatar1}
                className={classes.reservation_avatar}
              />
              <Typography variant="button">
                <Box component="div" ml={2}>
                  황제의 마을(성수기)
                  <Box component="span" ml={1} className={classes.primaryColor}>
                    4.98
                    <GradeIcon style={{ fontSize: '12px', paddingTop: 3 }} />
                  </Box>
                  <Box component="span">(2)</Box>
                </Box>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography component="div" variant="button">
                58,500&nbsp; ₩<Box component="span">/인부터</Box>
              </Typography>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                size="large"
                style={{ color: '#FFFFFF', marginLeft: '1rem', width: '170px' }}
              >
                날짜 보기
              </Button>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </Layout>
  );
};

export default TourDetail;
