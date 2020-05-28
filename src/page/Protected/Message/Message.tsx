import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
// custom UI
import Layout from 'components/layout';
import { Position } from 'components/Header/type';
const useStyles = makeStyles((theme: Theme) => ({}));

const Message: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Layout footerBorderTop={true} navPosition={Position.static}>
      <Box>This is Message page</Box>
    </Layout>
  );
};

export default Message;
