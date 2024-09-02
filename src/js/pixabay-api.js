import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY_API = '?key=45475608-942d333351883cc9805f20e6b';
const OTHER_SETTINGS = '&image_type=photo&orientation=horizontal&safesearch=true';
const PRE_PAGE = '&per_page=15';

export class PixabayApi {
    constructor() {
        this._findValue = '';
        this._page = 1;
        this.length = 0;
    }

   async fetchImade() {
    try {
     const response = await axios.get(`${BASE_URL}${KEY_API}&q=${this._findValue}${OTHER_SETTINGS}${PRE_PAGE}&page=${this._page}`)
        this.incrementPage();
        this.incrementLength(response.data.hits.length);
        return response;
        
    } catch (error) {
        console.log(error);
    }

    }

    incrementPage() {
        this._page += 1;
    }

    resetPage() {
        this._page = 1;
    }

    incrementLength(value) {
        this.length += value;
    }

    resetLength() {
        this.length = 0;
    }

    get findValue() {
        return this._findValue;
    }

    set findValue(newValue) {
        this._findValue = newValue;
        this.resetPage();
        this.resetLength();
    }
}