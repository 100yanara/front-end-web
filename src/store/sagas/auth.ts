import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchSignUpEmailAsync,
  fetchSignInEmailAsync,
  fetchGetCurrentUserAsync,
  fetchUpdateUserAsync,
  fetchSignOutAsync,
  fetchOnAuthStateChangeAsync,
} from 'store/actions/auth';
import { auth, db, firebase } from 'utils/Firebase';
import browserHistory from 'utils/history';
import * as ROUTES from 'constants/routes';

function* SignUpEmailSaga(
  action: ReturnType<typeof fetchSignUpEmailAsync.request>
): Generator {
  const { name, email, password } = action.payload;
  try {
    // const userCredential: any = yield call(
    //   auth.doCreateuserWithEmailAndPassword,
    //   email,
    //   password
    // );
    // yield call(db.doCreateUser, userCredential.user.uid, name, email);
    // yield call(UserUpdateSaga, {
    //   type: 'FETCH_UPDATE_USER_REQUEST',
    //   payload: { userCredential, displayName: name },
    // });
    yield firebase.auth
      .createUserWithEmailAndPassword(email, password)
      .then(dataBeforeEmail => {
        firebase.auth.onAuthStateChanged(function(user) {
          user?.sendEmailVerification();
        });
      })
      .then(dataAfterEmail => {
        firebase.auth.onAuthStateChanged(function(user) {
          if (user?.emailVerified) {
            put(
              fetchSignUpEmailAsync.success(
                'Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox.'
              )
            );
          } else {
            put(
              fetchSignUpEmailAsync.failure(
                "Something went wrong, we couldn't create your account. Please try again."
              )
            );
          }
        });
      })
      .catch(function(err) {
        put(
          fetchSignUpEmailAsync.failure(
            "Something went wrong, we couldn't create your account. Please try again."
          )
        );
      });
    yield browserHistory.push(ROUTES.HOME);
  } catch (err) {
    yield put(
      fetchSignUpEmailAsync.failure(
        "Something went wrong, we couldn't create your account. Please try again."
      )
    );
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
    yield put(fetchSignInEmailAsync.success(null));
    yield browserHistory.push(ROUTES.HOME);
  } catch (err) {
    yield put(fetchSignInEmailAsync.failure(err));
  }
}

function* GetCurrentUserSaga(
  action: ReturnType<typeof fetchGetCurrentUserAsync.request>
): Generator {
  try {
    const response = yield call(auth.doCurrentuser);
    yield put(fetchGetCurrentUserAsync.success(response));
  } catch (err) {
    yield put(fetchGetCurrentUserAsync.failure(err));
  }
}

function* UserUpdateSaga(
  action: ReturnType<typeof fetchUpdateUserAsync.request>
): Generator {
  const { userCredential, displayName } = action.payload;
  try {
    const response = yield call(auth.doUpdateUser, userCredential, displayName);
    yield put(fetchUpdateUserAsync.success(response));
  } catch (err) {
    yield put(fetchUpdateUserAsync.failure(err));
  }
}

function* SignOutSaga(
  action: ReturnType<typeof fetchSignOutAsync.request>
): Generator {
  try {
    yield call(auth.doSignOut);
    yield put(fetchSignOutAsync.success(null));
  } catch (err) {
    yield put(fetchSignOutAsync.failure(err));
  }
}
function* onAuthStateChangedSaga(
  action: ReturnType<typeof fetchOnAuthStateChangeAsync.request>
): Generator {
  try {
    yield call(
      firebase.auth.onAuthStateChanged((userAuth: any) => {
        put(fetchOnAuthStateChangeAsync.success(userAuth));
      })
    );
  } catch (err) {
    yield put(fetchOnAuthStateChangeAsync.failure(err));
  }
}
export default function*() {
  yield all([
    takeEvery(fetchSignUpEmailAsync.request, SignUpEmailSaga),
    takeEvery(fetchSignInEmailAsync.request, SignInEmailSaga),
    takeEvery(fetchGetCurrentUserAsync.request, GetCurrentUserSaga),
    takeEvery(fetchUpdateUserAsync.request, UserUpdateSaga),
    takeEvery(fetchSignOutAsync.request, SignOutSaga),
    takeEvery(fetchOnAuthStateChangeAsync.request, onAuthStateChangedSaga),
  ]);
}
