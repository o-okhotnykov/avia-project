import { SortOption } from "../../atoms/SortOption";
import "./index.sass";

const SortOptions = [
  { title: "Найдешевший", checked: true },
  { title: "Найшвидший", checked: false },
  { title: "Оптимальний", checked: false },
];

export const Sort = () => {
  return (
    <ul className="sort">
      {SortOptions.map(({ title, checked }) => (
        <SortOption title={title} key={title} checked={checked} />
      ))}
    </ul>
  );
};
