import { Flight } from "@/types/airline";
import "./index.sass";

interface FlightProps {
  flight: Flight;
}

export const FlightInfo = ({ flight }: FlightProps) => {
  const { origin, destination, duration, transfers, departure, arrival } =
    flight;

  const transfersList = transfers.map(({ airport }) => airport).join(', ');

  return (
    <div className="flight-info">
      <div className="flight-info__block">
        <p className="flight-info__title">
          {origin} - {destination}
        </p>
        <p className="flight-info__subtitle">
          {departure} - {arrival}
        </p>
      </div>
      <div className="flight-info__block">
        <p className="flight-info__title">В дорозі</p>
        <p className="flight-info__subtitle">
          {duration.hours} г {duration.minutes} хв
        </p>
      </div>
      <div className="flight-info__block">
        <p className="flight-info__title">{transfers.length} пересадка</p>
        <p className="flight-info__subtitle">{transfersList}</p>
      </div>
    </div>
  );
};
