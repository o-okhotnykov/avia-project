import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useGetAirlinesQuery } from "@/store/airline-api";
import { AirlineItem } from "@/components/molecules/AirlineItem";
import { LoadMoreButton } from "@/components/atoms/LoadMoreButton";
import { currentSortOptionSelector } from "@/store/sort-slice";
import { currentFilterOptionSelector } from "@/store/filter-slice";
import { AirlineData } from "@/types/airline";
import { airlineSort } from "@/utils/sort";
import { airlineFilter } from "@/utils/filters";
import "./index.sass";

export const AirlineList = () => {
  const currentSort = useSelector(currentSortOptionSelector);
  const currentFilter = useSelector(currentFilterOptionSelector);

  const [page, setPage] = useState(1);
  const { data } = useGetAirlinesQuery(page);
  const lastPage = data?.last ?? 1;

  const sortedAirlines: AirlineData[] = useMemo(() => {
    const airlineData = data?.data ?? [];
    const filteredAirlines = airlineFilter(airlineData, currentFilter.value);
    const sortedAirlines = airlineSort(filteredAirlines, currentSort.value);
    if (sortedAirlines.length === 0) {
      setPage((prev) => prev + 1);
    }

    return sortedAirlines;
  }, [data, currentSort, currentFilter]);

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
