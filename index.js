import{S as d,i as p}from"./assets/vendor-B07T6_gy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function u(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=u(t);fetch(t.href,i)}})();const n={form:document.querySelector(".form"),galleryContainer:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),btnSee:document.querySelector(".btn--see")};function c(r){return r.map(e=>`
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
	  </li>`).join("")}function l(r){return r.classList.toggle("visually-hidden")}const m="https://pixabay.com/api/",g="?key=45475608-942d333351883cc9805f20e6b",h="&image_type=photo&orientation=horizontal&safesearch=true",_="&per_page=15";class y{constructor(){this._findValue="",this._page=1}fetchImade(){return fetch(`${m}${g}&q=${this._findValue}${h}${_}&page=${this._page}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>(this.incrementPage(),e.hits)).catch(e=>{console.log(e)})}incrementPage(){this._page+=1}resetPage(){this._page=1}get findValue(){return this._findValue}set findValue(e){this._findValue=e,this.resetPage()}}let f=new d(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:250,enableKeyboard:!0});const a=new y;n.form.addEventListener("submit",b);n.btnSee.addEventListener("click",L);function b(r){r.preventDefault(),n.galleryContainer.innerHTML="",l(n.loaderEl),a.findValue=r.currentTarget.elements.find.value,a.fetchImade().then(e=>{if(l(n.loaderEl),n.galleryContainer.insertAdjacentHTML("beforeend",c(e)),n.galleryContainer.children.length>0&&n.btnSee.classList.remove("visually-hidden"),f.refresh(),n.form.reset(),e.length===0||a.findValue===""){n.btnSee.classList.add("visually-hidden"),p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}}).catch(e=>{console.log(e)})}function L(){a.fetchImade().then(r=>{n.galleryContainer.insertAdjacentHTML("beforeend",c(r)),f.refresh()}).catch(r=>{console.log(r)})}
//# sourceMappingURL=index.js.map
