import { MainLogo } from "@/components/atoms/MainLogo";
import { Filter } from "@/components/molecules/Filter";
import { Sort } from "@/components/molecules/Sort";
import { AirlineList } from "@/components/organisms/AirlineList";
import './index.sass'

export const Dashboard = () => {
  return (
    <div className="container">
      <MainLogo />
      <Filter />
      <Sort />
      <AirlineList />
    </div>
  );
};


