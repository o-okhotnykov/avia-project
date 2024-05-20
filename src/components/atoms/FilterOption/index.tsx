import { FilterValue } from "@/store/filter-slice";
import "./index.sass";

interface FilterOption {
  title: string;
  checked: boolean;
  value: FilterValue;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterOption = ({
  title,
  checked,
  value,
  handleChange,
}: FilterOption) => {
  return (
    <li className="filter__option">
      <input
        name={title}
        type="radio"
        checked={checked}
        value={value}
        className={
          checked
            ? "filter__checkbox filter__checkbox_checked"
            : "filter__checkbox"
        }
        onChange={handleChange}
      />
      <label className="filter__label" htmlFor={title}>
        {title}
      </label>
    </li>
  );
};
