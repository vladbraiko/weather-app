(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(e,t,n){},"3Olm":function(e,t){const n=document.querySelector(".date__day"),a=document.querySelector(".date__month"),l=document.querySelector(".date__time");setInterval(()=>{const e=new Date;dayNow=e.getDate();const t=new Array;t[0]="Sun",t[1]="Mon",t[2]="Tue",t[3]="Wed",t[4]="Thu",t[5]="Fri",t[6]="Sat",weekDayNow=t[e.getDay()],n.innerHTML=`${dayNow}<sup class="date__day--nth">${function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(dayNow)}</sup> ${weekDayNow}`;const o=new Array;o[0]="January",o[1]="February",o[2]="March",o[3]="April",o[4]="May",o[5]="June",o[6]="July",o[7]="August",o[8]="September",o[9]="October",o[10]="November",o[11]="December",a.textContent=o[e.getMonth()],l.textContent=s(e.getHours())+":"+s(e.getMinutes())+":"+s(e.getSeconds())},1e3);function s(e){return String(e).padStart(2,"0")}},"7jFK":function(e,t){const n=document.querySelector(".days-list");document.querySelectorAll(".days-list__item");n.addEventListener("click",(function(e){e.preventDefault(),"BUTTON"==e.target.nodeName&&(e=>{document.querySelectorAll(".days-list__item").forEach(e=>{const t=e.childNodes[1],n=e.childNodes[9];t.classList.remove("days-list__day-of-the-week--active"),n.classList.remove("days-list__more-btn__active")});const t=e.target;e.path[1].firstElementChild.classList.add("days-list__day-of-the-week--active"),t.classList.add("days-list__more-btn__active")})(e)}))},MyEh:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,l){var s,o=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,i="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="temperature-box">\n    <i class="weather-picture-icon"></i>\n    <p class="temperature-header">'+c(typeof(s=null!=(s=u(n,"city")||(null!=t?u(t,"city"):t))?s:r)===i?s.call(o,{name:"city",hash:{},data:l,loc:{start:{line:3,column:34},end:{line:3,column:42}}}):s)+", "+c(typeof(s=null!=(s=u(n,"countryCode")||(null!=t?u(t,"countryCode"):t))?s:r)===i?s.call(o,{name:"countryCode",hash:{},data:l,loc:{start:{line:3,column:44},end:{line:3,column:59}}}):s)+'</p>\n    <div class="degree-box">\n        <p class="degree-title">'+c(typeof(s=null!=(s=u(n,"temp")||(null!=t?u(t,"temp"):t))?s:r)===i?s.call(o,{name:"temp",hash:{},data:l,loc:{start:{line:5,column:32},end:{line:5,column:40}}}):s)+'&deg</p>\n        <ul class="degree-list">\n            <li class="degree-item degree-item--line">\n                <p class="degree-first-subtitle">min</p>\n                <p class="degree-second-subtitle">'+c(typeof(s=null!=(s=u(n,"tempMin")||(null!=t?u(t,"tempMin"):t))?s:r)===i?s.call(o,{name:"tempMin",hash:{},data:l,loc:{start:{line:9,column:50},end:{line:9,column:61}}}):s)+' &deg</p>\n            </li>\n            <li class="degree-item">\n                <p class="degree-first-subtitle">max</p>\n                <p class="degree-second-subtitle">'+c(typeof(s=null!=(s=u(n,"tempMax")||(null!=t?u(t,"tempMax"):t))?s:r)===i?s.call(o,{name:"tempMax",hash:{},data:l,loc:{start:{line:13,column:50},end:{line:13,column:61}}}):s)+" &deg</p>\n            </li>\n        </ul>\n    </div>\n</div>"},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("1DEj");var a=n("MyEh"),l=n.n(a),s=n("sntm"),o=n.n(s),r=n("xDKS"),i=n.n(r);const c=document.querySelector(".search-location__form"),u=document.querySelector(".btn-today-js"),d=document.querySelector(".btn-5-days-js"),m=document.querySelector(".btn-today-js"),y=document.querySelector(".content-box"),p=document.querySelector(".btn-box"),h=document.querySelector(".part2"),f=document.querySelector(".part3"),_=document.querySelector(".five-days-containeer"),g=document.querySelector(".moreInfo"),b=document.querySelector(".date__sunrise--time"),v=document.querySelector(".date__sunset--time"),M=document.querySelector(".days-list"),x=document.querySelector(".moreInfo__block");let D="",k="",w={},S={};function q(e){return e<10&&(e="0"+e),e}const N=(e,t)=>{const n=q(e.getHours()),a=q(e.getMinutes()),l=q(t.getHours()),s=q(t.getMinutes());b.textContent=n+":"+a,v.textContent=l+":"+s},T=e=>{document.querySelector(".temperature-box")?(document.querySelector(".temperature-box").remove(),y.insertAdjacentHTML("afterbegin",l()(e)),N(w.sunrise,w.sunset)):(y.insertAdjacentHTML("afterbegin",l()(e)),N(w.sunrise,w.sunset),h.style.display="flex",f.style.display="flex",_.style.display="none",_.style.borderRadius="35px",g.style.display="none",p.style.display="block",u.style.backgroundColor="#f7f7f7",d.removeAttribute("style"))};function E(e,t){return"https://api.openweathermap.org/data/2.5/"+e+"?q="+t+"&appid=48f3906fa74131a752b29b56bb64ec12"}const j=async e=>{try{return(await fetch(e)).json()}catch(e){throw e}},C=(e,t)=>{"one"==e&&(w.temp=Math.floor(t.main.temp-273.15),w.tempMin=Math.floor(t.main.temp_min-273.15),w.tempMax=Math.floor(t.main.temp_max-273.15),w.city=t.name,w.countryCode=t.sys.country,w.sunrise=new Date(1e3*t.sys.sunrise),w.sunset=new Date(1e3*t.sys.sunset),T(w),console.log(w)),"five"==e&&(S.city=t.city.name,S.countryCode=t.city.country,S.list=t.list,S.days=[],S.list.map(e=>{const t=new Date(1e3*e.dt),n={};-1==S.days.map(e=>e.DayNum).indexOf(t.getDate())&&(n.DayNum=t.getDate(),n.Day=(e=>{const t=[];return t[0]="Sunday",t[1]="Monday",t[2]="Tuesday",t[3]="Wednesday",t[4]="Thursday",t[5]="Friday",t[6]="Saturday",t[e]})(t.getDay()),n.Month=(e=>{const t=[];return t[0]="Jan",t[1]="Feb",t[2]="Mar",t[3]="Apr",t[4]="May",t[5]="Jun",t[6]="Jul",t[7]="Aug",t[8]="Sep",t[9]="Oct",t[10]="Nov",t[11]="Dec",t[e]})(t.getMonth()),S.days.push(n))}),S.days.map(e=>{const t=S.list.filter(t=>{if(new Date(1e3*t.dt).getUTCDate()==e.DayNum)return t});if(0==t.length)e.isData=!1;else{const n=t.map(e=>Math.floor(e.main.temp-273.15));e.TempMin=Math.min(...n),e.TempMax=Math.max(...n),e.list=t}}),0==S.days[5].isData?S.days.pop():S.days.shift(),console.log(S))};c.addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(this);D=t.get("query"),k=E("weather",D),j(k).then(e=>C("one",e)),k=E("forecast",D),j(k).then(e=>C("five",e))})),m.addEventListener("click",()=>T(w)),d.addEventListener("click",()=>(e=>{document.querySelector(".temperature-box")&&(document.querySelector(".temperature-box").remove(),u.removeAttribute("style"),d.style.backgroundColor="#f7f7f7");const t=document.querySelectorAll(".days-list__item");t&&t.forEach(e=>e.remove()),f.style.display="none",_.style.display="block",M.innerHTML+=o()(e)})(S)),M.addEventListener("click",(function(e){e.preventDefault();const t=e.target;"BUTTON"==t.nodeName&&(e=>{_.style.borderRadius="35px 35px 0 0",g.style.display="block";const t=Number(e.dataset.day),n=document.querySelectorAll(".timeWeather");n&&n.forEach(e=>e.remove());S.days.forEach(e=>{if(e.DayNum==t){const t=[];e.list.forEach(e=>{const n=new Date(1e3*e.dt),a={};a.time=q(n.getHours())+":"+q(n.getMinutes()),a.temp=Math.floor(e.main.temp-273.15),a.humidity=e.main.humidity,a.pressure=e.main.pressure,a.speed=e.wind.speed.toFixed(1),t.push(a)}),x.innerHTML+=i()(t)}})})(t)}));D="Kyiv",k=E("weather",D),j(k).then(e=>C("one",e)),k=E("forecast",D),j(k).then(e=>C("five",e));n("tNz6");var O={searchInput:document.querySelector(".search-location__form"),backgroundWrapper:document.querySelector(".background-wrapper")},L=n("czhI"),A=n.n(L),W={searchQuery:"kiev",apiKey:"16192319-9ae9d95026dacaeb88e2fcf6c",makeQuery(){const e=`https://pixabay.com/api/?image_type=backgrounds&orientation=horizontal&q=${this.query}&per_page=7&key=${this.apiKey}`;return A.a.get(e).then(({data:{hits:e}})=>e)},makeReserveQuery(){const e=`https://pixabay.com/api/?image_type=backgrounds&orientation=horizontal&q=clouds&per_page=7&key=${this.apiKey}`;return A.a.get(e).then(({data:{hits:e}})=>e)},get query(){return this.searchQuery},set query(e){this.searchQuery=e}};function Q(e){0===e.length?W.makeReserveQuery().then(Q):O.backgroundWrapper.style=`background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),\n  url('${e[6].largeImageURL}') center; background-size: cover;`}W.makeQuery().then(Q).catch(()=>{W.makeReserveQuery().then(Q)}),O.searchInput.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget;W.query=t.elements.query.value,W.makeQuery().then(Q)}));n("3Olm"),n("7jFK")},sntm:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,l){var s,o=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,i="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="days-list__item">\n    <h3 class="days-list__day-of-the-week">\n        '+c(typeof(s=null!=(s=u(n,"Day")||(null!=t?u(t,"Day"):t))?s:r)===i?s.call(o,{name:"Day",hash:{},data:l,loc:{start:{line:4,column:8},end:{line:4,column:15}}}):s)+'\n    </h3>\n    <h4 class="days-list__date">'+c(typeof(s=null!=(s=u(n,"DayNum")||(null!=t?u(t,"DayNum"):t))?s:r)===i?s.call(o,{name:"DayNum",hash:{},data:l,loc:{start:{line:6,column:32},end:{line:6,column:42}}}):s)+" "+c(typeof(s=null!=(s=u(n,"Month")||(null!=t?u(t,"Month"):t))?s:r)===i?s.call(o,{name:"Month",hash:{},data:l,loc:{start:{line:6,column:43},end:{line:6,column:52}}}):s)+'</h4>\n    <i class="days-list__img tmp-cloud-icon"></i>\n    <div class="days-list__temperature-block">\n        <div class="days-list__min days-list__min-max">\n            <p class="days-list__title">\n                min\n            </p>\n            <p class="days-list__value days-list__value--degrees">'+c(typeof(s=null!=(s=u(n,"TempMin")||(null!=t?u(t,"TempMin"):t))?s:r)===i?s.call(o,{name:"TempMin",hash:{},data:l,loc:{start:{line:14,column:66},end:{line:14,column:77}}}):s)+'</p>\n        </div>\n        <i class="days-list__line days-list__line--mobile tmp-line-m-icon"></i>\n        <i class="days-list__line days-list__line--tablet_desktop tmp-line-tp-icon"></i>\n        <div class="days-list__min-max">\n            <p class="days-list__title">\n                max\n            </p>\n            <p class="days-list__value days-list__value--degrees">'+c(typeof(s=null!=(s=u(n,"TempMax")||(null!=t?u(t,"TempMax"):t))?s:r)===i?s.call(o,{name:"TempMax",hash:{},data:l,loc:{start:{line:24,column:66},end:{line:24,column:77}}}):s)+'</p>\n        </div>\n    </div>\n    <button class="days-list__more-btn" type="button" data-day="'+c(typeof(s=null!=(s=u(n,"DayNum")||(null!=t?u(t,"DayNum"):t))?s:r)===i?s.call(o,{name:"DayNum",hash:{},data:l,loc:{start:{line:27,column:64},end:{line:27,column:74}}}):s)+'">\n        more info\n    </button>\n</li>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,l){var s,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(s=o(n,"each").call(null!=t?t:e.nullContext||{},null!=t?o(t,"days"):t,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:31,column:9}}}))?s:""},useData:!0})},tNz6:function(e,t){},xDKS:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,l){var s,o=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,i="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="timeWeather">\n    <p class="timeWeather__time">'+c(typeof(s=null!=(s=u(n,"time")||(null!=t?u(t,"time"):t))?s:r)===i?s.call(o,{name:"time",hash:{},data:l,loc:{start:{line:3,column:33},end:{line:3,column:41}}}):s)+'</p>\n    <p class="timeWeather__temp">'+c(typeof(s=null!=(s=u(n,"temp")||(null!=t?u(t,"temp"):t))?s:r)===i?s.call(o,{name:"temp",hash:{},data:l,loc:{start:{line:4,column:33},end:{line:4,column:41}}}):s)+' &#176;</p>\n    <ul class="timeWeather__data">\n        <li class="timeWeather__pressure">'+c(typeof(s=null!=(s=u(n,"pressure")||(null!=t?u(t,"pressure"):t))?s:r)===i?s.call(o,{name:"pressure",hash:{},data:l,loc:{start:{line:6,column:42},end:{line:6,column:54}}}):s)+' mm</li>\n        <li class="timeWeather__humidity">'+c(typeof(s=null!=(s=u(n,"humidity")||(null!=t?u(t,"humidity"):t))?s:r)===i?s.call(o,{name:"humidity",hash:{},data:l,loc:{start:{line:7,column:42},end:{line:7,column:54}}}):s)+'%</li>\n        <li class="timeWeather__wind">'+c(typeof(s=null!=(s=u(n,"speed")||(null!=t?u(t,"speed"):t))?s:r)===i?s.call(o,{name:"speed",hash:{},data:l,loc:{start:{line:8,column:38},end:{line:8,column:47}}}):s)+" m/s</li>\n    </ul>\n</div>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,l){var s;return null!=(s=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:11,column:9}}}))?s:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.c6c636c902c4cc0dab20.js.map