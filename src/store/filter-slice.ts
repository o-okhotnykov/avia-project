import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./root-store";

export enum FilterValue {
  all = "all",
  noTransfer = "noTransfer",
  oneTransfer = "oneTransfer",
  twoTransfer = "twoTransfer",
  threeTransfer = "threeTransfer",
}

export interface IFilter {
  title: string;
  checked: boolean;
  value: FilterValue;
}

const initialState = [
  { title: "Всі", checked: true, value: FilterValue.all },
  { title: "Без пересадок", checked: false, value: FilterValue.noTransfer },
  { title: "1 пересадка", checked: false, value: FilterValue.oneTransfer },
  { title: "2 пересадки", checked: false, value: FilterValue.twoTransfer },
  { title: "3 пересадки", checked: false, value: FilterValue.threeTransfer },
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

export const currentFilterOptionSelector = createSelector(
  filterSelector,
  (state: IFilter[]): IFilter => {
    if (!state.find((item) => item.checked)) {
      return state[0];
    } else {
      return state.find((item) => item.checked)!;
    }
  }
);

export const filterReducer = filterSlice.reducer;
