import apiService from '../base/apiService.js';
import renderOneDay from '../oneDay.js';
import renderFiveDay from '../fiveDays.js';

const body = document.body;
let location = 'kiev';
function setBgImages() {
  apiService.fetchImages().then(data => {
    const contryImgUrl = data.hits[1].largeImageURL;
    const styleValue = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)) 0% 0% / cover, url(${contryImgUrl}) center fixed; background-size: cover;`;
    body.setAttribute('style', styleValue);
  });
}
setBgImages();

// Получаем текущую локацию после нажатия на Submit или Enter

const setGeoLocationImg = newLocation => {
  location = newLocation;
};

// Определяем текущую геолокацию пользователя через API

// navigator.geolocation.getCurrentPosition(setGeo, errorGeo);

// function setGeo(position) {
//   console.log(position);
//   const apikey = '40432aa1d5b1494da80f0c0da6b0db8a';

//   fetch(
//     `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=${apikey}`,
//   )
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       return Promise.reject(`Ошибка! Такого города нет в списке!`);
//     })
//     .then(data => {
//       const currentCity = data.results[0].components.city;
//       console.log(currentCity);

//       renderOneDay(currentCity);
//       renderFiveDay(currentCity);
//       setGeoLocationImg(currentCity);
//       setBgImages(currentCity);
//     });
// }

// function errorGeo() {
//   renderOneDay();
//   renderFiveDay();
//   setGeoLocationImg();
//   setBgImages();
// }

export { setBgImages, setGeoLocationImg };
