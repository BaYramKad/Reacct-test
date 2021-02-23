
import './App.css';
import {HeaderComponent} from "./components/HeaderComponent";
import {FirstScreenComponent} from "./components/FirstScreenComponent";
import AboutMeComponent from "./components/AboutMeComponent";

function App() {
  return (<div className="App">
        <HeaderComponent />
        <FirstScreenComponent />
        <AboutMeComponent />
    </div>
  );
}

export default App;
