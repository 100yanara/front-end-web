import { useSelector, useDispatch } from 'react-redux';
import { rootState } from 'store/reducers';
import {
  fetchSignUpEmailAsync,
  fetchSignInEmailAsync,
} from 'store/actions/auth';
import { useCallback } from 'react';

export default function useAuth() {
  const user = useSelector((state: rootState) => state.auth.user);
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
  return {
    user,
    onSignUpEmail,
    onSignInEmail,
  };
}
