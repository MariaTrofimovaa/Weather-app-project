import config from '../../config.json';

class ApiService {
  constructor() {
    this.requestUrl = config.url;
    this.key = config.apiKey;
    this.bgIconUrl = config.bgIconUrl;
    this.bgKeyImg = config.bgKeyImg;
    this.units = config.units;
    this.metric = config.metric;
    this.searchQuery = '';
    this.location = 'Kiev';
  }

  // ************************** Делаем запрос на сервер
  // ***** Метод принимает параметр collection - это weather (данные за 1 день) или forecast (данные за 5 дней)
  // позволяет получать данные на 1 или 5 дней в зависимости от параметра

  getData(collection) {
    const url = `${this.requestUrl}${collection}?q=${this.location}&units=${this.units}&appid=${this.key}`;

    return fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Something went wrong');
    });
  }

  // ***** Метод получения изображений с pixabay

  fetchImages() {
    const bgUrlIcon = `${this.bgIconUrl}${this.location}&page=1&per_page=12&key=${this.bgKeyImg}`;

    return fetch(bgUrlIcon).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Picture not found');
    });
  }

  // ***** Сеттер получения текущей локации после нажатия на Сабмит или Enter
  set query(newLocation) {
    this.location = newLocation;
  }
}

const apiService = new ApiService({});

export default apiService;
