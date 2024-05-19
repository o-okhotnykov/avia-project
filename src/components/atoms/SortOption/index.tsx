import "./index.sass";

interface SortOptionProps {
  title: string;
  checked: boolean;
  onClick: () => void;
}

export const SortOption = ({ title, checked, onClick }: SortOptionProps) => {
  return (
    <li
      className={
        checked ? "sort__option sort__option--checked" : "sort__option"
      }
      onClick={onClick}
    >
      {title}
    </li>
  );
};
