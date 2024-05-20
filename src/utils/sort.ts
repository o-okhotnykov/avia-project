import { SortValue } from "@/store/sort-slice";
import { AirlineData } from "@/types/airline";

const cheapestSort = (airlines: AirlineData[]) => {
  return airlines.slice().sort((a, b) => a.totalSum - b.totalSum);
};

const fastestSort = (airlines: AirlineData[]) => {
  return airlines.slice().sort((a, b) => a.totalTime - b.totalTime);
};

const optimalSort = (airlines: AirlineData[]) => {
  return airlines.slice().sort((a, b) => {
    const timeDiff = a.totalTime - b.totalTime;
    if (timeDiff !== 0) {
      return timeDiff;
    }

    const transferDiff =
      a.flights.reduce((acc, flight) => acc + flight.transfers.length, 0) -
      b.flights.reduce((acc, flight) => acc + flight.transfers.length, 0);
    if (transferDiff !== 0) {
      return transferDiff;
    }

    return a.totalSum - b.totalSum;
  });
};

export const airlineSort = (
  airlines: AirlineData[],
  sortType: SortValue
): AirlineData[] => {
  switch (sortType) {
    case SortValue.cheap:
      return cheapestSort(airlines);
    case SortValue.fast:
      return fastestSort(airlines);
    case SortValue.optimal:
      return optimalSort(airlines);
  }
};
