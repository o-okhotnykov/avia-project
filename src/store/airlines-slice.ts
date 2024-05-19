import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { RootState } from "./root-store";
import { AirlineData, GetProjectsParams } from "@/types/airline";
import { httpService } from "@/services/HttpService";
import { LIMIT, PAGE } from "@/constants/api";

interface IAirlines {
  airlines: AirlineData[];
}

const initialState: IAirlines = {
  airlines: [],
};

export const getAirlinesAsync = createAsyncThunk(
  "app/getAirlinesAsync",
  (
    { page = PAGE, limit = LIMIT }: GetProjectsParams = {
      page: PAGE,
      limit: LIMIT,
    }
  ) => {
    const params = { _page: page, _limit: limit };
    return httpService.get<AirlineData[]>("airlines", { params });
  }
);

export const airlineSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAirlinesAsync.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.airlines = data;
    });
  },
});

export const airlinesSelector = (state: RootState): IAirlines => state.airline;

export const airlineDataSelector = createSelector(
  airlinesSelector,
  (state) => state.airlines
);

export const airlineReducer = airlineSlice.reducer;
