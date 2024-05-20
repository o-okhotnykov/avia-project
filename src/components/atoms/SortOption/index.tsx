import { SortValue } from "@/store/sort-slice";
import "./index.sass";

interface SortOptionProps {
  title: string;
  checked: boolean;
  value: SortValue;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SortOption = ({
  title,
  checked,
  onClick,
  value,
}: SortOptionProps) => {
  return (
    <li className="sort__option" value={title}>
      <button
        type="button"
        onClick={onClick}
        value={value}
        className={checked ? "sort__btn sort__btn--checked" : "sort__btn"}
      >
        {title}
      </button>
    </li>
  );
};
