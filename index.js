import{a as g,S as m,i as n}from"./assets/vendor-CRwkH7JT.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function h(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(i){if(i.ep)return;i.ep=!0;const r=h(i);fetch(i.href,r)}})();const s={form:document.querySelector(".form"),galleryContainer:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),btnSee:document.querySelector(".btn--see")};function d(t){return t.map(e=>`
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
	  </li>`).join("")}function l(t){return t.classList.toggle("visually-hidden")}function u(){const t=document.querySelector(".gallery-item");if(t){const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"})}}const p="https://pixabay.com/api/",y="?key=45475608-942d333351883cc9805f20e6b",_="&image_type=photo&orientation=horizontal&safesearch=true",b="&per_page=15";class L{constructor(){this._findValue="",this._page=1,this.length=0}async fetchImade(){try{const e=await g.get(`${p}${y}&q=${this._findValue}${_}${b}&page=${this._page}`);return this.incrementPage(),this.incrementLength(e.data.hits.length),e}catch(e){console.log(e)}}incrementPage(){this._page+=1}resetPage(){this._page=1}incrementLength(e){this.length+=e}resetLength(){this.length=0}get findValue(){return this._findValue}set findValue(e){this._findValue=e,this.resetPage(),this.resetLength()}}let f=new m(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:250,enableKeyboard:!0});const a=new L;s.form.addEventListener("submit",S);s.btnSee.addEventListener("click",v);async function S(t){if(t.preventDefault(),s.galleryContainer.innerHTML="",l(s.loaderEl),t.currentTarget.elements.find.value.trim()===""){n.warning({message:"You are trying to find an empty string.",position:"topRight"}),l(s.loaderEl),s.btnSee.classList.add("visually-hidden");return}a.findValue=t.currentTarget.elements.find.value;try{const e=await a.fetchImade();if(l(s.loaderEl),s.galleryContainer.insertAdjacentHTML("beforeend",d(e.data.hits)),u(),s.galleryContainer.children.length===15&&s.btnSee.classList.remove("visually-hidden"),e.data.hits.length===0){s.btnSee.classList.add("visually-hidden"),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f.refresh(),s.form.reset()}catch{n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}}async function v(){try{const t=await a.fetchImade();a.length>=t.data.totalHits&&(s.btnSee.classList.add("visually-hidden"),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),s.galleryContainer.insertAdjacentHTML("beforeend",d(t.data.hits)),u(),f.refresh()}catch{n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}}
//# sourceMappingURL=index.js.map
