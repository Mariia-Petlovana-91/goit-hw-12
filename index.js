import{S as f,i as u}from"./assets/vendor-B07T6_gy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const n={form:document.querySelector(".form"),galleryContainer:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};function d(o){return o.map(e=>`
	  <li class="gallery-item">
	    <a class="gallery-link" href="${e.largeImageURL}">
		<img 
		  class="gallery-image" 
		  src="${e.webformatURL}" 
		  alt="${e.tags}" 
		/>
	    </a>
	    <ul class="info__list"> 
	      <li class="info__item"> 
		 <p class="info__textHead">Likes</p>
		 <p class="info__textValue">${e.likes}</p>
		</li>
		<li class="info__item"> 
		 <p class="info__textHead">Views</p>
		 <p class="info__textValue">${e.views}</p>
		</li>
		<li class="info__item"> 
		 <p class="info__textHead">Comments</p>
		 <p class="info__textValue">${e.comments}</p>
		</li>
		<li class="info__item"> 
		 <p class="info__textHead">Downloads</p>
		 <p class="info__textValue">${e.downloads}</p>
		</li>
	    </ul>
	  </li>`).join("")}function s(o){return o.classList.toggle("visually-hidden")}const m="45475608-942d333351883cc9805f20e6b",p="https://pixabay.com/api",h="&image_type=photo&orientation=horizontal&safesearch=true";class g{constructor(){this._findValue=""}fetchImade(){return fetch(`${p}/?key=${m}&q=${this.findValue}${h}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits).catch(e=>error(e))}get findValue(){return this._findValue}set findValue(e){this._findValue=e}}let y=new f(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:250,enableKeyboard:!0});const c=new g;n.form.addEventListener("submit",_);function _(o){o.preventDefault();const e=n.form.elements.find.value;n.galleryContainer.innerHTML="",s(n.loaderEl),c.findValue=o.currentTarget.elements.find.value,c.fetchImade().then(i=>{if(s(n.loaderEl),n.galleryContainer.insertAdjacentHTML("beforeend",d(i)),y.refresh(),n.form.reset(),i.length===0||e===""){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}}).catch(i=>{error(i),console.error("Search operation failed:",i)})}
//# sourceMappingURL=index.js.map
