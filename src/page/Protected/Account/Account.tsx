import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// custom UI
import Layout from 'components/layout';
import { Position } from 'components/Header/type';
const useStyles = makeStyles((theme: Theme) => ({}));

const Account: React.FunctionComponent = () => {
  const classes = useStyles();
  // const { t, i18n } = useTranslation();
  return (
    <Layout footerBorderTop={true} navPosition={Position.static}>
      <Box>This is Account page</Box>
    </Layout>
  );
};

export default Account;
