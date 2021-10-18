const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const timeCal = (time, hour) => {
  if (hour) {
    return (time / 12) * 360 + 90;
  }
  return (time / 60) * 360 + 90;
};
const setTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const mins = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const secondRotateDegree = timeCal(seconds);
  const minRotateDegree = timeCal(mins);
  const hoursRotateDegree = timeCal(hours, hours);

  secondHand.style.transform = `rotate(${secondRotateDegree}deg)`;
  minHand.style.transform = `rotate(${minRotateDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursRotateDegree}deg)`;
};

setInterval(setTime, 1000);
