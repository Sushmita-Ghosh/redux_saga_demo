import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./reducers/userReducer.js";
import createSagaMiddleware from "redux-saga";
// import userSaga from "./sagas/userSaga.js";
import rootSaga from "./sagas/rootSaga.js";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// got the store here -
const store = configureStore({
  // reducer: userReducer,
  reducer: {
    user: userReducer,
  },

  // need to concat with the defaultMiddlewares
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
// sagaMiddleware.run(userSaga);
sagaMiddleware.run(rootSaga);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
