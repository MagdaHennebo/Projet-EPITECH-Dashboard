import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import { Button, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import "./Weather.css";

const Weather = () => {
  const [value, setValue] = useState("");
  const [temp, setTemp] = useState("");
  const [typecity, setTypeCity] = useState("");
  const [city, setCity] = useState("Marignane");
  const [img, setimg] = useState("");
  const [disc, setdisc] = useState("");

  const citySelect = (e) => {
    e.preventDefault();
    setCity(typecity);
  };

  useEffect(() => {
    axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9d60bb7484f6683e2fce9a5bdbc81141`
    )
      .then((resolve) => {
        console.log(resolve.data);
        setValue(resolve.data);
        setTemp(resolve.data.main);
        setimg(
          `http://openweathermap.org/img/wn/${resolve.data.weather[0].icon}.png`
        );
        setdisc(resolve.data.weather[0].description);
      })
      .catch((reject) => {
        console.log(reject);
        setValue("City not found");
      });
  }, [city]);

  return (
    <div>
      {console.log(city)}
      <Paper className="paper">
        <form onSubmit={citySelect}>
          <TextField
            className="elementcenter"
            placeholder="Enter city name"
            value={typecity}
            onChange={(e) => setTypeCity(e.target.value)}
          />
          <Button type="submit" name="btn">
            <SendIcon style={{ outline: "none" }} />
          </Button>
        </form>
        <br />
        <h6 className="fontcss">{value.name}</h6>

        <img src={img} alt="weather icon" className="imgcss" />
        <h6 className="fontcss">{disc}</h6>

        <div className="elementcenter">
          <p>
            Min
            <br />
            {`${Math.floor(temp.temp_min - 273.15)}° C`}
          </p>
          <h6 className="fontcss">{`${Math.floor(temp.temp - 273.15)}° C`}</h6>
          <p>
            Max
            <br />
            {`${Math.floor(temp.temp_max - 273.15)}° C`}
          </p>
        </div>
      </Paper>
    </div>
  );
};

export default Weather;
