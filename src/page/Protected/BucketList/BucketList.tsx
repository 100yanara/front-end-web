import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// custom UI
import Layout from 'components/layout';
import EmptyList from './Empty';
import { Position } from 'components/Header/type';

const useStyles = makeStyles((theme: Theme) => ({}));

const BucketList: React.FunctionComponent = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    list: [],
  });
  return (
    <Layout footerBorderTop={true} navPosition={Position.static}>
      {state.list.length ? <Box component="div">리스트 1</Box> : <EmptyList />}
    </Layout>
  );
};

export default BucketList;
