import React from 'react';
import FirebaseContext from 'components/Firebase/context';
import SignInEmail from './SignInEmail';

const SignInEmailContainer = () => (
  <FirebaseContext.Consumer>
    {firebase => <SignInEmail firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default SignInEmailContainer;
