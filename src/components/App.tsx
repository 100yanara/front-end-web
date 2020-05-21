import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Page
import Home from 'page/Home';
import SignUp, { SignUpEmailContainer } from 'page/SignUp';
import DayTour from 'page/DayTour';
import Calendar from 'page/Calendar';
import OnlineTour from 'page/OnlineTour';
import SignIn, { SignInEmailContainer } from 'page/SignIn';

import * as ROUTES from 'constants/routes';
// Template
import { TourDetail } from 'template';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_UP_EMAIL} component={SignUpEmailContainer} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_IN_EMAIL} component={SignInEmailContainer} />
        <Route path={ROUTES.DAY_TOUR} component={DayTour} />
        <Route path={ROUTES.ONLINE_EXPERIENCE} component={OnlineTour} />
        <Route path={ROUTES.TOUR_DETAIL} component={TourDetail} />
        <Route path={ROUTES.CREATE_TRIP}>
          <div>create trip page</div>
        </Route>
        <Route path={ROUTES.CALENDAR} component={Calendar} />
        <Route>404 Not Found</Route>
      </Switch>
    </>
  );
};

export default App;
