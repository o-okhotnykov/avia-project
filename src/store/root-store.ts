import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { sortReducer } from "./sort-slice";
import { filterReducer } from "./filter-slice";
import { airlineApi } from "./airline-api";

const reducer = combineReducers({
  sort: sortReducer,
  filter: filterReducer,
  airlines: airlineApi.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(airlineApi.middleware),
});

export const getStore = store.getState();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
