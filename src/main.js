import './css/main.scss';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { refs, createItem, loader } from './js/render-functions';
import { PixabayApi, } from './js/pixabay-api';

function error(){
	iziToast.show({
	    backgroundColor: 'red',
	    messageColor: 'white',
	    message: "Sorry, there are no images matching your search query. Please try again!",
	    position: 'topRight',
	    
	});
  }


let lightbox = new SimpleLightbox('.gallery a', {
	navText:  ['<','>'],
	captionsData: 'alt',
	captionDelay: 250,
	enableKeyboard: true,
	});

const pixabayApi = new PixabayApi();

refs.form.addEventListener('submit', onSearch);

function onSearch(e){
	e.preventDefault();
	
	const searchValue = refs.form.elements.find.value;

	 if (searchValue === ''){
            alert('Please enter the name of the element you are looking for in the search field.');
	 }
      refs.galleryContainer.innerHTML='';

	loader(refs.loaderEl);
      
	pixabayApi.findValue = e.currentTarget.elements.find.value;

	pixabayApi.fetchImade()

	.then(hits => {

		loader(refs.loaderEl);

		refs.galleryContainer.insertAdjacentHTML('beforeend', createItem(hits));

		lightbox.refresh();
		refs.form.reset();
           
		if (hits.length === 0) {
		    error();
		    return;
		}
	  })
	.catch(err => {
            error();
            console.error('Search operation failed:', err);
        });
	
}
    

