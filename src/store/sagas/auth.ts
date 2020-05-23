import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchSignUpEmailAsync,
  fetchSignInEmailAsync,
} from 'store/actions/auth';
import { auth } from 'utils/Firebase';
import browserHistory from 'utils/history';
import * as ROUTES from 'constants/routes';

function* SignUpEmailSaga(
  action: ReturnType<typeof fetchSignUpEmailAsync.request>
): Generator {
  const { name, email, password } = action.payload;
  try {
    const response = yield call(
      auth.doCreateuserWithEmailAndPassword,
      email,
      password
    );
    yield put(fetchSignUpEmailAsync.success(response));
    yield browserHistory.push(ROUTES.HOME);
  } catch (err) {
    yield put(fetchSignUpEmailAsync.failure(err));
  }
}
function* SignInEmailSaga(
  action: ReturnType<typeof fetchSignInEmailAsync.request>
): Generator {
  const { email, password } = action.payload;
  try {
    const response = yield call(
      auth.doSignInWithEmailAndPassword,
      email,
      password
    );
    yield put(fetchSignInEmailAsync.success(response));
    yield browserHistory.push(ROUTES.HOME);
  } catch (err) {
    yield put(fetchSignInEmailAsync.failure(err));
  }
}
export default function*() {
  yield all([
    takeEvery(fetchSignUpEmailAsync.request, SignUpEmailSaga),
    takeEvery(fetchSignInEmailAsync.request, SignInEmailSaga),
  ]);
}
