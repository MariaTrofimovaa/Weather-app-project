// ***** 5 DAYS BUTTON *****
const oneDay = document.getElementById('oneday');
const currentDate = document.querySelector('.date');
const fiveDaysWeather = document.querySelector('.fivedays-weather');
const buttonBox = document.querySelector('.button-box');
const fiveDaysBtn = document.getElementById('fiveDaysBtn');
const todayBtn = document.getElementById('todayBtn');
const fivedaysChart = document.querySelector('.fivedays-chart');
const additionalInfo = document.querySelector('.additional-info');
const screenWidth = window.screen.width;

fiveDaysBtn.onclick = function () {
  fiveDaysBtn.classList.add('is-active');
  todayBtn.classList.remove('is-active');
  oneDay.hidden = true;
  currentDate.hidden = true;
  fiveDaysWeather.hidden = false;
  fivedaysChart.hidden = false;
  additionalInfo.hidden = true;

  todayBtn.onclick = function () {
    todayBtn.classList.add('is-active');
    fiveDaysBtn.classList.remove('is-active');
    oneDay.hidden = false;
    currentDate.hidden = false;
    fiveDaysWeather.hidden = true;
    fivedaysChart.hidden = true;
    additionalInfo.hidden = false;
  };
};
