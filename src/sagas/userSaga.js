import { call, put, takeEvery, takeLatest, delay } from "redux-saga/effects";

// fetching from API
const getUserName = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await res.json(); // parse the res in json - returns a promise
  //   return result[0].name;
  return result[Math.floor(Math.random() * 11)].name;
};

// worker saga
function* fetchUser() {
  try {
    // const user = yield call(Api.fetchUser, action.payload.userId)
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    // const userName = yield getUserName(); // till the func doesnt give response - it will be paused.
    const userName = yield call(getUserName);
    yield put({ type: "UPDATE_NAME_SUCCEEDED", payload: userName });
  } catch (e) {
    console.log(e);
  }
}

function* changeAge() {
  yield delay(2000);
  yield put({ type: "UPDATE_AGE_SUCCEEDED", payload: 30 });
}

// watcher saga
function* userSaga() {
  yield takeLatest("UPDATE_NAME", fetchUser);
  yield takeEvery("UPDATE_AGE", changeAge);
}

export default userSaga;
