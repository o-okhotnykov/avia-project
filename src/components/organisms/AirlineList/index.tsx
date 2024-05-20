import { useDispatch, useSelector } from "react-redux";
import { AirlineItem } from "@/components/molecules/AirlineItem";
import { LoadMoreButton } from "@/components/atoms/LoadMoreButton";
import {
  airlineDataSelector,
  applySort,
  isLoadMoreSelector,
  loadMoreAirlines,
} from "@/store/airline-slice";
import "./index.sass";
import { useEffect } from "react";
import { currentSortOptionSelector } from "@/store/sort-slice";

export const AirlineList = () => {
  const airlineData = useSelector(airlineDataSelector);
  const currentSortOption = useSelector(currentSortOptionSelector);
  const isLoadMore = useSelector(isLoadMoreSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(applySort(currentSortOption.value));
  }, []);

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
