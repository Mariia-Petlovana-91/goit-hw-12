import{S as u,i as d}from"./assets/vendor-IZ_vzB-l.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const i={form:document.querySelector(".form"),galleryContainer:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};function m(o){return o.map(e=>`
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
	  </li>`).join("")}function s(o){return o.classList.toggle("visually-hidden")}const p="45475608-942d333351883cc9805f20e6b",h="https://pixabay.com/api",g="&image_type=photo&orientation=horizontal&safesearch=true";class y{constructor(){this._findValue=""}fetchImade(){return fetch(`${h}/?key=${p}&q=${this.findValue}${g}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits).catch(e=>{error()})}get findValue(){return this._findValue}set findValue(e){this._findValue=e}}function c(){d.show({backgroundColor:"red",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}let _=new u(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:250,enableKeyboard:!0});const f=new y;i.form.addEventListener("submit",b);function b(o){o.preventDefault(),i.form.elements.find.value===""&&alert("Please enter the name of the element you are looking for in the search field."),i.galleryContainer.innerHTML="",s(i.loaderEl),f.findValue=o.currentTarget.elements.find.value,f.fetchImade().then(a=>{if(s(i.loaderEl),i.galleryContainer.insertAdjacentHTML("beforeend",m(a)),_.refresh(),i.form.reset(),a.length===0){c();return}}).catch(a=>{c(),console.error("Search operation failed:",a)})}
//# sourceMappingURL=index.js.map
