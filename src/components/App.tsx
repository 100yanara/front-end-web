import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'page/Home';
import SignUp from 'page/SignUp';
import DayTour from 'page/DayTour';
import Calendar from 'page/Calendar';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user/signup">
          <SignUp />
        </Route>
        <Route exact path="/user/signin">
          <div>sign in page</div>
        </Route>
        <Route path="/daytour">
          <DayTour />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/createtrip">
          <div>create trip page</div>
        </Route>
        <Route>404 Not Found</Route>
      </Switch>
    </>
  );
};

export default App;
