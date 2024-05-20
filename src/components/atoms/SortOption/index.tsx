import "./index.sass";

interface SortOptionProps {
  title: string;
  checked: boolean;
  onClick: () => void;
}

export const SortOption = ({ title, checked, onClick }: SortOptionProps) => {
  return (
    <li className="sort__option">
      <button
        type="button"
        onClick={onClick}
        className={
          checked ? "sort__btn sort__btn--checked" : "sort__btn"
        }
      >
        {title}
      </button>
    </li>
  );
};
