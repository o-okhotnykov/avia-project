import { useDispatch, useSelector } from "react-redux";
import { SortOption } from "../../atoms/SortOption";
import { SortValue, changeSort, sortOptionsSelector } from "@/store/sort-slice";
import { applySort } from "@/store/airline-slice";
import "./index.sass";

export const Sort = () => {
  const sortOptions = useSelector(sortOptionsSelector);
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const element = e.currentTarget as HTMLInputElement;
    dispatch(changeSort(element.value as SortValue));
    dispatch(applySort(element.value as SortValue));
  };

  return (
    <ul className="sort">
      {sortOptions.map(({ title, checked, value }) => (
        <SortOption
          title={title}
          key={title}
          checked={checked}
          value={value}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
};
