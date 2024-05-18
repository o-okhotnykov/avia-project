import { AirlineItem } from "@/components/molecules/AirlineItem";
import "./index.sass";

const AirlineData = [
  {
    id: 1,
    airline: "AIRLINE FOR EUROPE",
    origin: "LHR",
    destination: "DXB",
    currency: "USD",
    flights: [
      {
        id: 11,
        origin: "LHR",
        destination: "DXB",
        departure: "10:45",
        arrival: "08:00",
        duration: {
          hours: 34,
          minutes: 15,
        },
        transfers: [{ airport: "HKG" }],
        price: 6650,
      },
      {
        id: 21,
        origin: "DXB",
        destination: "LHR",
        departure: "11:20",
        arrival: "00:50",
        duration: {
          hours: 16,
          minutes: 30,
        },
        transfers: [{ airport: "HKG" }],
        price: 6650,
      },
    ],
  },
  {
    id: 2,
    airline: "AIRLINE FOR EUROPE",
    logo: "@/assets/main-logo.svg",
    origin: "LHR",
    destination: "DXB",
    currency: "USD",
    flights: [
      {
        id: 12,
        origin: "LHR",
        destination: "DXB",
        departure: "10:45",
        arrival: "08:00",
        duration: {
          hours: 17,
          minutes: 15,
        },
        transfers: [{ airport: "HKG" }, { airport: "JNB" }],
        price: 7550,
      },
      {
        id: 22,
        origin: "DXB",
        destination: "LHR",
        departure: "11:20",
        arrival: "00:50",
        duration: {
          hours: 40,
          minutes: 30,
        },
        transfers: [{ airport: "HKG" }, { airport: "JNB" }],
        price: 7550,
      },
    ],
  },
];

export const AirlineList = () => {
  return (
    <main className="airline-list">
      {AirlineData.map((item) => (
        <AirlineItem key={item.id} data={item} />
      ))}
    </main>
  );
};