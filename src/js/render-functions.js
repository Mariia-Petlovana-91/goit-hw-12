export const refs = {
	form: document.querySelector('.form'),
	galleryContainer: document.querySelector('.gallery'),
	loaderEl : document.querySelector('.loader'),
}

export function createItem(array) {
	return array.map(ar => `
	  <li class="gallery-item">
	    <a class="gallery-link" href="${ar.largeImageURL}">
		<img 
		  class="gallery-image" 
		  src="${ar.webformatURL}" 
		  alt="${ar.tags}" 
		/>
	    </a>
	    <ul class="info__list"> 
	      <li class="info__item"> 
		 <p class="info__textHead">Likes</p>
		 <p class="info__textValue">${ar.likes}</p>
		</li>
		<li class="info__item"> 
		 <p class="info__textHead">Views</p>
		 <p class="info__textValue">${ar.views}</p>
		</li>
		<li class="info__item"> 
		 <p class="info__textHead">Comments</p>
		 <p class="info__textValue">${ar.comments}</p>
		</li>
		<li class="info__item"> 
		 <p class="info__textHead">Downloads</p>
		 <p class="info__textValue">${ar.downloads}</p>
		</li>
	    </ul>
	  </li>`).join('');
    }

export function loader(el){
	return el.classList.toggle('visually-hidden');
}