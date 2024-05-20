import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./root-store";
import { FilterValue } from "./filter-slice";
import { airlineFilter } from "@/utils/filters";
import { AirlineData } from "@/types/airline";
import { SortValue } from "./sort-slice";
import { airlineSort } from "@/utils/sort";
import DB from "../../db.json";

interface IAirline {
  airlinesData: AirlineData[];
  perPage: number;
}

const initialState: IAirline = {
  airlinesData: DB.airlines,
  perPage: 5,
};

export const airlineSlice = createSlice({
  name: "airlines",
  initialState,
  reducers: {
    applyFilter: (state, action: PayloadAction<FilterValue>) => {
      state.airlinesData = airlineFilter(DB.airlines, action.payload);
    },
    applySort: (state, action: PayloadAction<SortValue>) => {
      state.airlinesData = airlineSort(state.airlinesData, action.payload);
    },
    loadMoreAirlines: (state) => {
      state.perPage += 5;
    },
  },
});

export const { applyFilter, applySort, loadMoreAirlines } =
  airlineSlice.actions;

export const airlineSelector = (state: RootState): IAirline => state.airlines;

export const airlineDataSelector = createSelector(airlineSelector, (state) =>
  state.airlinesData.slice(0, state.perPage)
);

export const isLoadMoreSelector = createSelector(airlineSelector, (state) => {
  if (state.airlinesData.length < state.perPage) {
    return false;
  }
  return state.perPage >= DB.airlines.length ? false : true;
});

export const airlineReducer = airlineSlice.reducer;
