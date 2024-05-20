import { FilterValue } from "@/store/filter-slice";
import { AirlineData } from "@/types/airline";

const noTransferFilter = (airlines: AirlineData[]): AirlineData[] => {
  return airlines.filter((airline) => {
    return airline.flights.every((flight) => flight.transfers.length === 0);
  });
};
const oneTransferFilter = (airlines: AirlineData[]): AirlineData[] => {
  return airlines.filter((airline) => {
    return airline.flights.every((flight) => flight.transfers.length === 1);
  });
};
const twoTransferFilter = (airlines: AirlineData[]): AirlineData[] => {
  return airlines.filter((airline) => {
    return airline.flights.every((flight) => flight.transfers.length === 2);
  });
};
const threeTransferFilter = (airlines: AirlineData[]): AirlineData[] => {
  return airlines.filter((airline) => {
    return airline.flights.every((flight) => flight.transfers.length === 3);
  });
};

export const airlineFilter = (
  airlines: AirlineData[],
  filterType: FilterValue
) => {
  switch (filterType) {
    case FilterValue.noTransfer:
      return noTransferFilter(airlines);
    case FilterValue.oneTransfer:
      return oneTransferFilter(airlines);
    case FilterValue.twoTransfer:
      return twoTransferFilter(airlines);
    case FilterValue.threeTransfer:
      return threeTransferFilter(airlines);
    default:
      return airlines;
  }
};
