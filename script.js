const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const currentYear = new Date().getFullYear();
const month = new Date().getMonth();
const day = new Date().getDate();
let nextChristmas;

checkDate = () => {
  month === 12 && day > 25
    ? (nextChristmas = `25 Dec ${currentYear + 1}`)
    : (nextChristmas = `25 Dec ${currentYear}`);
};

countDown = () => {
  const nextChristmasDate = new Date(nextChristmas);
  const currentDate = new Date();

  const totalSeconds = (nextChristmasDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;
};

countDown();
checkDate();
setInterval(countDown, 1000);
setInterval(checkDate, 3600);
