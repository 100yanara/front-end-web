import { useSelector, useDispatch } from 'react-redux';
import { rootState } from 'store/reducers';
import {
  fetchSignUpEmailAsync,
  fetchSignInEmailAsync,
  fetchGetCurrentUserAsync,
  fetchUpdateUserAsync,
  fetchSignOutAsync,
  fetchOnAuthStateChangeAsync,
} from 'store/actions/auth';
import { useCallback } from 'react';

export default function useAuth() {
  const user = useSelector((state: rootState) => state.auth.authUser);
  const dispatch = useDispatch();

  const onSignUpEmail = useCallback(
    (name: string, email: string, password: string) =>
      dispatch(fetchSignUpEmailAsync.request({ name, email, password })),
    [dispatch]
  );
  const onSignInEmail = useCallback(
    (email: string, password: string) =>
      dispatch(fetchSignInEmailAsync.request({ email, password })),
    [dispatch]
  );
  const onGetCurrentUser = useCallback(
    () => dispatch(fetchGetCurrentUserAsync.request(null)),
    [dispatch]
  );
  const onUserUpdate = useCallback(
    (userCredential: firebase.auth.UserCredential, displayName: string) =>
      dispatch(fetchUpdateUserAsync.request({ userCredential, displayName })),
    [dispatch]
  );
  const onSignOut = useCallback(
    () => dispatch(fetchSignOutAsync.request(null)),
    [dispatch]
  );
  const onAuthStateChange = useCallback(
    () => dispatch(fetchOnAuthStateChangeAsync.request(null)),
    [dispatch]
  );
  return {
    user,
    onSignUpEmail,
    onSignInEmail,
    onGetCurrentUser,
    onUserUpdate,
    onSignOut,
    onAuthStateChange,
  };
}
