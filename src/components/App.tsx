import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App: React.FunctionComponent = () => (
  <>
    <Switch>
      <Route exact path="/">
        <h1>home page</h1>
      </Route>
      <Route>
        <h1>404 Not Found</h1>
      </Route>
    </Switch>
  </>
);

export default App;
