import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
// custom UI
import Layout from 'components/layout';
import { Position } from 'components/Header/type';
const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    alignItems: 'start',
  },
  root: {
    padding: '15px 0',
    minWidth: 0,
    marginRight: '1.5rem',
  },
  indicator: {
    backgroundColor: 'black',
  },
  tabs_box: {
    marginTop: '20px',
  },
}));

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Reservation: React.FunctionComponent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Layout footerBorderTop={true} navPosition={Position.static}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1">
          <Box fontSize="32px" fontWeight={800} pt="50px">
            여행
          </Box>
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          classes={{ indicator: classes.indicator }}
          className={classes.tabs_box}
        >
          <Tab
            label="준비중인 여행"
            disableRipple={true}
            {...a11yProps(0)}
            classes={{ wrapper: classes.wrapper, root: classes.root }}
          />
          <Tab
            label="지난 여행"
            disableRipple={true}
            {...a11yProps(1)}
            classes={{ wrapper: classes.wrapper, root: classes.root }}
          />
          <Tab
            label="취소된 여행"
            disableRipple={true}
            {...a11yProps(2)}
            classes={{ wrapper: classes.wrapper, root: classes.root }}
          />
        </Tabs>
        <Divider />
        {/* <TabPanel value={value} index={0}>
          준비중인 여행
        </TabPanel>
        <TabPanel value={value} index={1}>
          지난 여행
        </TabPanel>
        <TabPanel value={value} index={2}>
          취소된 여행
        </TabPanel> */}
      </Container>
    </Layout>
  );
};

export default Reservation;
