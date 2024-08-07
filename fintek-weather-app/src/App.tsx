import "./App.css";
import HeroContainer from "./components/containers/HeroContainer";
import CardContainer from "./components/containers/CardContainer";
import { WeatherProvider } from "./WeatherContext";
const App: React.FC = () => {
  return (
    <WeatherProvider>
      <section id="appContainer" aria-labelledby="appTitle">
        <HeroContainer aria-labelledby="heroTitle" />
        <CardContainer aria-labelledby="cardTitle" />
      </section>
    </WeatherProvider>
  );
};

export default App;
