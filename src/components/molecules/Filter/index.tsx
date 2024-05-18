import { FilterOption } from "@/components/atoms/FilterOption";
import "./index.sass";

const FilterOptions = [
  { title: "Всі", checked: true },
  { title: "Без пересадок", checked: true },
  { title: "1 пересадка", checked: false },
  { title: "2 пересадки", checked: false },
  { title: "3 пересадки", checked: false },
];

export const Filter = () => {
  return (
    <aside className="filter">
      <h3 className="filter__title">Кількість пересадок</h3>
      <ul className="filter__list">
        {FilterOptions.map(({ title, checked }) => (
          <FilterOption title={title} key={title} checked={checked} />
        ))}
      </ul>
    </aside>
  );
};
