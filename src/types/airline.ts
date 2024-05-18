export type AirlineData = {
  id: number;
  airline: string;
  origin: string;
  destination: string;
  currency: string;
  flights: Flight[];
};

export type Flight = {
  id: number;
  origin: string;
  destination: string;
  departure: string;
  arrival: string;
  duration: Duration;
  transfers: Transfer[];
  price: number;
};

type Transfer = {
  airport: string;
};

type Duration = {
  hours: number;
  minutes: number;
};
