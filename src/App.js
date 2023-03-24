import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container} from "react-bootstrap";
import WeatherForecastComponent from "./Components/WeatherForecastLayout/WeatherForecastComponent";
import TitleComponent from "./Components/TitleComponent";
function App() {
  return (
    <Container className="contStyle">
      <p className="createdByTxt">Created by Jovann Contreras</p>
      <TitleComponent />
      <WeatherForecastComponent />
    </Container>
  );
}

export default App;
