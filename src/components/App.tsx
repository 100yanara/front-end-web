import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Header from 'components/Header';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route>
          <Typography variant="h1">404 Not Found</Typography>
        </Route>
      </Switch>
    </>
  );
};

export default App;
