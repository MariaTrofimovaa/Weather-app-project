import fiveDaysTpl from '../templates/fiveDays.hbs';
import arrowLeft from '../images/arrowLeft.png';
import arrowRight from '../images/arrowRight.png';
import apiService from './base/apiService.js';
import { renderFiveDays } from '../js/base/helper.js';
import { initEvtFiveDays } from './moreInfo.js';
import arrowRigfhtInfo from '../images/arrow-right-info.png';
import arrowLeftInfo from '../images/arrow-left-info.png';

function renderFiveDay() {
  return apiService
    .getData('forecast')
    .then(data => {
      const renderData = renderFiveDays(data);

      const tplDate = {
        arrowLeft,
        arrowRight,
        arrowRigfhtInfo,
        arrowLeftInfo,
        ...renderData,
      };

      document.querySelector('.fivedays-weather').innerHTML = fiveDaysTpl(tplDate);
      const arrowLeftBtn = document.querySelector('.left-btn');
      const arrowRightBtn = document.querySelector('.right-btn');
      const container = document.querySelector('.five-days-weather-list');

      initEvtFiveDays();

      arrowRightBtn.addEventListener('click', scrollToRight);

      function scrollToRight(e) {
        container.scroll({
          left: 200,
          behavior: 'smooth',
        });
      }

      arrowLeftBtn.addEventListener('click', scrollToLeft);
      function scrollToLeft(e) {
        container.scroll({
          left: -200,
          behavior: 'smooth',
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
}

renderFiveDay();

export default renderFiveDay;
