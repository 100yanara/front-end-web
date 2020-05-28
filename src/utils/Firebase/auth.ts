import { auth } from './firebase';

// Sign Up
export const doCreateuserWithEmailAndPassword = (
  email: string,
  password: string
) => auth.createUserWithEmailAndPassword(email, password);

//Sign In
export const doSignInWithEmailAndPassword = (email: string, password: string) =>
  auth.signInWithEmailAndPassword(email, password);

//Sign Out
export const doSignOut = () => auth.signOut();

// Password Reset
export const doPasswordReset = (email: string) =>
  auth.sendPasswordResetEmail(email);

//Password Change
export const doPasswordUpdate = async (password: string) => {
  if (auth.currentUser) {
    await auth.currentUser.updatePassword(password);
  }
  throw Error('No auth.currentUser!');
};

// GETcurrentUser
export const doCurrentuser = () => auth.currentUser;

// Update Profile
export const doUpdateUser = (
  userCredential: firebase.auth.UserCredential,
  displayName: string
) =>
  userCredential.user?.updateProfile({
    displayName,
  });
