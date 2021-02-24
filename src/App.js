
import './App.sass';
import {HeaderComponent} from "./components/Header/HeaderComponent";
import {FirstScreenComponent} from "./components/FirsScreen/FirstScreenComponent";
import AboutMeComponent from "./components/AboutMe/AboutMeComponent";

function App() {
  return (
      <div className="App">
        <HeaderComponent />
        <FirstScreenComponent />
        <AboutMeComponent />
    </div>
  );
}

export default App;
