const timeDisplay = document.getElementById("tspan4839");
const displayAmPm = document.getElementById("tspan4843");
const buttonFormatTime = document.getElementById("g1361");
const buttonFormatTimeText = document.getElementById("tspan4847");
const buttonWeather = document.getElementById("g1370");
const buttonWeatherText = document.getElementById("tspan4855");
const cogWheel = document.getElementById("g1261");
const displaySunMoon = document.getElementById("layer7");
const displayClouds = document.getElementById("layer10");
const displayRain = document.getElementById("g6374");
const displaySky = document.getElementById("rect880");

let format12 = true;

let weather = true;

let currentSeconds = 0;

const displayTime = () => {
  const currentTime = new Date();

  const currentHours =
    currentTime.getHours() < 13
      ? currentTime.getHours()
      : currentTime.getHours() - 12 * format12;

  displayAmPm.textContent = currentTime.getHours() < 13 ? "AM" : "PM";

  if (currentSeconds === 0) {
    currentSeconds = currentTime.getSeconds();
  }
  cogWheel.style.transform = `rotate(${currentSeconds * 6}deg)`;

  const displayHours =
    currentHours < 10 ? `0${currentHours}` : `${currentHours}`;

  const displayMinutes =
    currentTime.getMinutes() < 10
      ? `0${currentTime.getMinutes()}`
      : `${currentTime.getMinutes()}`;

  timeDisplay.textContent = `${displayHours} ${displayMinutes}`;

  //   displaySunMoon.style.transform = `rotate(${
  //     currentTime.getHours() * 8 - 90
  //   }deg)`;

  const dayNight = currentTime.getHours() > 6 && currentTime.getHours() < 19;

  displaySunMoon.style.transform = `
rotate(${
    -50 + (85 / 12) * ((currentTime.getHours() - 6) % 12) + 180 * dayNight
  }deg)
`;
};

displayTime();

const time = setInterval(() => {
  displayTime();
  currentSeconds++;
}, 1000);

buttonFormatTime.addEventListener("click", () => {
  format12 = !format12;
  buttonFormatTimeText.textContent = format12 ? "12" : "24";
  displayAmPm.classList.toggle("hidden");
});

buttonWeather.addEventListener("click", () => {
  weather = !weather;
  buttonWeatherText.textContent = weather ? "ON" : "OFF";
});
