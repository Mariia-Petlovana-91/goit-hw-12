const KEY_API = '45475608-942d333351883cc9805f20e6b';
const BASE_URL = 'https://pixabay.com/api';
const OTHER_SETTINGS = '&image_type=photo&orientation=horizontal&safesearch=true'

export class PixabayApi {
	constructor(){
		this._findValue = '';

	}

	fetchImade(){
	       return fetch(`${BASE_URL}/?key=${KEY_API}&q=${this.findValue}${OTHER_SETTINGS}`)
		.then(response => {
			if (!response.ok){
				throw new Error (response.status);
			}

			return response.json();
		})
		.then(data => {
			return data.hits
		})
		.catch(err => {
			error();
		  });

	}

	get findValue(){
		return this._findValue;
	}

	set findValue(newfindValue){
		this._findValue = newfindValue;
	}
}