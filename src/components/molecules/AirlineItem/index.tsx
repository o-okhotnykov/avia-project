import { FlightInfo } from "@/components/atoms/FlightInfo";
import { AirlineData } from "@/types/airline";
import A4ELogo from "@/assets/a4e-logo.svg";
import "./index.sass";

interface AirlineItemProps {
  data: AirlineData;
}

export const AirlineItem = ({ data }: AirlineItemProps) => {
  const { flights, currency } = data;
  const amount = flights
    .reduce((acc, flight) => acc + flight.price, 0)
    .toLocaleString();

  return (
    <div className="airline-item">
      <section className="airline-item__info">
        <p className="airline-item__price">
          {amount} {currency}
        </p>
        <img className="airline-item__logo" src={A4ELogo} alt={"A4E Logo"} />
      </section>
      <section className="airline-item__flights">
        {flights.map((flight) => (
          <FlightInfo flight={flight} key={flight.id} />
        ))}
      </section>
    </div>
  );
};
