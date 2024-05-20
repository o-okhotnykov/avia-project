import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AirlineItem } from "@/components/molecules/AirlineItem";
import { LoadMoreButton } from "@/components/atoms/LoadMoreButton";
import {
  airlineDataSelector,
  applySort,
  isLoadMoreSelector,
  loadMoreAirlines,
} from "@/store/airline-slice";
import { currentSortOptionSelector } from "@/store/sort-slice";
import "./index.sass";
import { currentFilterOptionSelector } from "@/store/filter-slice";

export const AirlineList = () => {
  const airlineData = useSelector(airlineDataSelector);
  const currentSortOption = useSelector(currentSortOptionSelector);
  const currentFilterOption = useSelector(currentFilterOptionSelector);
  const isLoadMore = useSelector(isLoadMoreSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(applySort(currentSortOption.value));
  }, [currentFilterOption]);

  const handleClick = () => {
    dispatch(loadMoreAirlines());
  };

  return (
    <main className="airline-list">
      {airlineData.map((item) => (
        <AirlineItem key={item.id} data={item} />
      ))}
      {isLoadMore && <LoadMoreButton handleClick={handleClick} />}
    </main>
  );
};
