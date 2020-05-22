import { all, call, put, takeEvery } from 'redux-saga/effects';
import { fetchSignUpEmailAsync } from 'store/actions/auth';
import { auth } from 'utils/Firebase';
import browserHistory from 'utils/history';

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
    yield browserHistory.push('/');
  } catch (err) {
    yield put(fetchSignUpEmailAsync.failure(err));
  }
}

export default function*() {
  yield all([takeEvery(fetchSignUpEmailAsync.request, SignUpEmailSaga)]);
}
