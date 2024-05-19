import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { sortReducer } from "./sort-slice";
import { filterReducer } from "./filter-slice";
import { airlineReducer } from "./airlines-slice";

const reducer = combineReducers({
  sort: sortReducer,
  filter: filterReducer,
  airline: airlineReducer,
});

export const store = configureStore({
  reducer,
});

export const getStore = store.getState();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
