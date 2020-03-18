import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Header from 'components/Header';
import Home from 'components/Home';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route>
          <Typography variant="h1">404 Not Found</Typography>
        </Route>
      </Switch>
    </>
  );
};

export default App;
