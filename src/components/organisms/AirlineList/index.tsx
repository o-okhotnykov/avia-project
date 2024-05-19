import { AirlineItem } from "@/components/molecules/AirlineItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { airlineDataSelector, getAirlinesAsync } from "@/store/airlines-slice";
import { AppDispatch } from "@/store/root-store";
import "./index.sass";

export const AirlineList = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAirlinesAsync({ page: 1, limit: 10 }));
  }, []);

  const airlineData = useSelector(airlineDataSelector);

  return (
    <main className="airline-list">
      {airlineData.map((item) => (
        <AirlineItem key={item.id} data={item} />
      ))}
    </main>
  );
};
