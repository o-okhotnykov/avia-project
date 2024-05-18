import "./index.sass";

interface SortOptionProps {
  title: string;
  checked: boolean;
}

export const SortOption = ({ title, checked }: SortOptionProps) => {
  return (
    <li
      className={
        checked ? "sort__option sort__option--checked" : "sort__option"
      }
    >
      {title}
    </li>
  );
};
