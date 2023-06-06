import { call, put, takeLatest } from "redux-saga/effects";

// slice
import { updateJoke } from "../reducers/userReducer";

// fetching from API
const fetchJoke = async () => {
  const res = await fetch(
    "https://api.chucknorris.io/jokes/random?category=music"
  );
  const result = await res.json(); // parse the res in json - returns a promise
  return result.value;
};

// worker saga
function* getJoke() {
  const joke = yield call(fetchJoke);
  //   yield put({
  //     type: "JOKE_SUCCESS",
  //     payload: joke,
  //   });

  //   slice
  yield put(updateJoke(joke));
}

// watcher saga
function* jokeSaga() {
  yield takeLatest("GET_JOKE", getJoke);
}

export default jokeSaga;
