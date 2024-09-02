import './css/main.scss';
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import { refs, createItem, loader, scroll} from './js/render-functions';
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

async function onSearch(e) {
	e.preventDefault();
  
	refs.galleryContainer.innerHTML = '';
	loader(refs.loaderEl);

		
	if ( e.currentTarget.elements.find.value.trim() === '') {
		iziToast.warning({
			message: "You are trying to find an empty string.",
			position: 'topRight',
		});
		loader(refs.loaderEl);
		refs.btnSee.classList.add('visually-hidden');
		return;
	}
	  
	pixabayApi.findValue = e.currentTarget.elements.find.value;
  
	try {
	    const response = await pixabayApi.fetchImade();
	    loader(refs.loaderEl);
	    refs.galleryContainer.insertAdjacentHTML('beforeend', createItem(response.data.hits));
	    scroll();
		
	    if (refs.galleryContainer.children.length === 15 ) {
		  refs.btnSee.classList.remove('visually-hidden');
	    }
		 
	    if (response.data.hits.length === 0) {
		  refs.btnSee.classList.add('visually-hidden');
  
		  iziToast.error({
			message: "Sorry, there are no images matching your search query. Please try again!",
			position: 'topRight',
		  });
		  return;
		}

	    lightbox.refresh();
	    refs.form.reset();
	} catch  {
	    		iziToast.error({
			message: "Sorry, there are no images matching your search query. Please try again!",
			position: 'topRight',
		  });
	}
  }
  
async function onLoadeMore() {
	try {
	    const response = await pixabayApi.fetchImade();
	
	    if(pixabayApi.length >= response.data.totalHits){
		refs.btnSee.classList.add('visually-hidden');

		iziToast.info({
			message: "We're sorry, but you've reached the end of search results.",
			position: 'topRight',
		  });
	    }
	    
	    refs.galleryContainer.insertAdjacentHTML('beforeend', createItem(response.data.hits));
	    scroll();
	    lightbox.refresh();
	} catch {
			iziToast.info({
			message: "We're sorry, but you've reached the end of search results.",
			position: 'topRight',
		  });
	}
  }
