import React from "react";
import ReactDOM from "react-dom";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import storage from "redux-persist/lib/storage";
import { Provider } from "react-redux";
import App from "./components/App";
import { createStore } from "redux";
import reducer from "./reducers";
import middleware from "./middleware";
import "./index.css";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["users", "questions"],
};
const pReducer = persistReducer(persistConfig, reducer);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
