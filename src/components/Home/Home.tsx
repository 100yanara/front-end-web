import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SliderSlick from 'react-slick';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Footer from 'components/Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    home: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      // border: '1px solid gray',
    },
    home_caroucel: {
      // border: '1px solid gray',
      // padding: '10px',
      [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.up('lg')]: {
        width: '70%',
      },
      marginTop: '50px',
    },
    caroucelPaper: {
      height: '250px',
      background: theme.palette.grey[200],
    },
    home_attractionContainer: {
      [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.up('lg')]: {
        width: '70%',
      },
      // border: '1px solid gray',
      margin: '60px 0 60px 0',
    },
    home_attractionContainer_title: {
      marginBottom: '20px',
      // border: '1px solid gray',
    },
    home_attractionContainer_attraction: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '-5px',
      // border: '1px solid gray',
      marginBottom: '30px',
    },
    home_attractionContainer_attraction_item: {
      flex: '1 0 21%',
      background: theme.palette.grey[200],
      height: '200px',
      margin: '5px',
      // border: '1px solid gray',
    },
    home_attractionContainer_buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    home_guideContainer: {
      [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.up('lg')]: {
        width: '70%',
      },
      marginBottom: '30px',
    },
    home_guideContainer_title: {
      marginBottom: '20px',
    },
    home_guideContainer_slider: {
      margin: '-20px',
      // border: '1px solid gray',
      height: '300px',
    },
    home_guideContainer_slider_item: {
      background: theme.palette.grey[200],
      flex: '1 0 21%',
      margin: '20px',
      height: '250px',
      // width: '250px',
      // border: '1px solid gray',
    },
    home_tipsContainer: {
      [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.up('lg')]: {
        width: '70%',
      },
      marginBottom: '300px',
    },
    home_tipsContainer_box: {
      display: 'flex',
      height: '220px',
      width: '100%',
      border: `1px solid ${theme.palette.grey[300]}`,
      padding: '20px 35px',
      flexWrap: 'wrap',
      borderRadius: '5px',
      marginTop: '20px',
    },
    home_tipsContainer_box_chanel: {
      // border: '1px solid gray',
      margin: '25px',
      flex: '1 0 25%',
      display: 'flex',
      flexDirection: 'column',
    },
    home_tipsContainer_box_chanel_title: {
      fontWeight: 'bold',
      marginBottom: '10px',
    },
  })
);

const Home: React.FunctionComponent = () => {
  const classes = useStyles();
  const EventSliderSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Box component="div" className={classes.home}>
        <SliderSlick {...EventSliderSetting} className={classes.home_caroucel}>
          {Array.from(Array(4)).map((arr, i) => (
            <Paper elevation={0} className={classes.caroucelPaper}>
              {i + 1}
            </Paper>
          ))}
        </SliderSlick>

        <Box component="div" className={classes.home_attractionContainer}>
          <Typography
            variant="h5"
            component="h5"
            align="center"
            className={classes.home_attractionContainer_title}
          >
            Top Attractions
          </Typography>
          <Box
            component="div"
            className={classes.home_attractionContainer_attraction}
          >
            {Array.from(Array(8)).map((arr, i) => (
              <Paper
                elevation={0}
                className={classes.home_attractionContainer_attraction_item}
              >
                {i + 1}
              </Paper>
            ))}
          </Box>
          <Box
            component="div"
            className={classes.home_attractionContainer_buttonContainer}
          >
            <Button variant="contained" disableElevation>
              <Typography variant="button">Show more attractions</Typography>
            </Button>
          </Box>
        </Box>
        <Box component="div" className={classes.home_guideContainer}>
          <Typography
            variant="h5"
            component="h5"
            align="center"
            className={classes.home_guideContainer_title}
          >
            Guide
          </Typography>
          <CarouselProvider
            naturalSlideWidth={250}
            naturalSlideHeight={250}
            totalSlides={8}
            infinite={true}
            visibleSlides={3}
          >
            <Slider className={classes.home_guideContainer_slider}>
              {Array.from(Array(8)).map((arr, i) => (
                <Slide index={i}>
                  <Paper
                    elevation={0}
                    className={classes.home_guideContainer_slider_item}
                  >
                    {i + 1}
                  </Paper>
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        </Box>
        <Box component="div" className={classes.home_tipsContainer}>
          <Typography variant="h6" align="left">
            Want more travel tips?
          </Typography>
          <Box component="div" className={classes.home_tipsContainer_box}>
            <Box
              component="div"
              className={classes.home_tipsContainer_box_chanel}
            >
              <Typography
                variant="subtitle2"
                color="primary"
                className={classes.home_tipsContainer_box_chanel_title}
              >
                100yanara FaceBook Page >
              </Typography>
              <Typography color="textSecondary">
                Check out 100yanara Facebook page for useful information and
                tips for each travel destination
              </Typography>
            </Box>
            <Box
              component="div"
              className={classes.home_tipsContainer_box_chanel}
            >
              {' '}
              <Typography
                variant="subtitle2"
                color="primary"
                className={classes.home_tipsContainer_box_chanel_title}
              >
                100yanara Instagram >
              </Typography>
              <Typography color="textSecondary">
                Enjoy beautiful pictures of different cities around the world,
                shared by our guides and travelers on our Instagram page.
              </Typography>
            </Box>
            <Box
              component="div"
              className={classes.home_tipsContainer_box_chanel}
            >
              {' '}
              <Typography
                variant="subtitle2"
                color="primary"
                className={classes.home_tipsContainer_box_chanel_title}
              >
                100yanara Naver Blog >
              </Typography>
              <Typography color="textSecondary">
                View real-time travel information, reviews, and the list of
                recommended guides on MyRealTrip’s blog.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
