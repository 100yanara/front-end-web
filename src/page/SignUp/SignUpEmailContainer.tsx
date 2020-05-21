import React from 'react';
import FirebaseContext from 'components/Firebase/context';
import SignUpEmail from './SignUpEmail';

const SignUpEmailContainer = () => (
  <FirebaseContext.Consumer>
    {firebase => <SignUpEmail firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default SignUpEmailContainer;
