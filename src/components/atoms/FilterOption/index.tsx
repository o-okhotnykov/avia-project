import './index.sass'

interface FilterOption {
  title: string;
  checked: boolean;
}

export const FilterOption = ({ title, checked }: FilterOption) => {
  return (
    <li className="filter__option">
      <input
        name={title}
        type="checkbox"
        checked={checked}
        className={
          checked
            ? "filter__checkbox filter__checkbox_checked"
            : "filter__checkbox"
        }
      />
      <label className="filter__label" htmlFor={title}>{title}</label>
    </li>
  );
};
