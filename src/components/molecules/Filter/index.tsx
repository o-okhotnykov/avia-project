import { FilterOption } from "@/components/atoms/FilterOption";
import { useDispatch, useSelector } from "react-redux";
import {
  FilterValue,
  changeFilter,
  filterSelector,
} from "@/store/filter-slice";
import { applyFilter } from "@/store/airline-slice";
import "./index.sass";

export const Filter = () => {
  const filterOptions = useSelector(filterSelector);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.target.value));
    dispatch(applyFilter(e.target.value as FilterValue));
  };

  return (
    <aside className="filter">
      <h3 className="filter__title">Кількість пересадок</h3>
      <ul className="filter__list">
        {filterOptions.map(({ title, checked, value }) => (
          <FilterOption
            title={title}
            key={title}
            checked={checked}
            value={value}
            handleChange={handleChange}
          />
        ))}
      </ul>
    </aside>
  );
};
