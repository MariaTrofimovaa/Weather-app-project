import calendarTpl from '../templates/calendar.hbs';
import apiService from './base/apiService.js';
import sunriseIcon from '../images/sunrise.svg';
import sunsetIcon from '../images/sunset.svg';

let timerId = null;

//   function pad(value) {
//     return String(value).padStart(2, '0');
//   }
//   const ending = function (day) {
//     if (day > 3 && day < 21) return 'th';
//     switch (day % 10) {
//       case 1:
//         return 'st';
//       case 2:
//         return 'nd';
//       case 3:
//         return 'rd';
//       default:
//         return 'th';
//     }
//   };
//   const config = {
//     day,
//     weekDay,
//     month,
//     time,
//     sunriseIcon,
//     sunsetIcon,
//     ending,
//     sunriseTime:
//       pad(new Date(data.sys.sunrise * 1000).getHours()) +
//       ':' +
//       pad(new Date(data.sys.sunrise * 1000).getMinutes()),
//     sunsetTime:
//       pad(new Date(data.sys.sunset * 1000).getHours()) +
//       ':' +
//       pad(new Date(data.sys.sunset * 1000).getMinutes()),
//   };
//   document.querySelector('.date').insertAdjacentHTML('beforeend', calendarTpl(config));

//   const dateDay = document.querySelector('.date-day');
//   const currentTime = document.querySelector('.date-time');
//   const currentMonth = document.querySelector('.date-month');

//   setInterval(() => {
//     const date = new Date();
//     const day = date.getDate();
//     const weekDay = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(date);
//     const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
//     let time = pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds());

function renderCalendar() {
  clearInterval(timerId);
  apiService.getData('weather').then(data => {
    // console.log(data);
    const dateUTC = new Date(Date.now() + new Date().getTimezoneOffset() * 60 * 1000);
    const date = new Date(dateUTC.getTime() + data.timezone * 1000);
    const day = date.getDate();
    const weekDay = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
    let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    function pad(value) {
      return String(value).padStart(2, '0');
    }

    const ending = function (day) {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    };

    const config = {
      day,
      weekDay,
      month,
      time,
      sunriseIcon,
      sunsetIcon,
      ending,
      sunriseTime:
        pad(new Date(data.sys.sunrise * 1000).getHours()) +
        ':' +
        pad(new Date(data.sys.sunrise * 1000).getMinutes()),
      sunsetTime:
        pad(new Date(data.sys.sunset * 1000).getHours()) +
        ':' +
        pad(new Date(data.sys.sunset * 1000).getMinutes()),
    };
    document.querySelector('.date').innerHTML = calendarTpl(config);

    const dateDay = document.querySelector('.date-day');
    const currentTime = document.querySelector('.date-time');
    const currentMonth = document.querySelector('.date-month');

    timerId = setInterval(() => {
      // const localDate = new Date();

      const dateUTC = new Date(Date.now() + new Date().getTimezoneOffset() * 60 * 1000);
      const date = new Date(dateUTC.getTime() + data.timezone * 1000);
      const day = date.getDate();
      const weekDay = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(date);
      const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
      let time = pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds());
      const ending = function (day) {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
          case 1:
            return 'st';
          case 2:
            return 'nd';
          case 3:
            return 'rd';
          default:
            return 'th';
        }
      };
      dateDay.innerHTML = `${day}<sup>${ending(day)}</sup> ${weekDay}`;
      currentMonth.textContent = month;
      currentTime.textContent = time;
    }, 1000);

    // console.log(config);
  });
}

renderCalendar();

export default renderCalendar;

//
//
//
//
//
//
// import refs from '../js/base/refs.js';
// import helper from '../js/base/helper.js';
// const date = document.querySelector('.date');
// date.innerHTML = calenarTpl(weatsherParams);
//
//
// const date = new Date();
// const dateUTC = new Date(Date.now() + new Date().getTimezoneOffset() * 60 * 1000);
// const localDate = new Date(dateUTC.getTime() + api.oneDayData.timezone * 1000);
