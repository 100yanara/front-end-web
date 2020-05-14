import React from 'react';
//MUI
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withStyles, Theme, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import GradeIcon from '@material-ui/icons/Grade';
import AirportShuttleOutlinedIcon from '@material-ui/icons/AirportShuttleOutlined';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
//Custom UI
import Layout from 'components/layout';
import Review from 'components/Review';
//type
import { Position } from 'components/Header/type';

//images
import {
  amber1,
  amber2,
  amber3,
  amber4,
  amber5,
} from 'assets/images/daytour_saint/amber';

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
  boxLayout: {
    gridTemplateColumns: '30% 70%',
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
  return (
    <Layout
      footerBorderTop={true}
      navPosition={Position.static}
      headerDefaultElevation={0}
      navBackground="black"
      navTheme={1}
    >
      <Container maxWidth={false} style={{ background: '#000000' }}>
        <Container maxWidth="lg" style={{ padding: '0 50px' }}>
          <Box
            color="white"
            display="grid"
            className={classes.thumnailsContainer}
          >
            <Box gridArea="1/1/3/3" bgcolor="#eb6383" />
            <Box gridArea="1/3/3/5" bgcolor="#fa9191" />
            <Box gridArea="1/5/2/6" bgcolor="#ffe9c5" />
            <Box gridArea="2/5/3/6" bgcolor="#b4f2e1" />
            <Box gridArea="1/6/3/8" bgcolor="#eb6383" />
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
            {/* 이건 그룹 이원, 시간 등을 표시하는 박스 */}
            <Box></Box>
          </Box>
        </Container>
      </Container>
      <Container maxWidth={false} style={{ paddingBottom: '5rem' }}>
        <Container maxWidth="lg" style={{ padding: '0 50px' }}>
          <Box
            component="div"
            display="grid"
            className={`${classes.boxLayout}`}
            mt={6}
          >
            <Typography variant="h5">
              <Box fontWeight={800} position="sticky" top={30}>
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
              <Box fontWeight={800} position="sticky" top={30}>
                가이드
              </Box>
            </Typography>
            <Box component="div">
              <Avatar className={classes.avatar}>백야나라</Avatar>
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
              <Box fontWeight={800} position="sticky" top={30}>
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
                    <li>
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
                    <li>
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
                    <li>10명 이상일 경우 제공됩니다</li>
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
            <Box component="div">
              <Typography variant="h5">
                <Box fontWeight={800} position="sticky" top={30}>
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
            </Box>
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
                <Box fontWeight={800} position="sticky" top={30}>
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
          <Box
            component="div"
            height="45vw"
            maxHeight="570px"
            bgcolor="#fa9191"
          ></Box>
        </Container>
      </Container>
    </Layout>
  );
};

export default TourDetail;
