import { AirlineData } from "@/types/airline";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const airlineApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/airlines" }),
  tagTypes: ["airlines"],
  reducerPath: "airlines",
  endpoints: (builder) => ({
    getAirlines: builder.query<{ data: AirlineData[]; last: number }, number>({
      query: (pageNumber) => `?_page=${pageNumber}&_per_page=5`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.data.push(...newItems.data);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetAirlinesQuery } = airlineApi;
export const airlineApiReducer = airlineApi.reducer;
