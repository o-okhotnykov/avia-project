import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./root-store";

export enum filterValue {
  all = "all",
  noTransfer = "noTransfer",
  oneTransfer = "oneTransfer",
  twoTransfer = "twoTransfer",
  threeTransfer = "threeTransfer",
}

export interface IFilter {
  title: string;
  checked: boolean;
  value: filterValue;
}

const initialState = [
  { title: "Всі", checked: true, value: filterValue.all },
  { title: "Без пересадок", checked: false, value: filterValue.noTransfer },
  { title: "1 пересадка", checked: false, value: filterValue.oneTransfer },
  { title: "2 пересадки", checked: false, value: filterValue.twoTransfer },
  { title: "3 пересадки", checked: false, value: filterValue.threeTransfer },
];

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state: IFilter[], action: PayloadAction<string>) {
      state = state.map((item) => {
        item.checked = false;
        if (item.value === action.payload) {
          item.checked = !item.checked;
        }
        return item;
      });
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filterSelector = (state: RootState): IFilter[] => state.filter;

export const filterOptionsSelector = createSelector(
  filterSelector,
  (state) => state
);


export const filterReducer = filterSlice.reducer;
