import{a as h,S as m,i as c}from"./assets/vendor-CRwkH7JT.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function g(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=g(i);fetch(i.href,n)}})();const s={form:document.querySelector(".form"),galleryContainer:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),btnSee:document.querySelector(".btn--see"),firstImage:document.querySelector(".gallery-item")};function d(t){return t.map(e=>`
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
	  </li>`).join("")}function l(t){return t.classList.toggle("visually-hidden")}function f(){if(s.firstImage){const t=s.firstImage.getBoundingClientRect().height;window.scrollBy({top:t*2,left:0,behavior:"smooth"})}}const p="https://pixabay.com/api/",y="?key=45475608-942d333351883cc9805f20e6b",_="&image_type=photo&orientation=horizontal&safesearch=true",L="&per_page=15";class b{constructor(){this._findValue="",this._page=1,this.length=0}async fetchImade(){try{const e=await h.get(`${p}${y}&q=${this._findValue}${_}${L}&page=${this._page}`);return this.incrementPage(),this.incrementLength(e.data.hits.length),e}catch(e){console.log(e)}}incrementPage(){this._page+=1}resetPage(){this._page=1}incrementLength(e){this.length+=e}resetLength(){this.length+=0}get findValue(){return this._findValue}set findValue(e){this._findValue=e,this.resetPage(),this.resetLength()}}let u=new m(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:250,enableKeyboard:!0});const r=new b;s.form.addEventListener("submit",S);s.btnSee.addEventListener("click",v);async function S(t){t.preventDefault(),s.galleryContainer.innerHTML="",l(s.loaderEl),r.findValue=t.currentTarget.elements.find.value;try{const e=await r.fetchImade();if(l(s.loaderEl),s.galleryContainer.insertAdjacentHTML("beforeend",d(e.data.hits)),setTimeout(f,100),s.galleryContainer.children.length>0&&s.btnSee.classList.remove("visually-hidden"),e.data.hits.length===0||r.findValue===""){s.btnSee.classList.add("visually-hidden"),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}u.refresh(),s.form.reset()}catch(e){console.log(e)}}async function v(){try{const t=await r.fetchImade();r.length>=t.data.totalHits&&(s.btnSee.classList.add("visually-hidden"),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),s.galleryContainer.insertAdjacentHTML("beforeend",d(t.data.hits)),setTimeout(f,100),u.refresh()}catch(t){console.log(t)}}
//# sourceMappingURL=index.js.map
