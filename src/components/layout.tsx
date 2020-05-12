import React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { Position } from 'components/Header/type';

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    minHeight: '100vh',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
  },
}));

interface LayoutProps {
  children: React.ReactNode;
  headerDefaultElevation?: number;
  footerBorderTop: boolean;
  navPosition: Position;
  navBackground?: string;
}

const Layout: React.SFC<LayoutProps> = ({
  children,
  headerDefaultElevation,
  footerBorderTop,
  navPosition,
  navBackground,
}) => {
  const classes = useStyles();
  return (
    <Container component="div" disableGutters={true} maxWidth={false}>
      <Box component="div" display="flex" className={classes.app}>
        <Header
          headerDefaultElevation={headerDefaultElevation}
          navPosition={navPosition}
          backgroundColor={navBackground}
        />
        <Box component="main" className={classes.content}>
          {children}
        </Box>
        <Footer footerBorderTop={footerBorderTop} />
      </Box>
    </Container>
  );
};

export default Layout;
