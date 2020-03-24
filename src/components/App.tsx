import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Header from 'components/Header';
import Home from 'page/Home';
import Footer from 'components/Footer';
import SignUp from 'page/SignUp';
import DayTour from 'page/DayTour';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/user/signup">
          <Header background="white" />
          <SignUp />
          <Footer />
        </Route>
        <Route exact path="/user/signin">
          <Header />
          <div>sign in page</div>
          <Footer />
        </Route>
        <Route path="/daytour">
          <Header background="white" />
          <DayTour />
          <Footer />
        </Route>
        <Route path="/createtrip">
          <Header />
          <div>create trip page</div>
          <Footer />
        </Route>
        <Route>
          <Typography variant="h1">404 Not Found</Typography>
        </Route>
      </Switch>
    </>
  );
};

export default App;
