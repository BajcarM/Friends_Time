const timeDisplay = document.getElementById("tspan4839");
const displayAmPm = document.getElementById("tspan4843");
const buttonFormatTime = document.getElementById("tspan4847");
const buttonWeather = document.getElementById("tspan4855");
const cogWheel = document.getElementById("path957");
const displaySunMoon = document.getElementById("layer7");
const displayClouds = document.getElementById("layer10");
const displayRain = document.getElementById("g6374");
const displaySky = document.getElementById("rect880");

let format12 = true;
let weather = true;

const displayTime = () => {
  const currentTime = new Date();

  let currentHours =
    currentTime.getHours() < 13
      ? currentTime.getHours()
      : currentTime.getHours() - 12 * format12;

  const displayHours =
    currentHours < 10 ? `0${currentHours}` : `${currentHours}`;
    
  const displayMinutes =
    currentTime.getMinutes() < 10
      ? `0${currentTime.getMinutes()}`
      : `${currentTime.getMinutes()}`;

  timeDisplay.textContent = `${displayHours} ${displayMinutes}`;
};

displayTime();

const time = setInterval(displayTime, 1000);
