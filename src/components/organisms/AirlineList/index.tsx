import { useMemo, useState } from "react";
import { useGetAirlinesQuery } from "@/store/airline-api";
import { AirlineItem } from "@/components/molecules/AirlineItem";
import { LoadMoreButton } from "@/components/atoms/LoadMoreButton";
import "./index.sass";
import { useSelector } from "react-redux";
import { currentSortOptionSelector } from "@/store/sort-slice";
import { AirlineData } from "@/types/airline";
import { airlineSort } from "@/utils/sort";

export const AirlineList = () => {
  const currentSort = useSelector(currentSortOptionSelector);

  const [page, setPage] = useState(1);
  const { data } = useGetAirlinesQuery(page);
  const lastPage = data?.last ?? 1;

  const sortedAirlines: AirlineData[] = useMemo(() => {
    const airlineData = data?.data ?? [];
    return airlineSort(airlineData, currentSort.value);
  }, [data, currentSort]);

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <main className="airline-list">
      {sortedAirlines?.map((item) => (
        <AirlineItem key={item.id} data={item} />
      ))}
      {lastPage !== page && <LoadMoreButton handleClick={handleClick} />}
    </main>
  );
};
