import { useState } from "react";
import { useGetAirlinesQuery } from "@/store/airline-api";
import { AirlineItem } from "@/components/molecules/AirlineItem";
import { LoadMoreButton } from "@/components/atoms/LoadMoreButton";
import "./index.sass";

export const AirlineList = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetAirlinesQuery(page);
  const airlineData = data?.data ?? [];
  const lastPage = data?.last ?? 1;

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <main className="airline-list">
      {airlineData?.map((item) => (
        <AirlineItem key={item.id} data={item} />
      ))}
      {lastPage !== page && <LoadMoreButton handleClick={handleClick} />}
    </main>
  );
};
