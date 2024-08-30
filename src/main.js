import './css/main.scss';
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import axios from 'axios';
import { refs, createItem, loader } from './js/render-functions';
import { PixabayApi, } from './js/pixabay-api';

let lightbox = new SimpleLightbox('.gallery a', {
	navText:  ['<','>'],
	captionsData: 'alt',
	captionDelay: 250,
	enableKeyboard: true,
	});

const pixabayApi = new PixabayApi();

refs.form.addEventListener('submit', onSearch);
refs.btnSee.addEventListener('click', onLoadeMore);

function onSearch(e){
	e.preventDefault();

      refs.galleryContainer.innerHTML='';

	loader(refs.loaderEl);
      
	pixabayApi.findValue = e.currentTarget.elements.find.value;
	pixabayApi.fetchImade()

	.then(hits => {

		loader(refs.loaderEl);

		refs.galleryContainer.insertAdjacentHTML('beforeend', createItem(hits));

		if (refs.galleryContainer.children.length > 0) {
			refs.btnSee.classList.remove('visually-hidden');
		}

		lightbox.refresh();
		refs.form.reset();
           
		if (hits.length === 0 || pixabayApi.findValue === '') {
			refs.btnSee.classList.add('visually-hidden');

			iziToast.error({
				message: "Sorry, there are no images matching your search query. Please try again!",
				position: 'topRight',
			  });
			  return;
		}
	  })
	.catch(err => {
            console.log(err);
        });
	
}

function onLoadeMore() {
	pixabayApi.fetchImade()
	    .then(hits => {
		  refs.galleryContainer.insertAdjacentHTML('beforeend', createItem(hits));
		  lightbox.refresh();

	    })
	    .catch(err => {
		  console.log(err);
	    });
  }

