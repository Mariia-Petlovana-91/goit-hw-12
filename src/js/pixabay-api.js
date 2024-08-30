const BASE_URL = 'https://pixabay.com/api/';
const KEY_API = '?key=45475608-942d333351883cc9805f20e6b';
const OTHER_SETTINGS = '&image_type=photo&orientation=horizontal&safesearch=true';
const PRE_PAGE = '&per_page=15';

export class PixabayApi {
    constructor() {
        this._findValue = '';
        this._page = 1;
    }

    fetchImade() {
        return fetch(`${BASE_URL}${KEY_API}&q=${this._findValue}${OTHER_SETTINGS}${PRE_PAGE}&page=${this._page}`) // Додаємо параметр сторінки
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => {
                this.incrementPage();
                return data.hits;
            })
            .catch(err => {
                console.log(err);
            });
    }

    incrementPage() {
        this._page += 1;
    }

    resetPage() {
        this._page = 1;
    }

    get findValue() {
        return this._findValue;
    }

    set findValue(newValue) {
        this._findValue = newValue;
        this.resetPage();
    }
}