import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Page
import Home from 'page/Home';
import SignUp from 'page/SignUp';
import DayTour from 'page/DayTour';
import Calendar from 'page/Calendar';
import OnlineTour from 'page/OnlineTour';

// Template
import { TourDetail } from 'template';
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
        <Route path="/onlineexperience">
          <OnlineTour />
        </Route>
        <Route path="/detail/:id">
          <TourDetail />
        </Route>
        <Route path="/createtrip">
          <div>create trip page</div>
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route>404 Not Found</Route>
      </Switch>
    </>
  );
};

export default App;
