import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/assets/css/common.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const { persistStore, persistReducer } = require("redux-persist");

import UserReducer from "./store/user/reducers/UserReducer";
import storeReducer from "./store/store/reducers/StoreReducer";
import TransactionReducer from "./store/transaction/reducers/TransactionReducer";
import category from "./store/category/reducers/CategoryReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dealReducer from "./store/deal/reducers/DealReducer";
import RequestReducer from "./store/request/reducers/RequestReducer";
import AppReducer from "./store/app/reducers/AppReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  store: storeReducer,
  transaction: TransactionReducer,
  category: category,
  deal: dealReducer,
  priceRequest: RequestReducer,
  app: AppReducer,
});

let devtools, store;
const isClient = typeof window !== "undefined";
if (isClient) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;

  const storage = require("redux-persist/lib/storage").default;
  const persistConfig = {
    key: "planet-rebag",
    storage,
  };

  store = createStore(
    persistReducer(persistConfig, rootReducer),
    compose(applyMiddleware(thunk), devtools),
  );

  store.__PERSISTOR = persistStore(store);
} else {
  store = (rootReducer, compose(applyMiddleware(thunk)));
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
