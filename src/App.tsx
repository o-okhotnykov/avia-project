import { MainLogo } from "@/components/atoms/MainLogo";
import { Sort } from "@/components/molecules/Sort";
import { Filter } from "@/components/molecules/Filter";
import { AirlineList } from "./components/organisms/AirlineList";
import "./App.sass";

function App() {
  return (
    <div className="app">
      <div className="container">
        <MainLogo />
        <Filter />
        <Sort />
        <AirlineList />
      </div>
    </div>
  );
}

export default App;
