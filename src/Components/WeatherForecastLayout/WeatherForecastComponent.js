import {  Row, Col, Offcanvas, Button} from "react-bootstrap";
import "./weatherStyle.css";
import { useState } from "react";
import { WeatherAppData, ForecastAppData } from "../../Data/DataService";
import Sunny from "../../Icons/sun-thin.svg";
import Rain from "../../Icons/rainy-sharp.svg";
import Cloudy from "../../Icons/sun-cloudy-fill.svg";
import Snow from "../../Icons/cloud-snow-fill.svg";
import Mist from "../../Icons/sun-foggy-fill.svg";
import ThunderStorm from "../../Icons/day-storm-showers.svg";
import Smoke from "../../Icons/weather-mist.svg";
import Tornado from "../../Icons/tornado-warning.svg";
import Hail from "../../Icons/cloud-hail.svg";
export default function WeatherForecastComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //     Variable that recieves the value from setInput   setting the value or info
  const [inputCity, setInputCity] = useState("");
  //  const [testData, setTestData] = useState([])
  const [cityName, setCityName] = useState("");
  const [temp, setTemp] = useState("");
  const [monDay, setMonDay] = useState("");
  const [tuesDay, setTuesDay] = useState("");
  const [wedDay, setWedDay] = useState("");
  const [thursDay, setThursDay] = useState("");
  const [friDay, setFriDay] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");

  const [iconTest, setIconTest] = useState("");
  const [iconMon, setIconMon] = useState("");
  const [iconTues, setIconTues] = useState("");
  const [iconWed, setIconWed] = useState("");
  const [iconThurs, setIconThurs] = useState("");
  const [iconFri, setIconFri] = useState("");

  // WeatherAppData()
  const GettingDataFunction = async () => {
    let weatherVariable = await WeatherAppData(inputCity);
    // weatherVariable{"stockton"};
    let foreCastVar = await ForecastAppData(inputCity);

    setCityName(weatherVariable.name);
    setTemp(weatherVariable.main.temp + "°F");
    setFeelsLike(weatherVariable.main.feels_like);
    setHumidity(weatherVariable.main.humidity);
    setWindSpeed(weatherVariable.wind.speed);

    setMonDay(foreCastVar.list[0].weather[0].description);
    setTuesDay(foreCastVar.list[2].weather[0].description);
    setWedDay(foreCastVar.list[8].weather[0].description);
    setThursDay(foreCastVar.list[18].weather[0].description);
    setFriDay(foreCastVar.list[24].weather[0].description);

    // setIconTest(foreCastVar.list[0].weather.main);
    console.log(foreCastVar.list[0].weather[0].main);

    if (foreCastVar.list[0].weather[0].main === "Clear") {
      setIconTest(Sunny);
    } else if (foreCastVar.list[0].weather[0].main === "Rain") {
      setIconTest(Rain);
    } else if (foreCastVar.list[0].weather[0].main === "Clouds") {
      setIconTest(Cloudy);
    } else if (foreCastVar.list[0].weather[0].main === "Snow") {
      setIconTest(Snow);
    } else if (foreCastVar.list[0].weather[0].main === "ThunderStorm") {
      setIconTest(ThunderStorm);
    } else if (foreCastVar.list[0].weather[0].main === "Mist") {
      setIconTest(Mist);
    } else if (foreCastVar.list[0].weather[0].main === "Hail") {
      setIconTest(Hail);
    } else if (foreCastVar.list[0].weather[0].main === "Tornado") {
      setIconTest(Tornado);
    } else if (foreCastVar.list[0].weather[0].main === "Smoke") {
      setIconTest(Smoke);
    }

    //  Monday
    if (foreCastVar.list[0].weather[0].main === "Clear") {
      setIconMon(Sunny);
    } else if (foreCastVar.list[0].weather[0].main === "Rain") {
      setIconMon(Rain);
    } else if (foreCastVar.list[0].weather[0].main === "Clouds") {
      setIconMon(Cloudy);
    } else if (foreCastVar.list[0].weather[0].main === "Snow") {
      setIconMon(Snow);
    } else if (foreCastVar.list[0].weather[0].main === "ThunderStorm") {
      setIconMon(ThunderStorm);
    } else if (foreCastVar.list[0].weather[0].main === "Mist") {
      setIconMon(Mist);
    } else if (foreCastVar.list[0].weather[0].main === "Hail") {
      setIconMon(Hail);
    } else if (foreCastVar.list[0].weather[0].main === "Tornado") {
      setIconMon(Tornado);
    } else if (foreCastVar.list[0].weather[0].main === "Smoke") {
      setIconMon(Smoke);
    }

    //  Tuesday
    if (foreCastVar.list[2].weather[0].main === "Clear") {
      setIconTues(Sunny);
    } else if (foreCastVar.list[2].weather[0].main === "Rain") {
      setIconTues(Rain);
    } else if (foreCastVar.list[2].weather[0].main === "Clouds") {
      setIconTues(Cloudy);
    } else if (foreCastVar.list[2].weather[0].main === "Snow") {
      setIconTues(Snow);
    } else if (foreCastVar.list[2].weather[0].main === "ThunderStorm") {
      setIconTues(ThunderStorm);
    } else if (foreCastVar.list[2].weather[0].main === "Mist") {
      setIconTues(Mist);
    } else if (foreCastVar.list[2].weather[0].main === "Hail") {
      setIconTues(Hail);
    } else if (foreCastVar.list[2].weather[0].main === "Tornado") {
      setIconTues(Tornado);
    } else if (foreCastVar.list[2].weather[0].main === "Smoke") {
      setIconTues(Smoke);
    }

    //  Wednesday
    if (foreCastVar.list[8].weather[0].main === "Clear") {
      setIconWed(Sunny);
    } else if (foreCastVar.list[8].weather[0].main === "Rain") {
      setIconWed(Rain);
    } else if (foreCastVar.list[8].weather[0].main === "Clouds") {
      setIconWed(Cloudy);
    } else if (foreCastVar.list[8].weather[0].main === "Snow") {
      setIconWed(Snow);
    } else if (foreCastVar.list[8].weather[0].main === "ThunderStorm") {
      setIconWed(ThunderStorm);
    } else if (foreCastVar.list[8].weather[0].main === "Mist") {
      setIconWed(Mist);
    } else if (foreCastVar.list[8].weather[0].main === "Hail") {
      setIconWed(Hail);
    } else if (foreCastVar.list[8].weather[0].main === "Tornado") {
      setIconWed(Tornado);
    } else if (foreCastVar.list[8].weather[0].main === "Smoke") {
      setIconWed(Smoke);
    }

    //  Thursday
    if (foreCastVar.list[18].weather[0].main === "Clear") {
      setIconThurs(Sunny);
    } else if (foreCastVar.list[18].weather[0].main === "Rain") {
      setIconThurs(Rain);
    } else if (foreCastVar.list[18].weather[0].main === "Clouds") {
      setIconThurs(Cloudy);
    } else if (foreCastVar.list[18].weather[0].main === "Snow") {
      setIconThurs(Snow);
    } else if (foreCastVar.list[18].weather[0].main === "ThunderStorm") {
      setIconThurs(ThunderStorm);
    } else if (foreCastVar.list[18].weather[0].main === "Mist") {
      setIconThurs(Mist);
    } else if (foreCastVar.list[18].weather[0].main === "Hail") {
      setIconThurs(Hail);
    } else if (foreCastVar.list[18].weather[0].main === "Tornado") {
      setIconThurs(Tornado);
    } else if (foreCastVar.list[18].weather[0].main === "Smoke") {
      setIconThurs(Smoke);
    }

    //  Friday
    if (foreCastVar.list[24].weather[0].main === "Clear") {
      setIconFri(Sunny);
    } else if (foreCastVar.list[24].weather[0].main === "Rain") {
      setIconFri(Rain);
    } else if (foreCastVar.list[24].weather[0].main === "Clouds") {
      setIconFri(Cloudy);
    } else if (foreCastVar.list[24].weather[0].main === "Snow") {
      setIconFri(Snow);
    } else if (foreCastVar.list[24].weather[0].main === "ThunderStorm") {
      setIconFri(ThunderStorm);
    } else if (foreCastVar.list[24].weather[0].main === "Mist") {
      setIconFri(Mist);
    } else if (foreCastVar.list[24].weather[0].main === "Hail") {
      setIconFri(Hail);
    } else if (foreCastVar.list[24].weather[0].main === "Tornado") {
      setIconFri(Tornado);
    } else if (foreCastVar.list[24].weather[0].main === "Smoke") {
      setIconFri(Smoke);
    }
  };

  return (
    <>
      <Row>
        <Col md={6} className="inputCol">
          <input
            onChange={(e) => {
              setInputCity(e.target.value);
              console.log(inputCity);
            }}
            className="inputStyle"
            type="text"
            placeholder="Enter"
          />

          <Button
            className="enterBtn"
            variant="warning"
            onClick={GettingDataFunction}
          >
            Enter
          </Button>
          <Button className="favBtn" variant="warning" onClick={handleShow}>
            Favorites
          </Button>

          <Offcanvas className="canvasColor" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
      </Row>

      <Row className="rowOne">
        <Col className="boxOne">
          <p className="txt">{cityName}</p> 
          
          <p className="txtTwo">{temp}</p>
          <img className="iconStyle" src={iconTest} />
         
        </Col>

        <Col className="tallBox">
          <h3 className="tallBoxTitle">5 Day Forecast</h3>

          <div className="fiveDayTexts">
            <div className="dayOne">
              <p className="monDayTxt">Mon</p>
              <img className="iconMon" src={iconMon} />
              <p className="fiveDayWeather">{monDay}</p>
            </div>
            <div className="dayOne">
              <p className="monDayTxt">Tue</p>
              <img className="iconMon" src={iconTues} />
              <p className="fiveDayWeather">{tuesDay}</p>
            </div>
            <div className="dayOne">
              <p className="monDayTxt">Wed</p>
              <img className="iconMon" src={iconWed} />
              <p className="fiveDayWeather">{wedDay}</p>
            </div>
            <div className="dayOne">
              <p className="monDayTxt">Thur</p>
              <img className="iconMon" src={iconThurs} />
              <p className="fiveDayWeather">{thursDay}</p>
            </div>
            <div className="dayOne">
              <p className="monDayTxt">Fri</p>
              <img className="iconMon" src={iconFri} />
              <p className="fiveDayWeather">{friDay}</p>
            </div>
          </div>
        </Col>
        <Row className="boxTwo">
          <Col className="todayColTitleBtn" md={12}>
            <p className="todayWeather">Today</p>
            {/* <Button className="favoriteBtn">Favorite</Button> */}
          </Col>
          <Col className="todayCol" md={4}>
            <p className="todayTxt">Feels like: {feelsLike}</p>
          </Col>
          <Col className="todayCol" md={4}>
            <p className="todayTxt">Humidity: {humidity}%</p>
          </Col>
          <Col className="todayCol" md={4}>
            <p className="todayTxt">Wind speeds: {windSpeed}mph</p>
          </Col>
        </Row>
      </Row>
    </>
  );
}
