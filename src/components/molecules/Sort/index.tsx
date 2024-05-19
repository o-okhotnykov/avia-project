import { useDispatch, useSelector } from "react-redux";
import { SortOption } from "../../atoms/SortOption";
import { changeSort, sortOptionsSelector } from "@/store/sort-slice";
import "./index.sass";

export const Sort = () => {
  const sortOptions = useSelector(sortOptionsSelector);
  const dispatch = useDispatch();

  const handleClick = (index: number) => {
    dispatch(changeSort(index));
  };
  
  return (
    <ul className="sort">
      {sortOptions.map(({ title, checked }, index) => (
        <SortOption
          title={title}
          key={title}
          checked={checked}
          onClick={() => handleClick(index)}
        />
      ))}
    </ul>
  );
};
