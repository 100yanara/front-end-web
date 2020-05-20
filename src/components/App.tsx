import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Page
import Home from 'page/Home';
import SignUp from 'page/SignUp';
import DayTour from 'page/DayTour';
import Calendar from 'page/Calendar';
import OnlineTour from 'page/OnlineTour';
import SignIn from 'page/SignIn';
// Template
import { TourDetail } from 'template';
const App: React.FunctionComponent = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user/sign_up">
          <SignUp />
        </Route>
        <Route exact path="/user/sign_in">
          <SignIn />
        </Route>
        <Route path="/day_tour">
          <DayTour />
        </Route>
        <Route path="/online_experience">
          <OnlineTour />
        </Route>
        <Route path="/detail/:id">
          <TourDetail />
        </Route>
        <Route path="/create_trip">
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
