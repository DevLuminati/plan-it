import { configureStore } from "@reduxjs/toolkit";
import ThunkMiddleware from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";

const middleware = [ThunkMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
