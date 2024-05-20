import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./root-store";

export enum SortValue {
  cheap = "cheap",
  fast = "fast",
  optimal = "optimal",
}

interface ISort {
  title: string;
  checked: boolean;
  value: SortValue;
}

const initialState: ISort[] = [
  { title: "Найдешевший", checked: true, value: SortValue.cheap },
  { title: "Найшвидший", checked: false, value: SortValue.fast },
  { title: "Оптимальний", checked: false, value: SortValue.optimal },
];

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    changeSort(state: ISort[], action: PayloadAction<SortValue>) {
      state = state.map((item) => {
        item.checked = false;
        if (item.value === action.payload) {
          item.checked = true;
        }
        return item;
      });
    },
  },
});

export const { changeSort } = sortSlice.actions;

export const sortSelector = (state: RootState): ISort[] => state.sort;

export const sortOptionsSelector = createSelector(
  sortSelector,
  (state) => state
);

export const currentSortOptionSelector = createSelector(
  sortSelector,
  (state: ISort[]): ISort => {
    if (!state.find((item) => item.checked)) {
      return state[0];
    } else {
      return state.find((item) => item.checked)!;
    }
  }
);

export const sortReducer = sortSlice.reducer;
